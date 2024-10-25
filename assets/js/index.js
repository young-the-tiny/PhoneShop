const infoUser = JSON.parse(localStorage.getItem("userIsLogin"));
const navAction = document.querySelector(".nav_action");
const bottomBar = document.querySelector(".bottom-bar");
const listBar = document.querySelector(".bar-list");
const barUser = document.querySelector(".bar-user");

if (localStorage.getItem("PRODUCTS") == null) {
  localStorage.setItem("PRODUCT", JSON.stringify(products));
}
localStorage.setItem("isAdminPage", "false");

const render = () => {
  let isLogin = JSON.parse(localStorage.getItem("isLogin"));
  if (isLogin == true) {
    renderNavaction();
    renderBarUser();
    bottomBar.classList.remove("active");
  } else {
    const htmls = `<div class="nav_button register">
    <button class="nav_action-btn register-btn"><a href="register.html">ĐĂNG KÝ</a></button>
  </div>
  <div class="nav_button login">
    <button class="nav_action-btn login-btn">
      <a href="login.html">ĐĂNG NHẬP</a>
    </button>
  </div>`;
    navAction.innerHTML = htmls;
    bottomBar.classList.add("active");
    barUser.style.display = "none";
  }
};
const handleSignOut = () => {
  if (JSON.parse(localStorage.getItem("isAdmin"))) {
    JSON.stringify(localStorage.setItem("isAdmin", false));
    window.location.href = "login.html";
    return;
  }
  JSON.stringify(localStorage.setItem("isLogin", "false"));
  localStorage.removeItem("CART");
  render();
};
render();
// Ẩn hiện trang ADMIN
if (JSON.parse(localStorage.getItem("isAdmin"))) {
  document.querySelector(".admin_page").classList.remove("active");
} else {
  document.querySelector(".admin_page").classList.add("active");
}

document.getElementById("overlay").addEventListener("wheel", function (e) {
  e.stopPropagation();
});
