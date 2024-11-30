const userStorage = JSON.parse(localStorage.getItem("USER"));
const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = form.username.value;
  const password = form.password.value;
  if (username == "admin" && password == "admin") {
    loginNotification(true);
    localStorage.setItem("isAdmin", "true");
    localStorage.setItem("isLogin", "true");
    setTimeout(windowLocationAdmin, 1000);
    return;
  } else {
    localStorage.setItem("isAdmin", "false");
  }

  const userExistsInUsers2 = listUser.some(
    (user1) => user1.username === username
  );
  if (userExistsInUsers2) {
    authencation(username, password);
  } else {
    localStorageAuthencation(username, password);
  }
  console.log(userExistsInUsers2);
});

function authencation(username, password) {
  let flag = false;
  for (let i = 0; i < listUser.length; i++) {
    const element = listUser[i];
    if (element.username === username && element.password == password) {
      if (element.isLocked) {
        loginNotification(false);
        setTimeout(closeOverlay, 1000);
        return false;
      }
      flag = true;
      JSON.stringify(localStorage.setItem("isLogin", true));
      checkUser(listUser[i]);
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

function localStorageAuthencation(username, password) {
  let flag = false;
  for (let i = 0; i < userStorage.length; i++) {
    const element = userStorage[i];
    if (element.username === username && element.password === password) {
      if (element.isLocked) {
        loginNotification(false);
        setTimeout(closeOverlay, 1000);
        return false;
      }
      flag = true;
      localStorage.setItem("isLogin", "true");
      checkUser(userStorage[i]);
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
