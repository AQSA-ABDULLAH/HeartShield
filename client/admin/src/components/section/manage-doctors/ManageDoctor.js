import React, { useState, useEffect } from "react";
import axios from "axios";

const DoctorManagement = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = () => {
    axios
      .get(`${API_URL}/api/doctor/get-doctors`)
      .then((res) => {
        const doctorData = res.data.doctors || [];
        setDoctors(doctorData);
      })
      .catch((err) => {
        console.error("Error fetching doctor data: ", err);
      });
  };

  const handleVerify = async (doctorId) => {
    try {
      const res = await axios.patch(`${API_URL}/api/doctor/approved`, {
        doctorId: doctorId,
      });

      console.log("Verified Response:", res.data);

      // Update the local doctor list with new license_status
      setDoctors((prevDoctors) =>
        prevDoctors.map((doc) =>
          doc._id === doctorId
            ? {
                ...doc,
                is_verified: true,
                license_status: "verified", // update this so UI updates instantly
              }
            : doc
        )
      );
    } catch (error) {
      console.error("Error verifying doctor:", error);
    }
  };

  const handleReject = async (doctorId) => {
    try {
      const res = await axios.patch(`${API_URL}/api/doctor/reject`, {
        doctorId: doctorId,
      });

      console.log("Rejected Response:", res.data);

      setDoctors((prevDoctors) =>
        prevDoctors.map((doc) =>
          doc._id === doctorId
            ? {
                ...doc,
                is_verified: false,
                license_status: "rejected",
              }
            : doc
        )
      );
    } catch (error) {
      console.error("Error rejecting doctor:", error);
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Doctor Management</h1>
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600 font-medium">
            <tr>
              <th className="px-6 py-4">Doctor Name</th>
              <th className="px-6 py-4">License Status</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {doctors.map((doctor, index) => (
              <tr key={index}>
                <td className="px-6 py-4">{doctor.fullName}</td>
                <td className="px-6 py-4">
                  {doctor.license_status === "verified" ? (
                    <span className="text-green-600 bg-green-100 px-3 py-1 rounded-full text-xs font-medium inline-flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Verified
                    </span>
                  ) : doctor.license_status === "rejected" ? (
                    <span className="text-white bg-red-500 px-3 py-1 rounded-full text-xs font-medium">
                      Rejected
                    </span>
                  ) : (
                    <span className="text-yellow-700 bg-yellow-100 px-3 py-1 rounded-full text-xs font-medium">
                      {doctor.license_status}
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 space-x-2">
                  {doctor.license_status === "pending" ? (
                    <>
                      <button
                        className="bg-[#3b0a00] text-white px-4 py-1 rounded hover:bg-red-900"
                        onClick={() => handleVerify(doctor._id)}
                      >
                        Verify License
                      </button>
                      <button
                        onClick={() => handleReject(doctor._id)}
                        className="border border-gray-300 text-gray-700 px-4 py-1 rounded hover:bg-gray-100"
                      >
                        Reject
                      </button>
                    </>
                  ) : (
                    <span className="text-gray-400 text-sm">No actions</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorManagement;
