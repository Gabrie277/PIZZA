'use client';

import React from "react";
import Image from "next/image";

interface Pizza {
  title: string;
  description: string;
  imagem?: string;
}

const PizzaComponent = () => {
  const phone = "5511999999999";

  const pizzas: Pizza[] = [
    {
      title: "Pizza BRIGADEIRO",
      description: "Mussarela, granulado",
      imagem: "https://blog.novasafra.com.br/wp-content/uploads/2016/01/pizza-de-brigadeiro-780x360.jpg",
    },
    {
      title: "Pizza MUSSARELA",
      description: "Molho, mussarela, tomate, azeitona, orégano",
      imagem: "https://s3-sa-east-1.amazonaws.com/superimg/img.produtos/6455572/645/img_1200_1.png",
    },
    {
      title: "Pizza CALABRESA",
      description: "Molho, mussarela, calabresa, cebola, azeitona, orégano",
      imagem: "https://receitatodahora.com.br/wp-content/uploads/2023/10/pizza-caseira-20-10-1200x900.jpg",
    },
    {
      title: "Pizza MARGUERITA",
      description: "Molho, mussarela, tomate, manjericão, orégano",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0KFDZkjY8zVpr1ftr2n7Rm_OLf0Eq3inoxw&s",
    },
    {
      title: "Pizza NAPOLITANA",
      description: "Molho, mussarela, presunto, cebola, tomate, azeitona, orégano",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkaqdJjAKheMe8wVSHg7wAVCFG_GwrLNksHw&s",
    },
    {
      title: "Pizza PORTUGUESA",
      description: "Molho, mussarela, presunto, ovo, pimentão, cebola, tomate, azeitona, orégano",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ttiho5NVYc9DbAXidCYMT3C5ZisHVBL21Q&s",
    },
    {
      title: "Pizza FRANGO",
      description: "Molho, mussarela, frango, milho, orégano",
      imagem: "https://www.sabornamesa.com.br/media/k2/items/cache/ada34cd2101afafaba465aad112ee3c1_XL.jpg",
    },
    {
      title: "Pizza FRANGO C/ CATUPIRY",
      description: "Molho, mussarela, frango, milho, catupiry, azeitona, orégano",
      imagem: "https://www.minhareceita.com.br/app/uploads/2020/09/Pizza-de-Frango-com-Catupiry-Caseira-desktop.jpg",
    },
    {
      title: "Pizza FRANGO C/ CHEDDAR",
      description: "Molho, mussarela, frango, bacon, milho, azeitona, orégano",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTofgdnsLn1tjAJA0smWzZj1KX-HoTIELOeNA&s",
    },
    {
      title: "Pizza MISTA",
      description: "Molho, mussarela, calabresa, bacon, manjericão, azeitona, orégano",
      imagem: "https://www.extrabom.com.br/uploads/produtos/original/174259_20230817161358_thumb_Pizza_Mista.png",
    },
    {
      title: "Pizza NORDESTINA",
      description: "Molho, mussarela, carne de sol, cebolinha, orégano",
      imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6A7armkDswYSfdk8XBArHLqiTauZsQwybGQ5MvsB5RoORxZ2xkyRG5PFnPatdFEimL2K4xEFKWv-QIrDWSBoqw0ppdwSbPJLbmGfHAUaxJdNN-9txva9sjaT4e4gE4raRIWXKB70SkDDz/w1200-h630-p-k-no-nu/Pizza+nordestina+-+carne+de+sol+-+pronta.JPG",
    },
    {
      title: "Pizza 4 QUEIJOS",
      description: "Molho, mussarela, cheddar, catupiry, parmesão, azeitona, orégano",
      imagem: "https://redefoodservice.com.br/wp-content/uploads/2023/07/Pizza-Quatro-Queijos.jpg",
    },
  ];

  const orderPizza = (pizza: Pizza) => {
    const message = `Olá! Gostaria de pedir:\n\n🍕 *${pizza.title}*\n📋 ${pizza.description}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-black">Cardápio de Pizzas</h2>

        <div className="grid text-black grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {pizzas.map((pizza, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-lg shadow-lg hover:shadow-2xl transition text-center flex flex-col h-[440px]"
            >
              {pizza.imagem && (
                <div className="w-40 h-40 relative mx-auto mb-4">
                  <Image
                    src={pizza.imagem}
                    alt={pizza.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{pizza.title}</h3>
              <p className="text-gray-700 text-sm mb-4 flex-1">{pizza.description}</p>
              <button
                onClick={() => orderPizza(pizza)}
                className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition w-full mt-auto"
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

export default PizzaComponent;

