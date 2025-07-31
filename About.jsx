import React from 'react'
import Girl from '../assets/Women.jpg'

function About() {
  return (
    <section className='relative bg-white overflow-hidden shadow-xl'>
      <div className='min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20'>
        <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center'>
          {/* Photo section */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-indigo-100 rounded-2xl -rotate-1 group-hover:rotate-0 transition duration-500" />
            <div className="relative h-116 bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl shadow-lg border border-gray-200 overflow-hidden flex items-center justify-center text-gray-400">
              <img src={Girl} alt="Profile" className="object-cover object-center" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>

          {/* Text section */}
          <div className='mb-8'>
            <h1 className='text-4xl sm:text-5xl font-extrabold text-gray-900'>
              My <span className='text-indigo-600'>Story</span>
            </h1>
            <div className="w-20 h-1 bg-indigo-600 mt-3"></div>
            <div className='space-y-4 text-gray-600 mt-8'>
                          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Building digital solutions with purpose and precision.
            </h2>
              <p className='text-lg mt-7'> I'm Devika Anilkumar, a MERN stack developer dedicated to crafting robust web applications that solve real problems. My journey in tech began with a curiosity about how things work, which evolved into a passion for creating things that work beautifully.</p>
            <p className='text-lg'>What excites me most about development is that perfect intersection where clean code meets intuitive design. I specialize in building full-stack JavaScript applications that are as enjoyable to use as they are to maintain.</p>
            <p className='text-lg'>When I'm not immersed in code, you'll find me exploring the latest in UI/UX trends, contributing to open-source projects, or mentoring aspiring developers.</p>
            </div>
            <button className='bg-indigo-600 text-white px-6 py-3 font-medium rounded-lg transition duration-300 transform hover:scale-105 shadow-lg mt-8'>View my projects</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About