import React, { useState } from 'react';

function Skill() {
  const skills = [
    { name: "React Js", desc: "A JavaScript library for building user interfaces." },
    { name: "JavaScript", desc: "A programming language that brings interactivity to the web." },
    { name: "HTML5", desc: "Standard markup language for building web pages." },
    { name: "CSS3", desc: "Used to style and design web pages beautifully." },
    { name: "Bootstrap", desc: "Popular CSS framework for responsive web design." },
    { name: "Tailwind CSS", desc: "Utility-first CSS framework for fast UI development." }
  ];

  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <section id="skills" className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-indigo-600 mb-8 text-center">My Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              onClick={() => setSelectedSkill(skill)}
              className="cursor-pointer bg-gray-100 text-center text-gray-800 px-4 py-6 rounded-lg shadow-sm hover:bg-indigo-50 hover:shadow-md transition duration-300"
            >
              <p className="font-medium">{skill.name}</p>
            </div>
          ))}
        </div>

        {/* Description card */}
        {selectedSkill && (
          <div className="max-w-md mx-auto bg-indigo-100 border border-indigo-300 rounded-lg p-6 shadow-md text-gray-800 transition duration-300">
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">{selectedSkill.name}</h3>
            <p>{selectedSkill.desc}</p>
            <button onClick={() => setSelectedSkill(null)} className="mt-4 text-sm text-indigo-600 hover:underline">Close</button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Skill;
