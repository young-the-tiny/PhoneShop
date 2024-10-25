// Handle save data user for register
function saveUserToLocalStorage(username, password) {
  // Lấy dữ liệu từ Local Storage (nếu có)
  let userArr = JSON.parse(localStorage.getItem("USER")) || [];

  let userObj = {
    id: userArr.length + 1,
    username: username,
    password: password,
    cart: [],
    orders: [],
  };

  // Thêm userObj mới vào mảng userArr
  userArr.push(userObj);

  // Lưu mảng userArr vào Local Storage
  localStorage.setItem("USER", JSON.stringify(userArr));
}

// Handle is 'isLogin' for login
function checkUser(user) {
  localStorage.setItem("userIsLogin", JSON.stringify(user));
}
