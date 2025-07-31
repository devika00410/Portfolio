import React from 'react';
import Header from './Header'; // adjust path if needed

function Navbar() {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Header />

        {/* Navigation Links */}
        <nav>
          <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
            <li><a href="#home" className="hover:text-indigo-600 transition">Home</a></li>
            <li><a href="#about" className="hover:text-indigo-600 transition">About</a></li>
            <li><a href="#skills" className="hover:text-indigo-600 transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-indigo-600 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-indigo-600 transition">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
