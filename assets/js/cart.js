function addProductToLocal(data) {
  if (isLogin) {
    let cartArr = JSON.parse(localStorage.getItem("CART")) || [];
    // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
    const productExists = cartArr.some((item) => item.id === data.id);
    if (!productExists) {
      cartArr.push(data);
      localStorage.setItem("CART", JSON.stringify(cartArr));
    }
  }
}

function addToCart() {
  const addToCartBnt = document.querySelectorAll(".addtocart-btn");
  if (
    JSON.parse(localStorage.getItem("addedProduct")) ||
    JSON.parse(localStorage.getItem("deleteAdmin")) ||
    JSON.parse(localStorage.getItem("updateAdmin"))
  ) {
    productsLocal2 = JSON.parse(localStorage.getItem("PRODUCTS"));
  } else {
    productsLocal2 = products;
  }
  addToCartBnt.forEach((item, index) => {
    item.addEventListener("click", () => {
      const dataProduct = item.attributes.data.value;
      productsLocal2.forEach((item, index) => {
        if (dataProduct == index) {
          renderNotificationAddToCart();
          localStorage.setItem("product-cart", JSON.stringify(item));
          handleAddToCartUser(item);
          addProductToLocal(item);
          renderTotalPrice("userIsLogin", totalPrice);
          return;
        }
      });
      item.removeEventListener("click", addToCart);
    });
  });
}

function handleAddToCartUser(item) {
  const users = JSON.parse(localStorage.getItem("USER"));
  const userIsLogin = JSON.parse(localStorage.getItem("userIsLogin"));
  // users.map((user, index) => {
  //   if (user.id == userIsLogin.id) {
  //     user.cart.push(item);
  //     localStorage.setItem("USER", JSON.stringify(users));
  //   }
  // });
  const existingProduct = userIsLogin.cart.find(
    (cartItem) => cartItem.id == item.id
  );
  if (!existingProduct) {
    // Sản phẩm đã có trong giỏ hàng, cập nhật số lượng hoặc không làm gì cả
    userIsLogin.cart.push(item); // Cập nhật số lượng theo cần thiết
  }

  localStorage.setItem("userIsLogin", JSON.stringify(userIsLogin));
  users.map((user, index) => {
    if (user.id == userIsLogin.id) {
      const existingProduct = user.cart.find(
        (cartItem) => cartItem.id == item.id
      );

      if (existingProduct) {
        // Sản phẩm đã có trong giỏ hàng, cập nhật số lượng hoặc không làm gì cả
        existingProduct.quantity += 1; // Cập nhật số lượng theo cần thiết
      } else {
        // Sản phẩm chưa có trong giỏ hàng, thêm mới
        user.cart.push(item);
      }

      localStorage.setItem("USER", JSON.stringify(users));
    }
  });
}

function deleteProduct(index) {
  // Lấy thông tin người dùng đăng nhập hiện tại
  const userIsLogin = JSON.parse(localStorage.getItem("userIsLogin"));
  let cartLocal = userIsLogin.cart;
  var cartCopy = cartLocal.slice();
  cartCopy.splice(index, 1);
  const updatedUserIsLogin = { ...userIsLogin, cart: cartCopy };
  localStorage.setItem("userIsLogin", JSON.stringify(updatedUserIsLogin));
  renderCartPage();
  renderTotalPrice("userIsLogin", totalPrice);
  if (cartCopy.length == 0) {
    const updatedUserIsLogin = { ...userIsLogin, cart: [] };
    localStorage.setItem("userIsLogin", JSON.stringify(updatedUserIsLogin));
    renderCartPage();
  }
}
