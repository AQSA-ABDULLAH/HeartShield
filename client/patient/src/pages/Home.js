import React from "react";
import HomeSection1 from "../components/home/section1/HomeSection1";
import HomeSection2 from "../components/home/section2/HomeSection2";
import Header from "../components/home/header/Header";

function Home() {
  return (
    <div className="bg-[#2D0101] text-white min-h-screen font-sans">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="ml-[140px] mt-[60px]">
        <HomeSection1 />
        <HomeSection2 />
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
