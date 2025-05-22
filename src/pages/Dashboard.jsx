import React from 'react';
import { useNavigate } from 'react-router-dom';
import PatientForm from '../components/PatientForm';
import PatientTable from '../components/PatientTable';

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-5xl mx-auto bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-200">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-teal-700">
            Patient Registration App
          </h1>
          <button
            onClick={() => navigate('/sql-console')}
            className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-4 py-3 rounded-xl transition"
          >
            SQL Console
          </button>
        </div>

        <section className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Register New Patient</h2>
          </div>
          <PatientForm />
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Patient Records</h2>
          <PatientTable />
        </section>
      </div>
    </div>
  );
}