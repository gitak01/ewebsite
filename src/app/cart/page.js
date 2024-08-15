'use client'
import { useState, useEffect } from 'react';
import CartItem from '../../component/CartItem';
import products from '../../data/products';

export default function Cart() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        if (typeof window !== undefined) {
            const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
            setCart(storedCart);
        }
    }, []);

    // Update cart in localStorage whenever it changes
    // useEffect(() => {
    //     if (typeof window !== undefined) {
    //       // localStorage.setItem('cart', JSON.stringify(cart));
    //     }
    // }, [cart]);


    const updateQuantity = (product, amount) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: Math.max(1, item.quantity + amount) }
                    : item
            )
        );
    };

    const removeItem = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    const calculateTotal = () => {
        return cart.reduce(
            (acc, item) => acc + item.quantity * item.price,
            0
        ).toFixed(2);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
            <div className="space-y-4">
                {cart.map((product) => (
                    <CartItem
                        key={product.id}
                        product={product}
                        updateQuantity={updateQuantity}
                        removeItem={removeItem}
                    />
                ))}
            </div>
            <div className="mt-8 text-right">
                <h2 className="text-2xl font-bold">Subtotal: ${calculateTotal()}</h2>
            </div>
        </div>
    );
}