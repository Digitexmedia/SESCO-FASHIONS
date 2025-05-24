const products = [
  {
    id: 1,
    name: "Elegant Blue Dress",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80",
    tag: "New",
    rating: 4
  },
  {
    id: 2,
    name: "Casual White Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=600&q=80",
    tag: "Sale",
    rating: 5
  },
  {
    id: 3,
    name: "Comfort Jeans",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=600&q=80",
    tag: "Hot",
    rating: 4
  },
  // Add more products here as needed
];

// Function to create star rating
function getStarRating(rating) {
  let stars = "";
  for(let i = 1; i <= 5; i++) {
    stars += i <= rating ? "★" : "☆";
  }
  return stars;
}

// Render products dynamically
function renderProducts() {
  const productsContainer = document.querySelector(".products");
  productsContainer.innerHTML = ""; // Clear before adding

  products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
      <span class="product-tag">${product.tag}</span>
      <img src="${product.image}" alt="${product.name}">
      <div class="product-heart">❤</div>
      <div class="product-rating">${getStarRating(product.rating)}</div>
      <div class="product-price">
        <h4>${product.name}</h4>
        <p>$${product.price.toFixed(2)}</p>
      </div>
      <button class="btn-add-cart" onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    productsContainer.appendChild(productCard);
  });
}

// Add to Cart handler
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  alert(`Added "${product.name}" to your cart!`);
  // Here you can later add actual cart functionality and payment integration
}

// Run render on page load
window.onload = renderProducts;
