// Updated search event listener to include classification and price range
document.querySelector('.search_icon').addEventListener('click', () => {
  const searchValue = document.querySelector('#search').value.trim().toUpperCase();
  const selectedCategory = document.querySelector('#classificationSelect').value;
  const minPrice = parseFloat(document.querySelector('#minPriceInput').value) || 0;
  const maxPrice = parseFloat(document.querySelector('#maxPriceInput').value) || Infinity;

  const searchResults = searchProduct(searchValue, selectedCategory, minPrice, maxPrice);
  renderProductPage(searchResults);
});

function searchProduct(name, category, minPrice, maxPrice) {
  let productsLocal2;

  if (JSON.parse(localStorage.getItem('addedProduct'))) {
    productsLocal2 = JSON.parse(localStorage.getItem('PRODUCTS'));
  } else {
    productsLocal2 = products;
  }

  return productsLocal2.filter((item) => {
    const matchesName = item.name.toUpperCase().includes(name);
    const matchesCategory = !category || item.name.includes(category);
    const matchesPrice = item.price >= minPrice && item.price <= maxPrice;

    return matchesName && matchesCategory && matchesPrice;
  });
}