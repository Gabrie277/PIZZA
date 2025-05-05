'use client';

import React from "react";

interface Project {
  title: string;
  description: string;
  link: string;
  imagem?: string;
}

const Projects = () => {
  const burgers: Project[] = [
    {
      title: "Hambúrguer - BAURU",
      description: "Pão, carne, queijo, bacon, creme cheese, geleia de pimenta",
      link: "https://wa.me/5511999999999",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx8lRpqNB7WlEs6TVhqK5_kcmEHlhwL_2tbw&s",
    },
    {
      title: "Hambúrguer - CALABRESA",
      description: "Pão, carne 160g, calabresa, ovo, queijo, alface, tomate, cebola roxa",
      link: "https://wa.me/5511999999999",
      imagem: "https://acarnequeomundoprefere.com.br/uploads/media/image/frimesa-receita-hamburguer-de-linguica-de-pernil-horizontal-alta.jpg",
    },
    {
      title: "Hambúrguer - CHEDDAR BACON",
      description: "Pão, carne, cheddar cremoso, bacon crocante",
      link: "https://wa.me/5511999999999",
      imagem: "https://minhasreceitinhas.com.br/wp-content/uploads/2016/12/hamburguer-1200x800.jpg",
    },
    {
      title: "Hambúrguer - BBQ",
      description: "Pão, carne, queijo, cebola caramelizada, bacon e molho barbecue",
      link: "https://wa.me/5511999999999",
      imagem: "https://www.auroraalimentos.com.br/wp-content/uploads/2022/05/094_2_22_AURORA_HAMB_COSTELA_B_084-scaled.jpg",
    },
    {
      title: "Hambúrguer - VEGGIE",
      description: "Pão, hambúrguer vegetal, alface, tomate, maionese vegana",
      link: "https://wa.me/5511999999999",
      imagem: "https://guiadacozinha.com.br/wp-content/uploads/2020/03/hamburguer-de-quinoa-vegetariano.jpg",
    },
    {
      title: "Hambúrguer - DUPLO",
      description: "Pão, duas carnes, queijo duplo, bacon, alface, tomate",
      link: "https://wa.me/5511999999999",
      imagem: "https://conteudo.imguol.com.br/c/entretenimento/05/2022/11/03/smash-duplo-supreme-do-pa-1667487357987_v2_900x506.png",
    },
  ];

  return (
    <section id="projects" className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Hambúrgueres</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {burgers.map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-lg shadow-lg hover:shadow-2xl transition text-center"
            >
              {item.imagem && (
                <img
                  src={item.imagem}
                  alt={item.title}
                  className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-full mb-4 mx-auto"
                />
              )}
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">{item.description}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition inline-block"
              >
                Fazer Pedido
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
