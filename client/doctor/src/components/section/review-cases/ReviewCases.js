import React from "react";
import { useNavigate } from "react-router-dom";

const cases = [
  {
    name: "Sarah Johnson",
    date: "2024-01-15",
    risk: "High Risk",
    riskColor: "bg-red-100 text-red-600 border-red-300"
  },
  {
    name: "Michael Smith",
    date: "2024-01-14",
    risk: "Low Risk",
    riskColor: "bg-green-100 text-green-600 border-green-300"
  },
  {
    name: "Emma Davis",
    date: "2024-01-14",
    risk: "High Risk",
    riskColor: "bg-red-100 text-red-600 border-red-300"
  },
  {
    name: "James Wilson",
    date: "2024-01-13",
    risk: "Low Risk",
    riskColor: "bg-green-100 text-green-600 border-green-300"
  },
  {
    name: "Patricia Brown",
    date: "2024-01-13",
    risk: "High Risk",
    riskColor: "bg-red-100 text-red-600 border-red-300"
  }
];

export default function HighRiskCasesTable() {
  const navigate = useNavigate();

  const handleViewCase = () => {
    navigate("/review-case-details");
  };
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="px-6 py-4">
          <h2 className="text-2xl font-bold mb-1">Review High-Risk Cases</h2>
          <p className="text-sm text-gray-500 mb-4">
            Validate and update AI predictions.
          </p>
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left border-b">
                <th className="py-2 font-medium">Patient Name</th>
                <th className="py-2 font-medium">Date Uploaded</th>
                <th className="py-2 font-medium">AI Risk Prediction</th>
                <th className="py-2 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {cases.map((c, i) => (
                <tr key={i} className="border-t">
                  <td className="py-2">{c.name}</td>
                  <td className="py-2">{c.date}</td>
                  <td className="py-2">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${c.riskColor}`}
                    >
                      {c.risk}
                    </span>
                  </td>
                  <td className="py-2">
                    <button className="bg-[#2B0000] text-white text-xs px-4 py-1 rounded-md" onClick={handleViewCase}>
                      View Case
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
