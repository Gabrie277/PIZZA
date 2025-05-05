const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 px-4">
      <div className="max-w-6xl mx-auto text-center space-y-2">
        <p className="text-sm">
          © {new Date().getFullYear()} Meu Portfólio. Todos os direitos reservados.
        </p>
        <p className="text-xs">Desenvolvido com Next.js e Tailwind CSS</p>
        <p className="text-xs">
          <a href="#hero" className="hover:underline text-blue-400 hover:text-blue-300 transition">
            Voltar ao topo
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
