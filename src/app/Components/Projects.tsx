'use client';

import React from "react";

interface Project {
  title: string;
  description: string;
  link: string;
  imagem?: string;
}

const Projects = () => {
  const menuItems: Project[] = [
    {
      title: "Pizza Grander",
      description: "A partir de R$30,00.",
      link: "/PizzaComponent",
      imagem: "https://i.panelinha.com.br/i1/bk-9264-receita-pizza-3x4.webp",
    },
    {
      title: "Açaí",
      description: "Landing page responsiva criada com HTML, CSS e Tailwind CSS.",
      link: "/AcaiItem",
      imagem: "https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/173990929767b4e8b16ab15_500_500.jpeg",
    },
    {
      title: "Pizza",
      description: "A partir de R$30,00.",
      link: "/Pizzagrande",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd7Q7jYtUMN-j3CEfEkt4sO_6-ORoCJXBvIw&s",
    },
    {
      title: "Hambúrguer",
      description: "A partir de R$30,00.",
      link: "/hamburguer",
      imagem: "https://static.itdg.com.br/images/640-440/49687a8a7a7110c7f560b9c7e96a9d0e/254679-shutterstock-364110890-1-.jpg",
    },
  ];

  const promoItems: Project[] = [
    {
      title: "Pizzaria e mais um refri de 1 litro",
      description: "Um aplicativo web desenvolvido com React e Node.js para gestão de tarefas.",
      link: "/PizzaComponent",
      imagem: "https://img77.uenicdn.com/image/upload/v1571578116/business/f866658a-e1e2-4f49-a8e7-6e40c0e989f1.jpg"
    },
    {
      title: "Pizza Grande",
      description: "A partir de R$30,00.",
      link: "/PizzaComponent",
      imagem: "https://i.panelinha.com.br/i1/bk-9264-receita-pizza-3x4.webp"
    },
    {
      title: "Açaí",
      description: "API RESTful para um sistema de inventário usando Express.js e MongoDB.",
      link: "/AcaiItem",
      imagem: "https://blog.finamac.com/wp-content/uploads/2020/03/original-b311a43bc2bdadb8b1cac3109956d1f3.jpeg"
    },
  ];

  return (
    <>
      {/* Cardápio */}
      <section id="cardapio" className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-lg font-semibold mb-2 text-black"></h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition-all duration-300 text-center"
              >
                {item.imagem && (
                  <img
                    src={item.imagem}
                    alt={item.title}
                    className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full mx-auto mb-4"
                  />
                )}
                <h3 className="text-lg font-semibold mb-2 text-black">{item.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{item.description}</p>
                <a
                  href={item.link}
                  className="inline-block text-blue-600 hover:text-blue-800 font-medium"
                >
                  Ver produto
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promoção da Semana */}
      <section id="promocoes" className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-black">Promoção da Semana</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {promoItems.map((item, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center h-[400px]"
              >
                {item.imagem && (
                  <img
                    src={item.imagem}
                    alt={item.title}
                    className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-full mb-4"
                  />
                )}
                <h3 className="text-lg font-semibold mb-2 text-black">{item.title}</h3>
                <p className="text-gray-700 text-sm mb-4 flex-1">{item.description}</p>
                <a
                  href={item.link}
                  className="inline-block text-blue-600 hover:text-blue-800 font-medium"
                >
                  Ver produto
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
