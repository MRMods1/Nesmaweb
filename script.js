let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(productId) {
  cart.push(productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  document.getElementById("cart-count").innerText = cart.length;
}

window.onload = updateCartCount;
