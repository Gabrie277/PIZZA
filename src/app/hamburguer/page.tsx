'use client';

import React from "react";
import Image from "next/image";

interface HamburguerItem {
  title: string;
  description: string;
  imagem?: string;
}

const Hamburguer = () => {
  const phone = "5511999999999";

  const burgers: HamburguerItem[] = [
    {
      title: "Hambúrguer - BAURU",
      description: "Pão, carne, queijo, bacon, creme cheese, geleia de pimenta",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx8lRpqNB7WlEs6TVhqK5_kcmEHlhwL_2tbw&s",
    },
    {
      title: "Hambúrguer - CALABRESA",
      description: "Pão, carne 160g, calabresa, ovo, queijo, alface, tomate, cebola roxa",
      imagem: "https://acarnequeomundoprefere.com.br/uploads/media/image/frimesa-receita-hamburguer-de-linguica-de-pernil-horizontal-alta.jpg",
    },
    {
      title: "Hambúrguer - CHEDDAR BACON",
      description: "Pão, carne, cheddar cremoso, bacon crocante",
      imagem: "https://minhasreceitinhas.com.br/wp-content/uploads/2016/12/hamburguer-1200x800.jpg",
    },
    {
      title: "Hambúrguer - BBQ",
      description: "Pão, carne, queijo, cebola caramelizada, bacon e molho barbecue",
      imagem: "https://www.auroraalimentos.com.br/wp-content/uploads/2022/05/094_2_22_AURORA_HAMB_COSTELA_B_084-scaled.jpg",
    },
    {
      title: "Hambúrguer - VEGGIE",
      description: "Pão, hambúrguer vegetal, alface, tomate, maionese vegana",
      imagem: "https://guiadacozinha.com.br/wp-content/uploads/2020/03/hamburguer-de-quinoa-vegetariano.jpg",
    },
    {
      title: "Hambúrguer - DUPLO",
      description: "Pão, duas carnes, queijo duplo, bacon, alface, tomate",
      imagem: "https://conteudo.imguol.com.br/c/entretenimento/05/2022/11/03/smash-duplo-supreme-do-pa-1667487357987_v2_900x506.png",
    },
  ];

  const orderItem = (item: HamburguerItem) => {
    const message = `Olá! Gostaria de pedir:\n\n🍔 *${item.title}*\n📋 ${item.description}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="hamburguer" className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-black">Hambúrgueres</h2>

        <div className="grid text-black grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {burgers.map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-lg shadow-lg hover:shadow-2xl transition text-center"
            >
              {item.imagem && (
                <div className="w-40 h-40 sm:w-48 sm:h-48 relative mb-4 mx-auto">
                  <Image
                    src={item.imagem}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">{item.description}</p>
              <button
                onClick={() => orderItem(item)}
                className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition"
              >
                Pedir via WhatsApp
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hamburguer;
