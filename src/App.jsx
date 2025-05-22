import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { PGliteProvider, usePGlite } from '@electric-sql/pglite-react';
import { BrowserRouter } from 'react-router-dom';
import pg from './db';

function AppContent() {
  const db = usePGlite();
  const [ready, setReady] = useState(false); // <- track if DB is ready

  useEffect(() => {
    const createTable = async () => {
      try {
        await db.query(`
          CREATE TABLE IF NOT EXISTS patients (
            id SERIAL PRIMARY KEY,
            full_name TEXT NOT NULL,
            age INTEGER,
            gender TEXT,
            blood_group TEXT,
            contact_number TEXT,
            email TEXT,
            created_at TEXT
          );
        `);
        console.log('Patients table ready.');
        setReady(true); // <- signal that DB is ready
      } catch (error) {
        console.error('Error creating patients table:', error);
      }
    };

    createTable();
  }, [db]);

  if (!ready) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-400 text-lg">
        Initializing database...
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}

function App() {
  return (
    <PGliteProvider db={pg}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </PGliteProvider>
  );
}

export default App;
