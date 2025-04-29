import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-[#2D0101] text-white min-h-screen font-sans">
      {/* Header */}
      <header className="flex justify-between items-center h-[80px] px-[24px] bg-[#580101] border-b border-red-900">
        <h1 className="text-[32px] font-bold">HeartSheild</h1>
        <nav className="space-x-[50px] text-[20px] font-regular text-[#999999]">
          <Link to="#" className="hover:text-white">
            Home
          </Link>
          <Link to="#" className="hover:text-white">
            About Us
          </Link>
          <Link to="#" className="hover:text-white">
            Contact
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="ml-[140px] mt-[60px]">
        <section className=" flex flex-col md:flex-row justify-between">
          <div>
            <h2 className="w-[474px] font-inter text-[56px] font-bold leading-[61.6px]">
              AI-Powered Heart Health
            </h2>

            <p className="w-[573px] text-[#999999] font-inter text-[20px] font-normal leading-[30px] mt-[24px]">
              Advanced real-time monitoring and instant analysis powered by
              artificial intelligence for comprehensive cardiac care.
            </p>

            {/* Stats */}
            <div className="flex gap-[24px] mt-[36px]">
              <div className="w-[184px] h-[130px] flex flex-col justify-center flex-shrink-0 rounded-[16px] border border-[rgba(255,68,68,0.2)] bg-[rgba(255,68,68,0.1)] px-[28px]">
                <p className="text-[#F44] font-inter text-[32px] font-bold leading-[48px]">
                  98%
                </p>

                <p className="text-[#999999] font-inter text-[16px] font-normal leading-[24px]">
                  Accuracy
                </p>
              </div>

              <div className="w-[184px] h-[130px] flex flex-col justify-center flex-shrink-0 rounded-[16px] border border-[rgba(255,68,68,0.2)] bg-[rgba(255,68,68,0.1)] px-[28px]">
                <p className="text-[#F44] font-inter text-[32px] font-bold leading-[48px]">
                  24/7
                </p>

                <p className="text-[#999999] font-inter text-[16px] font-normal leading-[24px]">
                  Monitoring
                </p>
              </div>

              <div className="w-[184px] h-[130px] flex flex-col justify-center flex-shrink-0 rounded-[16px] border border-[rgba(255,68,68,0.2)] bg-[rgba(255,68,68,0.1)] px-[28px]">
                <p className="text-[#F44] font-inter text-[32px] font-bold leading-[48px]">
                  10K+
                </p>

                <p className="text-[#999999] font-inter text-[16px] font-normal leading-[24px]">
                  Users Served
                </p>
              </div>
            </div>
          </div>

          {/* Right Image & Tips */}
          <div className="relative mt-10 md:mt-0">
            <img
              src="/assest/heart.png"
              alt="Heart"
              className="w-[488px] h-[484px] mx-auto"
            />
            {/* Tooltips */}
            <div className="absolute top-2 -left-24 bg-red-900 p-2 rounded text-xs w-32">
             <strong>Eat Smart</strong>
              <br />A balanced diet is key to heart health
            </div>
            <div className="absolute bottom-12 -left-24 bg-red-900 p-2 rounded text-xs w-32">
             <strong>Stay Fit</strong>
              <br />
              30 Min daily exercise keeps your heart fit
            </div>
            <div className="absolute bottom-2 right-0 bg-red-900 p-2 rounded text-xs w-32">
              <strong>Check Regularly</strong>
              <br />
              Timely checkups prevent heart disease
            </div>
          </div>
        </section>

        {/* Portal Buttons */}
        <section className=" py-12">
          <h3 className="text-xl font-semibold mb-6">Select Your Portal</h3>
          <div className="space-y-4">
            {["Admin", "Doctor", "Patient"].map((role) => (
              <button
                key={role}
                className="w-full md:w-1/2 bg-[#5e0b0b] hover:bg-[#7c0f0f] text-white px-6 py-3 rounded-lg text-left"
              >
                {role} Dashboard
              </button>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-[#1a0000] px-8 py-10 text-sm text-gray-400">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h4 className="text-white font-bold mb-2">HeartSheild</h4>
            <p>
              Revolutionizing heart health monitoring with AI-powered solutions.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-1">Quick Links</h4>
            <ul className="space-y-1">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Health Tips</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-1">Resources</h4>
            <ul className="space-y-1">
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-1">Connect</h4>
            <ul className="space-y-1">
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
