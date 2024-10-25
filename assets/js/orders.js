const classificationDiv = document.querySelector(".classification");
const headerOrders = document.querySelector(".header-order");
const ordersContent = document.querySelector(".orders-content");
const totalPriceOrders = document.querySelector(".total_price-order");
const renderOrdersPage = (data) => {
  console.log("renderOrdersPage");
  ordersPage.classList.remove("active");
  wrapperProd.classList.remove("active");
  detailPage.classList.add("active");
  cartPage.classList.add("active");
  slidePage.classList.add("active");
  numberPage.classList.add("active");
  product.classList.add("active");
  classificationDiv.classList.add("active");
  titlePage.innerText = "ĐƠN HÀNG";
  scroolSmooth();
  if (data === null || data.length == 0) {
    cartPlaceHolder.classList.add("active");
    const htmls = `<div class="no_product-cart">
      <div class="no_product-img">
        <img src="./assets/img/cart-img.png" alt="cart" />
      </div>
      <h2 class="no_product-title">
        Bạn chưa có đơn hàng!
      </h2>
      <a href="index.html" class="no_product-link">GO SHOPPING</a>
    </div>`;
    ordersContent.innerHTML = htmls;
  } else {
    // headerOrders.classList.remove("active");
    cartPlaceHolder.classList.remove("active");
    const htmls = data.map((item, index) => {
      const formattedTotal = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(item.totalPrice);
      let verify = "";
      let active = "";
      if (item.isVerify) {
        verify = "Đã xác thực";
        active = "active";
      } else {
        verify = "Chưa xác thực";
      }
      const productsHtml = item.products
        .map((product) => {
          const formattedPrice = new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(product.price);
          return `
      <div class="orders_item-product-info">
        <div class="orders_item-product-img-name">
          <div class="orders_item-product_img">
            <img src="${product.img}" alt="${product.name}" />
          </div>
          <div class="orders_item-product_name">
            <span>${product.name}</span>
            <p>x1</p>
          </div>
        </div>
        <div class="orders_item-product_price">
          <p>${formattedPrice}</p>
        </div>
      </div>
    `;
        })
        .join("");
      return `<div class="orders_item">
    <!-- Header order -->
    <div class="orders_item-header">
      <div class="orders_item-header-code">
        Mã đơn hàng:
        <p class="orders_item-header-code-text">${item.code}</p>
      </div>
      <div class="orders_item-header-verify">
        <span>Tình trạng đơn hàng:</span>
        <span class="orders_item-header-verify-text ${active}">${verify}</span>
      </div>
    </div>
    <!-- Content order -->
    <div class="orders_item-content">
      <div class="orders_item-products">${productsHtml}</div>
    </div>
    <!-- Footer order -->
    <div class="orders_item-footer">
      <div class="orders_item-footer_total-price">
        Thành tiền:
        <span>${formattedTotal}</span>
      </div>
      <div class="orders_item-footer_action">
        <button class="orders_item-footer_contact-admin" onclick="notificationAdmin('CHỨC NĂNG CHƯA HOÀN THIỆN')">Liên hệ admin</button>
        <button class="orders_item-footer_contact-seller" onclick="notificationAdmin('CHỨC NĂNG CHƯA HOÀN THIỆN')">Liên hệ người bán</button>
        <button class="orders_item-footer_cancle ${active}" onclick="notificationAdmin('CHỨC NĂNG CHƯA HOÀN THIỆN')">Hủy đơn</button>
        <button class="orders_item-footer_cancle" data="${item.code}" id="orders_item-footer_detail">Xem chi tiết đơn hàng</button>
      </div>
    </div>
  </div>`;
    });
    ordersContent.innerHTML = htmls.join("");
  }
};

// Xử lí logic
function ordersFunction() {
  const userIsLogin = JSON.parse(localStorage.getItem("userIsLogin"));
  let data = [];
  const usersLocal = JSON.parse(localStorage.getItem("USER"));
  usersLocal.forEach((user) => {
    if (user.id == userIsLogin.id) {
      data = user.orders;
    }
  });
  // let data = userIsLogin.orders; // đây là mảng "orders"
  console.log(data);
  renderOrdersPage(data);
  renderTotalPrice("ORDERS", totalPriceOrders);
  barItemActive(0);
}

