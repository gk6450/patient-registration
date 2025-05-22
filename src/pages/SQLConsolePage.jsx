import React from 'react';
import { Link } from 'react-router-dom';
import SQLConsole from '../components/SQLConsole';

export default function SQLConsolePage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-5xl mx-auto bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-teal-700">SQL Query Console</h1>
          <Link to="/" className="text-teal-600 hover:underline font-medium">
            ← Home
          </Link>
        </div>
        <SQLConsole />
      </div>
    </div>
  );
}