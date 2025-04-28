import React from 'react';

function Home() {
  return (
    <div className="bg-[#330000] text-white min-h-screen font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6 border-b border-red-900">
        <h1 className="text-2xl font-bold">HeartSheild</h1>
        <nav className="space-x-6 text-sm">
          <a href="#" className="hover:text-red-400">Home</a>
          <a href="#" className="hover:text-red-400">About Us</a>
          <a href="#" className="hover:text-red-400">Health Tips</a>
          <a href="#" className="hover:text-red-400">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-8 py-12 flex flex-col md:flex-row justify-between items-center">
        <div className="max-w-xl space-y-6">
          <h2 className="text-4xl font-bold leading-tight">AI-Powered Heart Health</h2>
          <p className="text-sm text-gray-300">
            Advanced real-time monitoring and instant analysis powered by artificial intelligence for comprehensive cardiac care.
          </p>

          {/* Stats */}
          <div className="flex gap-4 mt-4">
            <div className="bg-red-700 rounded-lg px-4 py-2 text-center">
              <p className="text-2xl font-bold">98%</p>
              <p className="text-sm">Accuracy</p>
            </div>
            <div className="bg-red-700 rounded-lg px-4 py-2 text-center">
              <p className="text-2xl font-bold">24/7</p>
              <p className="text-sm">Monitoring</p>
            </div>
            <div className="bg-red-700 rounded-lg px-4 py-2 text-center">
              <p className="text-2xl font-bold">10K+</p>
              <p className="text-sm">Users Served</p>
            </div>
          </div>
        </div>

        {/* Right Image & Tips */}
        <div className="relative mt-10 md:mt-0">
          <img src="/heart-image.png" alt="Heart" className="w-64 mx-auto" />
          {/* Tooltips */}
          <div className="absolute top-2 -left-24 bg-red-900 p-2 rounded text-xs w-32">
            🍎 <strong>Eat Smart</strong><br />
            A balanced diet is key to heart health
          </div>
          <div className="absolute bottom-12 -left-24 bg-red-900 p-2 rounded text-xs w-32">
            🏃 <strong>Stay Fit</strong><br />
            30 Min daily exercise keeps your heart fit
          </div>
          <div className="absolute bottom-2 right-0 bg-red-900 p-2 rounded text-xs w-32">
            ✅ <strong>Check Regularly</strong><br />
            Timely checkups prevent heart disease
          </div>
        </div>
      </section>

      {/* Portal Buttons */}
      <section className="px-8 py-12">
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

      {/* Footer */}
      <footer className="bg-[#1a0000] px-8 py-10 text-sm text-gray-400">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h4 className="text-white font-bold mb-2">HeartSheild</h4>
            <p>Revolutionizing heart health monitoring with AI-powered solutions.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-1">Quick Links</h4>
            <ul className="space-y-1">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Health Tips</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-1">Resources</h4>
            <ul className="space-y-1">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-1">Connect</h4>
            <ul className="space-y-1">
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Twitter</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;

