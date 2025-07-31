import React from 'react';

function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Hi, I'm <span className="text-indigo-600">Devika</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8">
          MERN Stack Developer
        </h2>
        <p className="text-m sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
          I build modern, responsive web applications with clean code and intuitive user experiences.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105 shadow-lg">
            Let's Connect
          </button>
          <button className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition duration-300 transform hover:scale-105">
            View My Work
          </button>
        </div>
        <div class="flex justify-center mt-20">
  <div class="w-15 h-15 rounded-full border-1 border-gray-300 flex items-center justify-center animate-bounce">
    <div class="w-3 h-3 border-b-2 border-r-2 border-indigo-500 rotate-45"></div>
  </div>
</div>

      </div>

    </section>
  );
}

export default Home;