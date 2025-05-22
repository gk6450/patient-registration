# 🏥 Patient Registration App 

[Live Demo ->](https://patient-registration-psi.vercel.app/)

A frontend-only patient registration system built with React, Vite, Tailwind CSS, and PGlite (Dblite) for persistent, cross-tab synchronized storage in the browser.

---

## Features

- **Register New Patients** via raw SQL `INSERT` statements
- **Query Records** using a built-in SQL console
- **Persistent Storage** across page refreshes and browser restarts (IndexedDB)
- **Live Updates**: changes sync automatically across multiple tabs using the `live` extension

---

## Tech Stack

- [React 19](https://reactjs.org/)
- [Vite](https://vitejs.dev/) as the build tool
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [PGlite (@electric-sql/pglite)](https://github.com/electric-sql/pglite) for client-side SQLite
- [React Router v7](https://reactrouter.com/en/main)
- [Day.js](https://day.js.org/) for date formatting

---

## Setup and Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/gk6450/patient-registration.git
   cd patient-registration

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install

3. **Start the dev server**

   ```bash
   npm run dev
   # or
   yarn dev

- The app will be available at http://localhost:5173 by default.

4. **Preview production build locally**

   ```bash
   npm run build
   npm run preview

---

## Usage

1. **Register a Patient**
   - Navigate to **Dashboard**.
   - Fill in all required patient fields.
   - Click **Register**.

2. **View Patients**
   - Registered patients appear in the table below the form.

3. **Raw SQL Console**
   - Navigate to **SQL Console** via the sidebar.
   - Enter any valid SQL query (e.g., `SELECT * FROM patients;`).
   - Click **Run Query** to see results.

4. **Cross-Tab Sync & Persistence**
   - Open the app in multiple tabs.
   - Adding a patient in one tab immediately updates the table in all others.
   - Refresh any tab to confirm data persists.
  
---
