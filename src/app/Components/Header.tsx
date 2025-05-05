'use client';

import React, { useState, useEffect } from 'react';

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-5 relative">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Meu Portfólio</h1>

        {/* Botão de menu (só mostra quando menu está fechado) */}
        {!menuAberto && (
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Abrir menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        )}

        {/* Navegação */}
        {isClient && (
          <nav
            className={`${
              menuAberto ? 'translate-x-0' : 'translate-x-full'
            } fixed top-0 right-0 h-full w-64 bg-gray-800 shadow-lg transition-transform duration-300 z-50 md:static md:translate-x-0 md:h-auto md:w-auto md:bg-transparent md:shadow-none md:flex md:items-center`}
          >
            {/* Botão de fechar (só mobile) */}
            <div className="flex justify-end md:hidden p-4">
              <button
                className="text-white"
                onClick={toggleMenu}
                aria-label="Fechar menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0">
              <li>
                <a href="/#hero" className="block py-2 md:py-0 hover:text-gray-300">
                  Início
                </a>
              </li>
              <li>
                <a href="/#skills" className="block py-2 md:py-0 hover:text-gray-300">
                  Cardápio
                </a>
              </li>
              <li>
                <a href="/#projects" className="block py-2 md:py-0 hover:text-gray-300">
                  Promoção
                </a>
              </li>
              <li>
                <a href="/Pizza" className="block py-2 md:py-0 hover:text-gray-300">
                  Pizza
                </a>
              </li>
              <li>
                <a href="/acai" className="block py-2 md:py-0 hover:text-gray-300">

                  Açaí
                </a>
              </li>
              <li>
                <a href="/#contact" className="block py-2 md:py-0 hover:text-gray-300">
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
