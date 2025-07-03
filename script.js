let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(productId) {
  cart.push(productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  document.getElementById("cart-count").innerText = cart.length;
}

// المنتجات الوهمية (مثال)
const products = {
  1: { name: "منتج 1", price: 100 },
  2: { name: "منتج 2", price: 150 }
};

function showCart() {
  const modal = document.getElementById("cart-modal");
  const itemsContainer = document.getElementById("cart-items");
  itemsContainer.innerHTML = "";

  const counts = {};
  cart.forEach(id => counts[id] = (counts[id] || 0) + 1);

  if (cart.length === 0) {
    itemsContainer.innerHTML = "<li>السلة فارغة.</li>";
  } else {
    for (let id in counts) {
      const product = products[id];
      const li = document.createElement("li");
      li.innerText = `${product.name} - ${counts[id]} × ${product.price} ريال = ${counts[id] * product.price} ريال`;
      itemsContainer.appendChild(li);
    }
  }

  modal.classList.remove("hidden");
}

function closeCart() {
  document.getElementById("cart-modal").classList.add("hidden");
}

// ربط الضغط على الأيقونة
document.getElementById("cart-icon").addEventListener("click", showCart);

// عند التحميل
window.onload = updateCartCount;
