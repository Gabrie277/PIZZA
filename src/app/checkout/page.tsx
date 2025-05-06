'use client';

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Project {
  title: string;
  description: string;
  imagem?: string;
}

const CheckoutPage = () => {
  const [cart, setCart] = useState<Project[]>([]);
  const router = useRouter();
  const phone = "5511999999999"; // Número do WhatsApp real

  useEffect(() => {
    // Recupera o carrinho do localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    } else {
      // Se não houver carrinho, redireciona de volta
      router.push('/');
    }
  }, [router]);

  const finalizeOrder = () => {
    if (cart.length === 0) return;

    const itemsText = cart
      .map(
        (item, i) =>
          `${i + 1}. 🍔 *${item.title}*\n   📋 ${item.description}`
      )
      .join("\n\n");

    const message = `Olá! Gostaria de fazer um pedido:\n\n${itemsText}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Finalizar Pedido</h1>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Seu Pedido</h2>
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li key={index} className="border-b pb-4">
                <h3 className="font-medium text-lg">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-end">
          <button
            onClick={finalizeOrder}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition text-lg"
          >
            Enviar Pedido via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;