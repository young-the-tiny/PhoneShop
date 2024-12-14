// const userStorage = JSON.parse(localStorage.getItem("USER")) || [];
const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = form.username.value;
  const password = form.password.value;

  // Kiểm tra nếu tên người dùng hoặc mật khẩu bị để trống
  if (!username || !password) {
    loginNotification(false, "Tên người dùng và mật khẩu không được để trống");
    return;
  }

  if (username == "admin" && password == "admin") {
    loginNotification(true);
    localStorage.setItem("isAdmin", "true");
    localStorage.setItem("isLogin", "true");
    setTimeout(windowLocationAdmin, 1000);
    return;
  } else {
    localStorage.setItem("isAdmin", "false");
  }

  // Đăng nhập thành công nếu tên người dùng và mật khẩu không bị để trống
  localStorage.setItem("isLogin", "true");
  loginNotification(true);
  setTimeout(windowLocation, 1000);
});

function authenticate(username, password, userList) {
  let flag = false;
  for (let i = 0; i < userList.length; i++) {
    const element = userList[i];
    if (element.username === username && element.password === password) {
      flag = true;
      localStorage.setItem("isLogin", "true");
      checkUser(userList[i]);
    }
  }
  if (flag) {
    loginNotification(true);
    setTimeout(windowLocation, 1000);
  } else {
    loginNotification(false);
    setTimeout(closeOverlay, 1000);
  }
  return flag;
}

const windowLocation = () => {
  window.location.href = "index.html";
};
const windowLocationAdmin = () => {
  window.location.href = "admin.html";
};
