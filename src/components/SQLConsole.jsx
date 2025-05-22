import React, { useState } from 'react';
import { usePGlite } from '@electric-sql/pglite-react';

export default function SQLConsole() {
  const db = usePGlite();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const executeQuery = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await db.query(query);
      setResults(res.rows);
    } catch (err) {
      setError(err.message);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full h-24 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 mb-4 placeholder-gray-400"
        placeholder="Enter SQL query (SELECT * FROM patients)"
      />
      <div className="flex justify-center mb-4">
        <button
          onClick={executeQuery}
          className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-4 py-3 rounded-xl transition disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Executing...' : 'Run Query'}
        </button>
      </div>


      {loading && <div className="text-center text-gray-500">Loading results...</div>}
      {error && <div className="text-red-500 mt-4">Error: {error}</div>}

      {results && (
        <div className="overflow-x-auto mt-4">
          {results.length === 0 ? (
            <div className="text-center text-gray-500 py-6">No data returned.</div>
          ) : (
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-teal-600 text-white">
                <tr>
                  {Object.keys(results[0]).map((key) => (
                    <th key={key} className="px-4 py-2 text-left text-sm font-medium">
                      {key.replace(/_/g, ' ').toUpperCase()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {results.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    {Object.values(row).map((val, i) => (
                      <td key={i} className="px-4 py-3 text-sm text-gray-800">
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}
