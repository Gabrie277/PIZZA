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
      title: "Pizza BRIGADEIRO",
      description: "Mussarela, granulado",
      link: "https://wa.me/5511999999999",
      imagem: "https://blog.novasafra.com.br/wp-content/uploads/2016/01/pizza-de-brigadeiro-780x360.jpg",
    },
    {
      title: "Pizza MUSSARELA",
      description: "Molho, mussarela, tomate, azeitona, orégano",
      link: "https://wa.me/5511999999999",
      imagem: "https://s3-sa-east-1.amazonaws.com/superimg/img.produtos/6455572/645/img_1200_1.png",
    },
    {
      title: "Pizza CALABRESA",
      description: "Molho, mussarela, calabresa, cebola, azeitona, orégano",
      link: "https://wa.me/5511999999999",
      imagem: "https://receitatodahora.com.br/wp-content/uploads/2023/10/pizza-caseira-20-10-1200x900.jpg",
    },
    {
      title: "Pizza MARGUERITA",
      description: "Molho, mussarela, tomate, manjericão, orégano",
      link: "https://wa.me/5511999999999",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0KFDZkjY8zVpr1ftr2n7Rm_OLf0Eq3inoxw&s",
    },
    {
      title: "Pizza NAPOLITANA",
      description: "Molho, mussarela, presunto, cebola, tomate, azeitona, orégano",
      link: "https://wa.me/5511999999999",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkaqdJjAKheMe8wVSHg7wAVCFG_GwrLNksHw&s",
    },
    {
      title: "Pizza PORTUGUESA",
      description: "Molho, mussarela, presunto, ovo, pimentão, cebola, tomate, azeitona, orégano",
      link: "https://wa.me/5511999999999",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ttiho5NVYc9DbAXidCYMT3C5ZisHVBL21Q&s",
    },
    {
      title: "Pizza FRANGO",
      description: "Molho, mussarela, frango, milho, orégano",
      link: "https://wa.me/5511999999999",
      imagem: "https://www.sabornamesa.com.br/media/k2/items/cache/ada34cd2101afafaba465aad112ee3c1_XL.jpg",
    },
    {
      title: "Pizza FRANGO C/ CATUPIRY",
      description: "Molho, mussarela, frango, milho, catupiry, azeitona, orégano",
      link: "https://wa.me/5511999999999",
      imagem: "https://www.minhareceita.com.br/app/uploads/2020/09/Pizza-de-Frango-com-Catupiry-Caseira-desktop.jpg",
    },
    {
      title: "Pizza FRANGO C/ CHEDDAR",
      description: "Molho, mussarela, frango, bacon, milho, azeitona, orégano",
      link: "https://wa.me/5511999999999",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTofgdnsLn1tjAJA0smWzZj1KX-HoTIELOeNA&s",
    },
    {
      title: "Pizza MISTA",
      description: "Molho, mussarela, calabresa, bacon, manjericão, azeitona, orégano",
      link: "https://wa.me/5511999999999",
      imagem: "https://www.extrabom.com.br/uploads/produtos/original/174259_20230817161358_thumb_Pizza_Mista.png",
    },
    {
      title: "Pizza NORDESTINA",
      description: "Molho, mussarela, carne de sol, cebolinha, orégano",
      link: "https://wa.me/5511999999999",
      imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6A7armkDswYSfdk8XBArHLqiTauZsQwybGQ5MvsB5RoORxZ2xkyRG5PFnPatdFEimL2K4xEFKWv-QIrDWSBoqw0ppdwSbPJLbmGfHAUaxJdNN-9txva9sjaT4e4gE4raRIWXKB70SkDDz/w1200-h630-p-k-no-nu/Pizza+nordestina+-+carne+de+sol+-+pronta.JPG",
    },
    {
      title: "Pizza 4 QUEIJOS",
      description: "Molho, mussarela, cheddar, catupiry, parmesão, azeitona, orégano",
      link: "https://wa.me/5511999999999",
      imagem: "https://redefoodservice.com.br/wp-content/uploads/2023/07/Pizza-Quatro-Queijos.jpg",
    },
  ];

  return (
    <section id="projects" className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Pizzas</h2>
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
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition"
                >
                  Fazer Pedido
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
