const overlay = document.querySelector(".overlay");
// NO LOGIN
const isLogin = JSON.parse(localStorage.getItem("isLogin"));
// ADD TO CART
function renderNotificationAddToCart() {
  const isLogin = JSON.parse(localStorage.getItem("isLogin"));
  overlay.classList.add("active");
  if (isLogin) {
    const htmls = `<div class="message_box">
  <div class="overlay_header success">THÊM THÀNH CÔNG</div>
  <div class="overlay_desciption">
  Bạn đã thêm sản phẩm thành công! Hãy kiểm tra ở mục "GIỎ HÀNG".
  </div>
  <button class="overlay_button success">ĐÃ HIỂU</button>
  </div>`;
    overlay.innerHTML = htmls;
  } else {
    const htmls = `<div class="message_box">
    <div class="overlay_header fail">THÊM GIỎ HÀNG THẤT BẠI</div>
    <div class="overlay_desciption">
    Bạn cần đăng nhập để được phép thêm sản phẩm vào giỏ hàng!
    </div>
    <button class="overlay_button fail">ĐÃ HIỂU</button>
    </div>`;
    overlay.innerHTML = htmls;
  }
}

// PLACE ORDER
function placeOrderNotification() {
  overlay.classList.add("active");
  const htmls = `<div class="message_box">
  <div class="overlay_header success">ĐẶT HÀNG THÀNH CÔNG</div>
  <div class="overlay_desciption">
    Kiểm tra thông tin đơn hàng trong mục "Đơn hàng của bạn".
  </div>
  <button class="overlay_button success">ĐÓNG</button>
  </div>`;
  overlay.innerHTML = htmls;
}

// LOGIN SUCCESSFULLY
function loginNotification(flag) {
  overlay.classList.add("active");
  if (flag) {
    const htmls = `<div class="message_box" style="height: 300px;
    padding: 10px 20x;
    display: flex;
    align-items: center;
    justify-content: center;"
>
  <div class="overlay_header success"  style="height: 100%; display: flex; align-items: center; justify-content: center;">ĐĂNG NHẬP THÀNH CÔNG</div>
  </div>`;
    overlay.innerHTML = htmls;
  } else {
    const htmls = `<div class="message_box" style="height: 300px;
    padding: 10px 20x;
    display: flex;
    align-items: center;
    justify-content: center;"
    > <div class="overlay_header fail">ĐĂNG NHẬP THẤT BẠI</div>
    </div>`;
    overlay.innerHTML = htmls;
  }
}

// REGISTER NOTIFICATION
function registerNotification(success, fail) {
  overlay.classList.add("active");
  if (success) {
    const htmls = `<div class="message_box" style="height: 300px;
    padding: 10px 20x;
    display: flex;
    align-items: center;
    justify-content: center;"
    > <div class="overlay_header success">ĐĂNG KÝ THÀNH CÔNG</div>
    </div>`;
    overlay.innerHTML = htmls;
    setTimeout(windowLocationRegister, 1000);
    return;
  }

  if (fail) {
    const htmls = `<div class="message_box" style="height: 300px;
    padding: 10px 20x;
    display: flex;
    align-items: center;
    justify-content: center;"
    > <div class="overlay_header fail">${fail}</div>
    </div>`;
    overlay.innerHTML = htmls;
    setTimeout(closeOverlay, 1000);
    return;
  }
}

const closeOverlay = () => {
  overlay.classList.remove("active");
};

document.addEventListener("click", (event) => {
  if (event.target.matches(".overlay_button")) {
    closeOverlay();
  }
});

const windowLocationRegister = () => {
  window.location = "login.html";
};

// THÔNG BÁO THÊM SẢN PHẨM ADMIN THÀNH CÔNG
function notificationAdmin(value) {
  overlay.classList.add("active");
  const htmls = `<div class="message_box">
  <div class="overlay_header success">${value}</div>
  <button class="overlay_button success">ĐÓNG</button>
  </div>`;
  overlay.innerHTML = htmls;
}

function notificationAdminSuccess(value) {
  overlay.classList.add("active");
  const htmls = `<div class="message_box">
  <div class="overlay_header success">${value}</div>
  <button class="overlay_button success">ĐÓNG</button>
  </div>`;
  overlay.innerHTML = htmls;
}
function notificationAdminFail(value) {
  overlay.classList.add("active");
  const htmls = `<div class="message_box">
  <div class="overlay_header fail">${value}</div>
  <button class="overlay_button fail">ĐÓNG</button>
  </div>`;
  overlay.innerHTML = htmls;
}
