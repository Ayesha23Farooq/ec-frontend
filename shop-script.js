const grid = document.getElementById("productGrid");
const checkboxes = document.querySelectorAll(".category-filter");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");

function renderProducts(filtered) {
  grid.innerHTML = "";
  if (filtered.length === 0) {
    grid.innerHTML = "<p>No matching products.</p>";
    return;
  }

  filtered.forEach(product => {
    const card = `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <a href="#" class="btn">Buy Now</a>
      </div>`;
    grid.innerHTML += card;
  });
}

function applyFilters() {
  const selectedCategories = [...checkboxes]
    .filter(cb => cb.checked)
    .map(cb => cb.value.toLowerCase());

  const keyword = searchInput.value.toLowerCase();

  let result = products.filter(product => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category.toLowerCase());

    const matchesSearch = product.name.toLowerCase().includes(keyword);

    return matchesCategory && matchesSearch;
  });

  const sortValue = sortSelect.value;

  if (sortValue === "price-asc") {
    result.sort((a, b) => a.price - b.price);
  } else if (sortValue === "price-desc") {
    result.sort((a, b) => b.price - a.price);
  } else if (sortValue === "name-asc") {
    result.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortValue === "name-desc") {
    result.sort((a, b) => b.name.localeCompare(a.name));
  }

  renderProducts(result);
}

renderProducts(products);

checkboxes.forEach(cb => cb.addEventListener("change", applyFilters));
searchInput.addEventListener("input", applyFilters);
sortSelect.addEventListener("change", applyFilters);
