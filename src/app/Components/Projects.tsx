'use client';

import React from "react";
import Image from 'next/image'; // Importando o componente Image do Next.js

interface CardapioItem {
  title: string;
  description: string;
  imagem?: string;
  categoria: "Pizza" | "Hamburguer" | "Acai";
}

const Projects = () => {
  const whatsappPhone = "5511999999999"; // Número de WhatsApp

  const cardapio: CardapioItem[] = [
    // 🍕 PIZZAS
    {
      title: "Pizza BRIGADEIRO",
      description: "Mussarela, granulado",
      imagem: "https://blog.novasafra.com.br/wp-content/uploads/2016/01/pizza-de-brigadeiro-780x360.jpg",
      categoria: "Pizza",
    },
    {
      title: "Pizza MUSSARELA",
      description: "Molho, mussarela, tomate, azeitona, orégano",
      imagem: "https://s3-sa-east-1.amazonaws.com/superimg/img.produtos/6455572/645/img_1200_1.png",
      categoria: "Pizza",
    },
    {
      title: "Pizza CALABRESA",
      description: "Molho, mussarela, calabresa, cebola, azeitona, orégano",
      imagem: "https://receitatodahora.com.br/wp-content/uploads/2023/10/pizza-caseira-20-10-1200x900.jpg",
      categoria: "Pizza",
    },
    {
      title: "Pizza MARGUERITA",
      description: "Molho, mussarela, tomate, manjericão, orégano",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0KFDZkjY8zVpr1ftr2n7Rm_OLf0Eq3inoxw&s",
      categoria: "Pizza",
    },
    {
      title: "Pizza NAPOLITANA",
      description: "Molho, mussarela, presunto, cebola, tomate, azeitona, orégano",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkaqdJjAKheMe8wVSHg7wAVCFG_GwrLNksHw&s",
      categoria: "Pizza",
    },
    {
      title: "Pizza PORTUGUESA",
      description: "Molho, mussarela, presunto, ovo, pimentão, cebola, tomate, azeitona, orégano",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ttiho5NVYc9DbAXidCYMT3C5ZisHVBL21Q&s",
      categoria: "Pizza",
    },
    {
      title: "Pizza FRANGO",
      description: "Molho, mussarela, frango, milho, orégano",
      imagem: "https://www.sabornamesa.com.br/media/k2/items/cache/ada34cd2101afafaba465aad112ee3c1_XL.jpg",
      categoria: "Pizza",
    },
    {
      title: "Pizza FRANGO C/ CATUPIRY",
      description: "Molho, mussarela, frango, milho, catupiry, azeitona, orégano",
      imagem: "https://www.minhareceita.com.br/app/uploads/2020/09/Pizza-de-Frango-com-Catupiry-Caseira-desktop.jpg",
      categoria: "Pizza",
    },
    {
      title: "Pizza FRANGO C/ CHEDDAR",
      description: "Molho, mussarela, frango, bacon, milho, azeitona, orégano",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTofgdnsLn1tjAJA0smWzZj1KX-HoTIELOeNA&s",
      categoria: "Pizza",
    },
    {
      title: "Pizza MISTA",
      description: "Molho, mussarela, calabresa, bacon, manjericão, azeitona, orégano",
      imagem: "https://www.extrabom.com.br/uploads/produtos/original/174259_20230817161358_thumb_Pizza_Mista.png",
      categoria: "Pizza",
    },
    {
      title: "Pizza NORDESTINA",
      description: "Molho, mussarela, carne de sol, cebolinha, orégano",
      imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6A7armkDswYSfdk8XBArHLqiTauZsQwybGQ5MvsB5RoORxZ2xkyRG5PFnPatdFEimL2K4xEFKWv-QIrDWSBoqw0ppdwSbPJLbmGfHAUaxJdNN-9txva9sjaT4e4gE4raRIWXKB70SkDDz/w1200-h630-p-k-no-nu/Pizza+nordestina+-+carne+de+sol+-+pronta.JPG",
      categoria: "Pizza",
    },
    {
      title: "Pizza 4 QUEIJOS",
      description: "Molho, mussarela, cheddar, catupiry, parmesão, azeitona, orégano",
      imagem: "https://redefoodservice.com.br/wp-content/uploads/2023/07/Pizza-Quatro-Queijos.jpg",
      categoria: "Pizza",
    },

    // 🍔 HAMBÚRGUERES
    {
      title: "Hambúrguer - BAURU",
      description: "Pão, carne, queijo, bacon, creme cheese, geleia de pimenta",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx8lRpqNB7WlEs6TVhqK5_kcmEHlhwL_2tbw&s",
      categoria: "Hamburguer",
    },
    {
      title: "Hambúrguer - CALABRESA",
      description: "Pão, carne 160g, calabresa, ovo, queijo, alface, tomate, cebola roxa",
      imagem: "https://acarnequeomundoprefere.com.br/uploads/media/image/frimesa-receita-hamburguer-de-linguica-de-pernil-horizontal-alta.jpg",
      categoria: "Hamburguer",
    },
    {
      title: "Hambúrguer - CHEDDAR BACON",
      description: "Pão, carne, cheddar cremoso, bacon crocante",
      imagem: "https://minhasreceitinhas.com.br/wp-content/uploads/2016/12/hamburguer-1200x800.jpg",
      categoria: "Hamburguer",
    },
    {
      title: "Hambúrguer - BBQ",
      description: "Pão, carne, queijo, cebola caramelizada, bacon e molho barbecue",
      imagem: "https://www.auroraalimentos.com.br/wp-content/uploads/2022/05/094_2_22_AURORA_HAMB_COSTELA_B_084-scaled.jpg",
      categoria: "Hamburguer",
    },
    {
      title: "Hambúrguer - VEGGIE",
      description: "Pão, hambúrguer vegetal, alface, tomate, maionese vegana",
      imagem: "https://guiadacozinha.com.br/wp-content/uploads/2020/03/hamburguer-de-quinoa-vegetariano.jpg",
      categoria: "Hamburguer",
    },
    {
      title: "Hambúrguer - DUPLO",
      description: "Pão, duas carnes, queijo duplo, bacon, alface, tomate",
      imagem: "https://conteudo.imguol.com.br/c/entretenimento/05/2022/11/03/smash-duplo-supreme-do-pa-1667487357987_v2_900x506.png",
      categoria: "Hamburguer",
    },

    // 🍧 AÇAÍ
    {
      title: "Açaí 300ml",
      description: "3 complementos, 1 fruta, 1 cobertura e creme (opcional)",
      imagem: "https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/173990929767b4e8b16ab15_500_500.jpeg",
      categoria: "Acai",
    },
    {
      title: "Açaí 400ml",
      description: "4 complementos, 1 fruta, 1 cobertura e creme (opcional).",
      imagem: "https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/173990922067b4e8646de16_500_500.jpeg",
      categoria: "Acai",
    },
    {
      title: "Açaí 500ml",
      description: "5 complementos, 1 fruta, 1 cobertura e creme (opcional).",
      imagem: "https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/173990922067b4e8646de16_500_500.jpeg",
      categoria: "Acai",
    },
    {
      title: "Açaí 750ml",
      description: "6 complementos, 2 frutas, 2 coberturas e creme (opcional)",
      imagem: "https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/173990934667b4e8e26a761_500_500.jpeg",
      categoria: "Acai",
    },
  ];

  const orderViaWhatsapp = (item: CardapioItem) => {
    const message = `Olá! Gostaria de pedir:\n\n🍽️ *${item.title}*\n📋 ${item.description}`;
    const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const renderCategoria = (categoria: CardapioItem["categoria"]) => (
    <>
      <h3 className="text-2xl font-semibold mb-4 mt-10 text-black">
        {categoria === "Pizza" ? "🍕 Pizzas" : categoria === "Hamburguer" ? "🍔 Hambúrgueres" : "🍧 Açaí"}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-black">
        {cardapio
          .filter((item) => item.categoria === categoria)
          .map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-lg shadow-lg hover:shadow-2xl transition text-center flex flex-col h-[420px]"
            >
              {item.imagem && (
                <Image
                  src={item.imagem}
                  alt={`Imagem de ${item.title}`}
                  width={160}  // Definindo largura
                  height={160} // Definindo altura
                  className="w-40 h-40 object-cover rounded-full mx-auto mb-4 hover:scale-105 transition-transform"
                />
              )}
              <h4 className="text-lg font-bold mb-2">{item.title}</h4>
              <p className="text-gray-700 text-sm mb-4 flex-1">{item.description}</p>
              <button
                onClick={() => orderViaWhatsapp(item)}
                className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition w-full mt-auto"
              >
                Pedir via WhatsApp
              </button>
            </div>
          ))}
      </div>
    </>
  );

  return (
    <section className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-black">Cardápio</h2>
        {renderCategoria("Pizza")}
        {renderCategoria("Hamburguer")}
        {renderCategoria("Acai")}
      </div>
    </section>
  );
};

export default Projects;
