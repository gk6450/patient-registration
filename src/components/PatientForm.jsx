import React, { useState } from 'react';
import { usePGlite } from '@electric-sql/pglite-react';
import dayjs from 'dayjs';

export default function PatientForm() {
  const db = usePGlite();
  const [formData, setFormData] = useState({
    fullName: '', age: '', gender: '', bloodGroup: '', contact: '', email: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setSubmitting(true);
    const createdAt = dayjs().format('DD-MMM-YYYY').toUpperCase();
    const { fullName, age, gender, bloodGroup, contact, email } = formData;
    await db.query(
      `INSERT INTO patients (full_name, age, gender, blood_group, contact_number, email, created_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [fullName, parseInt(age), gender, bloodGroup, contact, email, createdAt]
    );
    setFormData({ fullName: '', age: '', gender: '', bloodGroup: '', contact: '', email: '' });
    setSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Full Name"
        required
        className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-400"
      />
      <input
        name="age"
        type="number"
        value={formData.age}
        onChange={handleChange}
        placeholder="Age"
        required
        className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-400"
      />
      <select
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        required
        className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-400"
      >
        <option value="" disabled>Select Gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>
      <select
        name="bloodGroup"
        value={formData.bloodGroup}
        onChange={handleChange}
        required
        className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
      >
        <option value="" disabled>Select Blood Group</option>
        <option>A+</option>
        <option>A-</option>
        <option>B+</option>
        <option>B-</option>
        <option>O+</option>
        <option>O-</option>
        <option>AB+</option>
        <option>AB-</option>
      </select>
      <input
        name="contact"
        value={formData.contact}
        onChange={handleChange}
        placeholder="Contact Number"
        required
        className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-400"
      />
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
        className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-400"
      />
      <button
        type="submit"
        disabled={submitting}
        className="col-span-1 md:col-span-2 bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 rounded-xl transition disabled:opacity-50"
      >
        {submitting ? 'Registering...' : 'Register Patient'}
      </button>
    </form>
  );
}