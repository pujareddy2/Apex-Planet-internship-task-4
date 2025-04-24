const products = [
  { id: 1, name: "Smartphone", category: "electronics", price: 20000, rating: 4.5, image: "images/smartphone.jpg" },
  { id: 2, name: "Laptop", category: "electronics", price: 50000, rating: 4.8, image: "images/laptop.jpg" },
  { id: 3, name: "T-Shirt", category: "fashion", price: 500, rating: 4.2, image: "images/tshirt.jpg" },
  { id: 4, name: "Sofa", category: "home", price: 15000, rating: 4.0, image: "images/sofa.jpg" },
  { id: 5, name: "Headphones", category: "electronics", price: 2000, rating: 4.3, image: "images/headphones.jpg" },
  { id: 6, name: "Shoes", category: "fashion", price: 1200, rating: 4.1, image: "images/shoes.jpg" },
];

const productList = document.getElementById("productList");
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");
const sortFilter = document.getElementById("sortFilter");

// Function to display products
function displayProducts(filteredProducts) {
  productList.innerHTML = "";
  filteredProducts.forEach(product => {
    const productCard = `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Category: ${product.category}</p>
        <p class="price">₹${product.price}</p>
        <p>Rating: ${product.rating} ⭐</p>
      </div>
    `;
    productList.innerHTML += productCard;
  });
}

// Initial display of all products
displayProducts(products);

// Event listeners for filters
categoryFilter.addEventListener("change", () => {
  filterAndSortProducts();
});

priceFilter.addEventListener("input", () => {
  filterAndSortProducts();
});

sortFilter.addEventListener("change", () => {
  filterAndSortProducts();
});

// Function to filter and sort products
function filterAndSortProducts() {
  let filteredProducts = [...products];

  // Filter by category
  const category = categoryFilter.value;
  if (category !== "all") {
    filteredProducts = filteredProducts.filter(product => product.category === category);
  }

  // Filter by price
  const maxPrice = parseInt(priceFilter.value);
  if (!isNaN(maxPrice)) {
    filteredProducts = filteredProducts.filter(product => product.price <= maxPrice);
  }

  // Sort products
  const sortOption = sortFilter.value;
  if (sortOption === "priceLowHigh") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "priceHighLow") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === "ratingHighLow") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  // Display filtered and sorted products
  displayProducts(filteredProducts);
}