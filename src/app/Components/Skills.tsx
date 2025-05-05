'use client';

import React from "react";

interface Project {
  title: string;
  description: string;
  link: string;
  imagem?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Pizzaria e mais um refri de 1 litro",
      description: "Um aplicativo web desenvolvido com React e Node.js para gestão de tarefas.",
      link: "/Pizza",
      imagem: "https://img77.uenicdn.com/image/upload/v1571578116/business/f866658a-e1e2-4f49-a8e7-6e40c0e989f1.jpg"
    },
    {
      title: "Pizza 2 Sabores",
      description: "A partir de R$30,00.",
      link: "/Pizza",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqx0s0QVnE8hOK2p3dIcXCLFEaIBDfXUcZ7g&s"
    },
    {
      title: "Açaí",
      description: "API RESTful para um sistema de inventário usando Express.js e MongoDB.",
      link: "/acai",
      imagem: "https://blog.finamac.com/wp-content/uploads/2020/03/original-b311a43bc2bdadb8b1cac3109956d1f3.jpeg"
    },
  ];

  return (
    <section id="projects" className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Promoção da Semana</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition-all duration-300 text-center"
            >
              {project.imagem && (
                <img
                  src={project.imagem}
                  alt={project.title}
                  className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-full mx-auto mb-4"
                />
              )}
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 text-sm mb-4">{project.description}</p>
              <a
                href={project.link}
                className="inline-block text-blue-600 hover:text-blue-800 font-medium"
              >
                Ver projeto
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/projects"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Ver todos os projetos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
