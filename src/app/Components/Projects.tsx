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
      title: "Pizza 2 Sabores",
      description: "A partir de R$30,00.",
      link: "/Pizza",
      imagem: "https://i.panelinha.com.br/i1/bk-9264-receita-pizza-3x4.webp",
    },
    {
      title: "Açaí",
      description: "Landing page responsiva criada com HTML, CSS e Tailwind CSS.",
      link: "/acai",
      imagem: "https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/173990929767b4e8b16ab15_500_500.jpeg",
    },
    {
      title: "Pizza 1 Sabor",
      description: "A partir de R$30,00.",
      link: "/pizzagrande",
      imagem: "https://img.cdndsgni.com/preview/11315717.jpg",
    },
    {
      title: "Hambúrguer",
      description: "A partir de R$30,00.",
      link: "/hamburguer", // Corrigido aqui
      imagem: "https://static.itdg.com.br/images/640-440/49687a8a7a7110c7f560b9c7e96a9d0e/254679-shutterstock-364110890-1-.jpg",
    },
  ];

  return (
    <section id="projects" className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Cardápio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition text-center"
            >
              {project.imagem && (
                <img
                  src={project.imagem}
                  alt={project.title}
                  className="w-40 h-40 object-cover rounded-full mb-4 mx-auto"
                />
              )}
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-500 hover:underline"
              >
                Ver produto
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="/projects"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Ver todos os produtos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
