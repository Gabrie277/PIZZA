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
    <section id="projects" className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Promoção da Semana</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-lg shadow-lg hover:shadow-2xl transition text-center"
            >
              {project.imagem && (
                <img
                  src={project.imagem}
                  alt={project.title}
                  className="w-60 h-60 object-cover rounded-full mx-auto mb-4" // Ajuste de tamanho das imagens
                />
              )}
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.link} // Removido o target="_blank" para navegação interna
                className="text-blue-500 hover:underline"
              >
                Ver projeto
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
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
