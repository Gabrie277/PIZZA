'use client';

import React from "react";
import {
  FaMotorcycle,
} from "react-icons/fa";
import {
  SiIfood,
} from "react-icons/si";
import {
  MdDeliveryDining,
  MdShoppingCart,
} from "react-icons/md";

const Skills = () => {
  const comidas = [
    {
      nome: "nossa loja ",
      imagem: "https://www.emporiotambo.com.br/pub/media/resized/1300x800/ves/blog/xcomo-decorar-uma-lanchonete-com-pouco-dinheiro.jpg.pagespeed.ic.yIrOpJ0OYd.jpg",
    },
    {
      nome: "Atendimento",
      imagem: "https://casaeconstrucao.org/wp-content/uploads/2017/04/decora%C3%A7%C3%A3o-de-lanchonete-6.jpg",
    },
    {
      nome: "Caboradores",
      imagem: "https://i.pinimg.com/236x/49/6f/27/496f27c2662506d12d13eb232cb14249.jpg",
    },
    
  ];

  return (
    <section id="skills" className="bg-gray-100 text-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Nosso Cardápio</h2>

        {/* Ícones Temáticos */}
        <div className="flex justify-center gap-6 text-5xl text-red-500 mb-12">
          <MdShoppingCart title="Carrinho" />
          <FaMotorcycle title="Motoboy" />
          <MdDeliveryDining title="Entrega" />
          <SiIfood title="iFood" />
        </div>

        {/* Imagens grandes de comida estilo vitrine */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {comidas.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl overflow-hidden"
            >
              <img
                src={item.imagem}
                alt={item.nome}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">{item.nome}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
