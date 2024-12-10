/*const searchInput = document.querySelector(".search_input");

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
}*/
const searchInput = document.querySelector(".search_input");
const searchButton = document.querySelector(".search_icon");
let searchArr = [];

searchButton.addEventListener("click", () => {
  const searchValue = searchInput.value.trim().toUpperCase(); // Lấy giá trị nhập vào và chuẩn hóa
  detailPage.classList.add("active");
  wrapperProd.classList.remove("active");
  searchProduct(searchValue);
  renderProductPage(searchArr);
  searchArr = []; // Xóa mảng sau khi render xong để chuẩn bị cho lần tìm kiếm sau
});

function searchProduct(value) {
  let productsLocal2 = [];
  const storedProducts = localStorage.getItem("PRODUCTS");
  if (storedProducts) {
    productsLocal2 = JSON.parse(storedProducts);
  } else {
    productsLocal2 = products;
  }

  productsLocal2.forEach((item) => {
    // Tìm các sản phẩm có tên chứa chuỗi `value` (không phân biệt chữ hoa chữ thường)
    if (item.name.toUpperCase().includes(value)) {
      searchArr.push(item);
    }
  });
}
