let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart() {
  const product = {
    name: "Smart Watch",
    price: 120
  };

  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart 🛒");
}

// CART PAGE LOAD
const cartItems = document.getElementById("cart-items");
const total = document.getElementById("total");

if (cartItems) {
  let sum = 0;
  cart.forEach(item => {
    sum += item.price;
    cartItems.innerHTML += `<p>${item.name} - $${item.price}</p>`;
  });
  total.innerText = "Total: $" + sum;
}