// Hàm tạo 1 mã đơn hàng bất kì
function generateOrderId() {
  // Độ dài mã đơn hàng mong muốn
  const length = 8;

  // Ký tự có thể sử dụng để sinh mã
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let orderId = "";

  for (let i = 0; i < length; i++) {
    // Chọn ngẫu nhiên một ký tự từ chuỗi characters
    const randomIndex = Math.floor(Math.random() * characters.length);

    // Thêm ký tự được chọn vào mã đơn hàng
    orderId += characters.charAt(randomIndex);
  }

  return orderId;
}

// Hàm tính tổng tiền của một đơn hàng

function sendDataOrders() {
  let users = JSON.parse(localStorage.getItem("USER"));
  let userIsLogin = JSON.parse(localStorage.getItem("userIsLogin"));
  let total = userIsLogin.cart.reduce(
    (total, productCart) => total + productCart.price,
    0
  );

  let name = document.getElementById("checkout_name").value;

  if (name == "") {
    notificationAdminFail("Tên không được để trống");
    return;
  }

  let sdt = document.getElementById("checkout_phone").value;
  let phoneNumberRegex =
    /^(84|\+84|0)(3[2-9]|5[2689]|7[06-9]|8[1-9]|9[0-46-9])\d{7}$/;
  if (!phoneNumberRegex.test(sdt)) {
    notificationAdminFail("SĐT không hợp lệ");
    return;
  }

  let address = document.getElementById("checkout_address").value;
  if (address == "") {
    notificationAdminFail("Địa chỉ không được để trống");
    return;
  }

  let valuePayment = "";
  var radios = document.getElementsByName("payment");
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      valuePayment = radios[i].value;
    }
  }

  users.map((item, index) => {
    if (item.id == userIsLogin.id) {
      // Lấy danh sách đơn hàng từ userIsLogin, nếu không có thì sử dụng mảng trống
      let ordersArr = userIsLogin.orders || [];

      // Lấy thời gian hiện tại
      const orderTime = new Date();
      const formattedOrderDate = `${orderTime
        .getHours()
        .toString()
        .padStart(2, "0")}:${orderTime
        .getMinutes()
        .toString()
        .padStart(2, "0")} ${orderTime
        .getDate()
        .toString()
        .padStart(2, "0")}-${(orderTime.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${orderTime.getFullYear()}`;

      // Tạo đơn hàng mới từ giỏ hàng
      let newOrder = {
        code: generateOrderId(),
        products: userIsLogin.cart, // mảng sản phẩm được đặt
        isVerify: false, // tình trạng đơn hàng
        totalPrice: total, // tổng tiền của một đơn hàng
        infoUser: {
          name: name,
          phone: sdt,
          address: address,
          paymentMethod: valuePayment,
        }, // thông tin người đặt hàng
        orderTime: formattedOrderDate, // Chuyển đổi thời gian thành chuỗi ISO
      };

      // Thêm đơn hàng mới vào mảng orders
      ordersArr.push(newOrder);

      // Cập nhật đối tượng userIsLogin với mảng orders đã cập nhật
      let updatedUserIsLogin = { ...userIsLogin, orders: ordersArr };

      // Lưu lại đối tượng userIsLogin đã cập nhật
      localStorage.setItem("userIsLogin", JSON.stringify(updatedUserIsLogin));

      // Xóa giỏ hàng sau khi đặt hàng
      updatedUserIsLogin = { ...updatedUserIsLogin, cart: [] };
      localStorage.setItem("userIsLogin", JSON.stringify(updatedUserIsLogin));

      // Cập nhật lại mảng USER
      item.orders.push(newOrder);
      localStorage.setItem("USER", JSON.stringify(users));
      renderCartPage();
      placeOrderNotification();
    }
  });
}

