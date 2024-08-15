
'use client'
import ProductCard from '../component/ProductCard';
import products from '../data/products';
import React, { useMemo, useState } from 'react';

export default function Home() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    let newCart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = newCart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      newCart.push({ ...product, quantity: 1 });
    }

    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(newCart));
    }
  };
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </main>
  );
}