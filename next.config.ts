/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'blog.novasafra.com.br',
      's3-sa-east-1.amazonaws.com',
      'receitatodahora.com.br',
      'encrypted-tbn0.gstatic.com',
      'www.sabornamesa.com.br',
      'www.minhareceita.com.br',
      'www.extrabom.com.br',
      'blogger.googleusercontent.com',
      'redefoodservice.com.br',
      'acarnequeomundoprefere.com.br',
      'minhasreceitinhas.com.br',
      'www.auroraalimentos.com.br',
      'guiadacozinha.com.br',
      'conteudo.imguol.com.br',
      'instadelivery-public.nyc3.cdn.digitaloceanspaces.com',
      'www.emporiotambo.com.br',
      'casaeconstrucao.org',
      'i.pinimg.com', // Adicionando o domínio
    ],
  },
};

module.exports = nextConfig;
