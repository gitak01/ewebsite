export default function CartItem({ product, updateQuantity, removeItem }) {
    console.log(product);

    return (
        <div className="flex items-center justify-between border p-4 rounded-lg shadow-sm">
            <img src={product.image} alt={product.name} className="w-20 h-6 object-cover" />
            <div className="flex-1 ml-4">
                <h2 className="text-lg font-bold">{product.name}</h2>
                <p className="text-gray-700">${(product.price || 0).toFixed(2)}</p>
            </div>
            <div className="flex items-center space-x-2">
                <button
                    onClick={() => updateQuantity(product, -1)}
                    className="bg-gray-300 text-gray-700 px-2 py-1 rounded"
                >
                    -
                </button>
                <span>{product.quantity}</span>
                <button
                    onClick={() => updateQuantity(product, 1)}
                    className="bg-gray-300 text-gray-700 px-2 py-1 rounded"
                >
                    +
                </button>
            </div>
            <button
                onClick={() => removeItem(product.id)}
                className="ml-4 bg-red-500 text-white px-4 py-2 rounded"
            >
                Remove
            </button>
        </div>
    );
}