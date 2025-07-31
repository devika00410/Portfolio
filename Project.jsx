import React from 'react';

function Project() {
  const project = [
    {
      slNo: 1,
      title: "Personal Portfolio",
      description: "A responsive web portfolio that showcases my skills, projects, and contact information using React and Tailwind CSS."
    },
    {
      slNo: 2,
      title: "Workout Website",
      description: "A fitness-focused site offering workout plans and healthy tips, ideal for health-conscious users."
    },
    {
      slNo: 3,
      title: "Food Website",
      description: "Platform to discover top-rated nearby restaurants and popular cuisines, built for food lovers."
    },
    {
      slNo: 4,
      title: "Fashion Website",
      description: "A style-oriented website for trendsetters, showcasing outfits and sustainable fashion collections."
    }
  ];

  return (
    <section id="projects" className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-10 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {project.map((project) => (
            <div
              key={project.slNo}
              className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
