const searchInput = document.querySelector(".search_input");

const searchButton = document.querySelector(".search_icon");
let searchArr = [];
searchButton.addEventListener("click", () => {
  detailPage.classList.add("active");
  wrapperProd.classList.remove("active");
  searchProduct("IPHONE 13");
  renderProductPage(searchArr);
  searchArr = [];
});

function searchProduct(value) {
  if (JSON.parse(localStorage.getItem("addedProduct"))) {
    productsLocal2 = JSON.parse(localStorage.getItem("PRODUCTS"));
  } else {
    productsLocal2 = products;
  }
  productsLocal2.filter((item, index) => {
    if (item.name.toUpperCase().includes(value)) {
      searchArr.push(item);
    }
  });
}
