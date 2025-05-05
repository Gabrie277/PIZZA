const Hero = () => {
    const nome = "Gabriel Oliveira"; // Substitua com o nome desejado
  
    return (
      <section
        id="hero"
        className="relative bg-[url('/papel.webp')] bg-cover bg-center text-white h-screen flex items-center justify-center"
      >
        {/* Camada preta transparente cobrindo toda a seção */}
        <div className="absolute inset-0 bg-black/60 z-0" />
  
        {/* Conteúdo principal acima da camada escura */}
        <div className="relative z-10 text-center px-5 max-w-2xl">
          <img
            src="/logo.jpeg"
            alt="Minha foto"
            className="w-60 h-60 rounded-full mx-auto mb-4 object-cover"
          />
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Pizzaria e Hambúrgueria </h1>
          <p className="text-lg sm:text-xl mb-6">
          Seja muito bem-vindo(a) à Pizzaria e Hambúrgueria LC!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            
            
            
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  