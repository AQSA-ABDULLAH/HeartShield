import React from 'react'
import { Link } from 'react-router-dom'

function HomeSection2() {
  const DOCTOR_URL = process.env.REACT_APP_DOCTOR_URL;
  const ADMIN_URL = process.env.REACT_APP_ADMIN_URL;
  const getLinkPath = (role) => {
    switch (role) {
      case "Patient":
        return "/login";
      case "Admin":
        return `${ADMIN_URL}`;
      case "Doctor":
        return `${DOCTOR_URL}`;
      default:
        return "/";
    }
  };

  return (
    <section className="mb-[120px]">
      <h3 className="text-[24px] font-semibold mb-[20px]">Select Your Portal</h3>
      <div className="flex flex-col space-y-[16px]">
        {["Admin", "Doctor", "Patient"].map((role) => (
          <Link to={getLinkPath(role)} key={role}>
            <div
              className="w-[600px] h-[75px] flex justify-between items-center bg-[#B55151] hover:bg-[#8d3e3e] text-white px-6 rounded-lg text-[18px] cursor-pointer"
            >
              <div className="flex items-center space-x-[24px]">
                <img src="/assest/icon.png" alt="Heart" className="w-[24px] h-[24px]" />
                <p>{role} Dashboard</p>
              </div>
              <img src="/assest/arrow.png" alt="Arrow" className="w-4 h-4 float-right" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default HomeSection2;

