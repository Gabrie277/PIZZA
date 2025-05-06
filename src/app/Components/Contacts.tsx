import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from "next/image";

const Contact = () => {
  const clientes = [
    {
      nome: "Lucas Oliveira",
      comentario: "A melhor pizza da região! Atendimento impecável.",
      foto: "/foto3.jpg" // Use caminho relativo ou URL válida
    },
    {
      nome: "Carlos Mendes",
      comentario: "Comida deliciosa e entrega rápida!",
      foto: "/foto1.jpg"
    },
    {
      nome: "Clau Oliveira",
      comentario: "Sempre peço aqui. Nunca me decepcionou!",
      foto: "/foto5.jpg"
    },
  ];

  return (
    <section id="contact" className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Entre em Contato</h2>

        {/* Contato da Loja */}
        <div className="w-full max-w-2xl mx-auto mb-10">
          <div className="mb-4">
            <label htmlFor="store-phone" className="block text-sm font-medium mb-1">
              Telefone da Loja
            </label>
            <input
              type="tel"
              id="store-phone"
              className="w-full p-3 rounded-lg border border-gray-300 text-black focus:ring-2 focus:ring-blue-500 outline-none"
              value="+55 11 1234-5678"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label htmlFor="store-email" className="block text-sm font-medium mb-1">
              Email da Loja
            </label>
            <input
              type="email"
              id="store-email"
              className="w-full p-3 rounded-lg border border-gray-300 text-black focus:ring-2 focus:ring-blue-500 outline-none"
              value="contato@seudominio.com"
              readOnly
            />
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="text-center mb-12">
          <p className="text-lg mb-4">Siga-nos nas redes sociais:</p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="https://twitter.com/seu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaTwitter className="text-3xl" />
            </a>
            <a
              href="https://github.com/seu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              <FaGithub className="text-3xl" />
            </a>
            <a
              href="https://linkedin.com/in/seu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              <FaLinkedin className="text-3xl" />
            </a>
          </div>
        </div>

        {/* Comentários de Clientes */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">O que dizem nossos clientes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientes.map((c, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Image
                    src={c.foto}
                    alt={c.nome}
                    width={80} // Tamanho fixo da imagem
                    height={80} // Tamanho fixo da imagem
                    className="rounded-full mr-4"
                  />
                  <p className="text-white font-semibold">{c.nome}</p>
                </div>
                <p className="text-gray-300 italic">“{c.comentario}”</p>
              </div>
            ))}
          </div>
        </div>

        {/* Localização do Restaurante */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">Onde estamos</h3>
          <div className="w-full h-96">
            <iframe
              title="Localização do Restaurante"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.108825775224!2d-46.656573!3d-23.597355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c5e5d5b32f%3A0x123456789abcdef!2sSeu%20Restaurante!5e0!3m2!1spt-BR!2sbr!4v1715000000000"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              className="rounded-lg border-4 border-white"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
