export const calculateSubtotal = (cart) => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
};

export const findProductInCart = (cart, productId) => {
    return cart.find(item => item.id === productId);
};