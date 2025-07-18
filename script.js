
let cart = [];
function addToCart(productId, quantity) {
    const item = { id: productId, quantity: quantity };
    cart.push(item);
    updateCartView();
}
function updateCartView() {
    // Logic to display cart summary
}
