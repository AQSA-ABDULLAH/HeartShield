import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#330000] text-white">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-red-800">
        <h1 className="text-xl font-bold">HeartShield</h1>
        <nav className="space-x-4 text-sm">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="underline">About Us</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center mt-12 px-4">
        <h2 className="text-4xl font-bold mb-2">About HeartShield</h2>
        <p className="text-gray-300">Revolutionizing Cardiac Care with Artificial Intelligence</p>
      </section>

      {/* Mission Section */}
      <section className="mt-12 px-4 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
        <div className="bg-red-900 rounded-md p-4 text-sm text-gray-300">
          At HeartShield, we’re redefining cardiac risk prediction through the power of artificial intelligence. 
          Our platform analyzes resting ECG images alongside key clinical attributes—such as age, cholesterol levels, 
          and smoking history—to assess the risk of serious cardiovascular conditions. By combining medical expertise 
          with deep learning technology, we empower healthcare providers and patients with early, accurate insights 
          that support timely intervention and better heart health outcomes.
        </div>
      </section>

      {/* Technology Section */}
      <section className="mt-16 px-4 max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold mb-6">Technology Behind HeartShield</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-red-900 rounded-md p-4">
            <h4 className="font-semibold mb-2">ECG Analysis (CNN)</h4>
            <p className="text-sm text-gray-300">
              Advanced convolutional neural networks analyze ECG patterns in real-time with clinical-grade accuracy
            </p>
          </div>
          <div className="bg-red-900 rounded-md p-4">
            <h4 className="font-semibold mb-2">Patient Integration</h4>
            <p className="text-sm text-gray-300">
              Seamless integration of patient attributes and medical history for comprehensive analysis
            </p>
          </div>
          <div className="bg-red-900 rounded-md p-4">
            <h4 className="font-semibold mb-2">Deep Learning</h4>
            <p className="text-sm text-gray-300">
              Advanced risk prediction models trained on millions of cardiac events
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 bg-[#220000] px-6 py-10 grid grid-cols-1 sm:grid-cols-4 gap-8 text-sm text-gray-300">
        <div>
          <h4 className="text-white font-semibold mb-2">HeartShield</h4>
          <p>Revolutionizing heart health monitoring with artificial intelligence</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Quick Links</h4>
          <ul>
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Resources</h4>
          <ul>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Research</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Connect</h4>
          <ul>
            <li><a href="#" className="hover:underline">Twitter</a></li>
            <li><a href="#" className="hover:underline">LinkedIn</a></li>
            <li><a href="#" className="hover:underline">Facebook</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
