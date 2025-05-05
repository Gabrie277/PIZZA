'use client'; // 👈 Adicionado no topo

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
      title: "Açaí 300ml",
      description: "3 complementos, 1 fruta, 1 cobertura e creme (opcional)",
      link: "https://wa.me/5511999999999",
      imagem: "https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/173990929767b4e8b16ab15_500_500.jpeg"
    },
    {
      title: "Açaí 400ml",
      description: "4 complementos, 1 fruta, 1 cobertura e creme (opcional).",
      link: "https://wa.me/5511999999999",
      imagem: "https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/173990922067b4e8646de16_500_500.jpeg"
    },
    {
      title: "Açaí 500ml",
      description: "5 complementos, 1 fruta, 1 cobertura e creme (opcional).",
      link: "https://wa.me/5511999999999",
      imagem: "https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/173990922067b4e8646de16_500_500.jpeg"
    },

    {
      title: "Açaí 750ml",
      description: "6 complementos, 2 fruta, 2 cobertura e creme (opcional)",
      link: "https://wa.me/5511999999999",
      imagem: "https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/173990934667b4e8e26a761_500_500.jpeg"
    },

  ];

  return (
    <section id="projects" className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Açaí no copo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-lg shadow-lg hover:shadow-2xl transition"
            >
              {project.imagem && (
                <img
                  src={project.imagem}
                  alt={project.title}
                  className="w-40 h-40 object-cover rounded-full mb-4 mx-auto"
                />
              )}
              <h3 className="text-xl font-bold mb-2 text-center">{project.title}</h3>
              <p className="text-gray-700 mb-4 text-center">{project.description}</p>
              <div className="text-center">
                <button
                  onClick={() => window.open(project.link, "_blank")}
                  className="bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition"
                >
                  Fazer Pedido
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
