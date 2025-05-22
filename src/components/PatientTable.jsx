import React, { useState, useEffect } from 'react';
import { useLiveQuery } from '@electric-sql/pglite-react';

export default function PatientTable() {
  const result = useLiveQuery('SELECT * FROM patients ORDER BY id DESC');

  if (result === undefined) {
    return <div className="text-center py-6 text-gray-400">Loading records...</div>;
  }

  const { rows } = result;

  if (rows.length === 0) {
    return <div className="text-center py-6 text-gray-400">No patient records available.</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead className="bg-teal-600 text-white">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium">Full Name</th>
            <th className="px-4 py-2 text-left text-sm font-medium">Age</th>
            <th className="px-4 py-2 text-left text-sm font-medium">Gender</th>
            <th className="px-4 py-2 text-left text-sm font-medium">Blood Group</th>
            <th className="px-4 py-2 text-left text-sm font-medium">Contact Number</th>
            <th className="px-4 py-2 text-left text-sm font-medium">Email</th>
            <th className="px-4 py-2 text-left text-sm font-medium">Created At</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {rows.map((p) => (
            <tr key={p.id} className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-800">{p.full_name}</td>
              <td className="px-4 py-3 text-sm text-gray-800">{p.age}</td>
              <td className="px-4 py-3 text-sm text-gray-800">{p.gender}</td>
              <td className="px-4 py-3 text-sm text-gray-800">{p.blood_group}</td>
              <td className="px-4 py-3 text-sm text-gray-800">{p.contact_number}</td>
              <td className="px-4 py-3 text-sm text-gray-800">{p.email}</td>
              <td className="px-4 py-3 text-sm text-gray-800">{p.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
