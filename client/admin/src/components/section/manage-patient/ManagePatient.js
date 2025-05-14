import React from 'react';
import { useEffect } from 'react';

const patients = [
  { name: 'Sarah Ali', age: 45 },
  { name: 'Fatima Asif', age: 32 },
  { name: 'Jawwad Ali', age: 28 },
  { name: 'Maryam Fatima', age: 56 },
  { name: 'Lisa Thompson', age: 39 },
  { name: 'James Wilson', age: 41 },
  { name: 'Maria Garcia', age: 35 },
  { name: 'Robert Taylor', age: 48 },
];

const PatientManagement = () => {
    useEffect(() => {
  console.log("PatientManagement loaded");
}, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Patient Management</h1>
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600 font-medium">
            <tr>
              <th className="px-6 py-4">Patient Name</th>
              <th className="px-6 py-4">Age</th>
              <th className="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {patients.map((patient, index) => (
              <tr key={index}>
                <td className="px-6 py-4">{patient.name}</td>
                <td className="px-6 py-4">{patient.age}</td>
                <td className="px-6 py-4">
                  <button className="bg-[#3b0a00] text-white px-4 py-1 rounded hover:bg-red-900">
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientManagement;