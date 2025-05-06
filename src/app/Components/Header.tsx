'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMenu = () => setMenuAberto(!menuAberto);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const irParaCardapio = () => {
    if (pathname === '/') {
      document?.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/#projects');
    }
    setMenuAberto(false);
  };

  return (
    <header className="bg-gray-800 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-5 relative">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Meu Portfólio</h1>

        {/* Botão Mobile */}
        {!menuAberto && (
          <button className="md:hidden" onClick={toggleMenu} aria-label="Abrir menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}

        {isClient && (
          <nav className={`${
              menuAberto ? 'translate-x-0' : 'translate-x-full'
            } fixed top-0 right-0 h-full w-64 bg-gray-800 shadow-lg transition-transform duration-300 md:static md:translate-x-0 md:h-auto md:w-auto md:bg-transparent md:shadow-none md:flex md:items-center`}>
            {/* Botão fechar (mobile) */}
            <div className="flex justify-end md:hidden p-4">
              <button onClick={toggleMenu} aria-label="Fechar menu">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu Links */}
            <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0">
              <li>
                <Link href="/#hero" className="block py-2 md:py-0 hover:text-gray-300">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="block py-2 md:py-0 hover:text-gray-300">
                  Nosso Cardápio
                </Link>
              </li>
              <li>
                <Link href="/PizzaComponent" className="block py-2 md:py-0 hover:text-gray-300">
                  Pizza
                </Link>
              </li>
              <li>
                <Link href="/PizzaGrande" className="block py-2 md:py-0 hover:text-gray-300">
                  Pizza Grande
                </Link>
              </li>
              <li>
                <Link href="/AcaiItem" className="block py-2 md:py-0 hover:text-gray-300">
                  Açaí
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="block py-2 md:py-0 hover:text-gray-300">
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
