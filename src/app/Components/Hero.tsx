'use client';

import Image from 'next/image';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative bg-[url('/papel.webp')] bg-cover bg-center text-white min-h-screen flex items-center justify-center px-4"
    >
      {/* Camada preta transparente cobrindo toda a seção */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Conteúdo principal acima da camada escura */}
      <div className="relative z-10 text-center max-w-2xl w-full">
        <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 mx-auto mb-6 relative">
          <Image
            src="/logo.jpeg"
            alt="Logo da Pizzaria"
            fill
            className="rounded-full object-cover"
            priority
          />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Pizzaria e Hambúrgueria
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6">
          Seja muito bem-vindo(a) à Pizzaria e Hambúrgueria LC!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Você pode colocar botões de ação aqui */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