// Hàm xem chi tiết một đơn hàng
document.addEventListener("click", (event) => {
  if (event.target.matches("#orders_item-footer_detail")) {
    // xử lí ẩn hiện
    let overlay = document.getElementById("overlay");
    overlay.classList.add("active");
    let close = document.createElement("div");
    close.setAttribute("class", "overlay_close");
    close.setAttribute("onclick", "overlayClose()");
    close.innerHTML = "&times;";
    let detailOrdersDiv = document.createElement("div");
    detailOrdersDiv.setAttribute("class", "overlay_detail_order");
    // lây dữ liệu
    let data = [];
    const userIsLogin = JSON.parse(localStorage.getItem("userIsLogin"));
    const usersLocal = JSON.parse(localStorage.getItem("USER"));
    usersLocal.forEach((user) => {
      if (user.id == userIsLogin.id) {
        data = user.orders;
      }
    });

    // Bắt sự kiện click vào nút xem chi tiết
    const buttonData = event.target.getAttribute("data");
    // Xử lí logic dữ liệu
    data.forEach((item, index) => {
      if (item.code.includes(buttonData)) {
        console.log("Tồn tại mã đơn hàng này: ", item);
        const formattedTotal = new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(item.totalPrice);
        let verify = "";
        let active = "";
        if (item.isVerify) {
          verify = "Đã xác thực";
          active = "active";
        } else {
          verify = "Chưa xác thực";
        }
        // Lấy dữ liệu sản phẩm
        const productsHtml = item.products
          .map((product) => {
            const formattedPrice = new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(product.price);
            return `
        <div class="orders_item-product-info">
        <div class="orders_item-product-img-name">
          <div class="orders_item-product_img">
            <img src="${product.img}" alt="${product.name}" />
          </div>
          <div class="orders_item-product_name">
            <span>${product.name}</span>
            <p>x1</p>
          </div>
        </div>
        <div class="orders_item-product_price">
          <p>${formattedPrice}</p>
        </div>
      </div>
    `;
          })
          .join("");

        // Lấy dữ liệu khách hàng
        let name = item.infoUser.name;
        let address = item.infoUser.address;
        let phone = item.infoUser.phone;
        let paymentMethod = item.infoUser.paymentMethod;

        // Render ra màn hình
        const htmls = `
    <div class="orders_item-header">
      <div class="orders_item-header-code">
        Mã đơn hàng:
        <p class="orders_item-header-code-text">${item.code}</p>
      </div>
      <div class="orders_item-header-verify">
        <span>Tình trạng đơn hàng:</span>
        <span class="orders_item-header-verify-text ${active}">${verify}</span>
      </div>
    </div>
    <div class="orders_item-content">
    <div class="orders_item-products">
      ${productsHtml}
    </div>
  </div>
    <div class="orders_item-footer">
      <div class="orders_item-footer_userInfo">
        <h3>Thông tin người đặt</h3>
        <ul>
          <li>
            Tên người nhận:
            <p>${name}</p>
          </li>
          <li>
            SĐT:
            <p>${phone}</p>
          </li>
          <li>
            Địa chỉ nhận hàng:
            <p>
            ${address}
            </p>
          </li>
          <li>
            Ngày đặt hàng:
            <p>${item.orderTime}</p>
          </li>
          <li>
            Phương thức thanh toán:
            <p>${paymentMethod}</p>
          </li>
        </ul>
      </div>
      <div class="orders_item-footer_total-price">
        Thành tiền:
        <span>${formattedTotal}</span>
      </div>
    </div>
  </div> 
  `;
        detailOrdersDiv.innerHTML = htmls;
        overlay.appendChild(detailOrdersDiv);
        overlay.appendChild(close);
      }
    });
  }
});

const overlayClose = () => {
  if (document.querySelector("#overlay_detail_order-close") != null) {
    document.querySelector("#overlay_detail_order-close").remove();
  }
  overlay.classList.remove("active");
  close.classList.add("active");
};
