import React from 'react';

const ProductCard = ({ product, addToCart }) => {
    return (
        <div class="bg-gray-800 w-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="p-2 rounded-t-lg" src={product.image} alt="product image" />
            </a>
            <div class="px-5 pb-5">
                <h5 class=" font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                <div class="flex items-center justify-between">
                    <span class="font-bold text-gray-900 dark:text-white">{product.price}</span>
                    <button class="bg-gray-800 rounded-1g p-2" onClick={() => addToCart(product)}>Add To Cart</button>
                </div>
            </div>
        </div>

    );
};

export default ProductCard;