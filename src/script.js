let closer = document.querySelector("#closer");
let cart = document.querySelector(".shopping-cart");
document.querySelector("#cart-btn").onclick = () => {
  closer.style.display = "block";
  cart.classList.toggle("active");
};
