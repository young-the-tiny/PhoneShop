// 1. THÊM SẢN PHẨM
// localStorage.setItem("PRODUCT", JSON.stringify(products));
const addProduct = () => {
  let nameValue = document.getElementById("name_product_admin").value;
  let priceValue = document.getElementById("price_product_admin").value;

  let productsArr = JSON.parse(localStorage.getItem("PRODUCT")) || [];

  let prodtObject = {
    id: productsArr.length + 1,
    img: imgUrl,
    name: nameValue,
    price: Number(priceValue),
  };
  productsArr.push(prodtObject);

  localStorage.setItem("PRODUCTS", JSON.stringify(productsArr));
  localStorage.setItem("PRODUCT", JSON.stringify(productsArr));
  localStorage.setItem("addedProduct", true);
};

// ĐỊNH NGHĨA DỮ LIỆU SẢN PHẨM KHI PHÂN ẤN PHÂN LOẠI
const defaultClassification = () => {
  const classificationSelectText = document.querySelector(
    ".classification_select-text"
  );
  let productsLocal = [];

  if (JSON.parse(localStorage.getItem("updateAdmin"))) {
    productsLocal = JSON.parse(localStorage.getItem("PRODUCTS"));
  } else {
    productsLocal = JSON.parse(localStorage.getItem("PRODUCT"));
  }
  classificationSelectText.textContent = "-- Mặc định --";
  // cập nhật lại trang sản phẩm
  renderAddProductPage(productsLocal);
};

// hàm phân loại sản phẩm có dung lượng 128GB
const handle128GB = () => {
  const classificationSelectText = document.querySelector(
    ".classification_select-text"
  );
  let productsLocal = [];

  if (JSON.parse(localStorage.getItem("updateAdmin"))) {
    productsLocal = JSON.parse(localStorage.getItem("PRODUCTS"));
    console.log(23);
  } else {
    productsLocal = JSON.parse(localStorage.getItem("PRODUCT"));
    console.log(5324);
  }
  productsLocal = productsLocal.filter((product) =>
    product.name.includes("128GB")
  );

  classificationSelectText.textContent = "-- 128GB --";
  renderAddProductPage(productsLocal);
};

const handle99 = () => {
  // hàm phân loại sản phẩm có dung lượng 99%
  const classificationSelectText = document.querySelector(
    ".classification_select-text"
  );
  let productsLocal = [];

  if (JSON.parse(localStorage.getItem("updateAdmin"))) {
    productsLocal = JSON.parse(localStorage.getItem("PRODUCTS"));
  } else {
    productsLocal = JSON.parse(localStorage.getItem("PRODUCT"));
  }
  productsLocal = productsLocal.filter((product) =>
    product.name.includes("99%")
  );

  classificationSelectText.textContent = "-- 99% --";
  renderAddProductPage(productsLocal);
};
const handle64GB = () => {
  // hàm phân loại sản phẩm có dung lượng 128GB
  const classificationSelectText = document.querySelector(
    ".classification_select-text"
  );
  let productsLocal = [];

  if (JSON.parse(localStorage.getItem("updateAdmin"))) {
    productsLocal = JSON.parse(localStorage.getItem("PRODUCTS"));
  } else {
    productsLocal = JSON.parse(localStorage.getItem("PRODUCT"));
  }
  productsLocal = productsLocal.filter((product) =>
    product.name.includes("64GB")
  );

  classificationSelectText.textContent = "-- 64GB --";
  renderAddProductPage(productsLocal);
};

// RENDER TRANG QUẢN LÍ SẢN PHẨM
const renderAddProductPage = (data) => {
  document.querySelector(".container_admin").classList.remove("active");
  let tableTag = document.createElement("table");

  const htmlsTableHeader = `
  <thead>
    <tr>
      <th>Mã sản phẩm</th>
      <th>Hình ảnh</th>
      <th>Tên sản phẩm</th>
      <th>Giá</th>
      <th>Chỉnh sửa</th>
      <th>Xóa</th>
    </tr>
  </thead>
  <tbody id="tbody_addProduct">
  </tbody>
  `;

  tableTag.innerHTML = htmlsTableHeader;
  let tbodyTag = document.getElementById("tbody_addProduct");

  const htmls = data.map((product) => {
    // format tiền VNĐ
    const formattedTotal = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(product.price);
    return `
    <tr id="${product.id}">
    <td>
      <span>${product.id}</span>
    </td>
    <td>
      <div class="product_img">
        <img src="${product.img}" alt="" />
      </div>
    </td>
    <td>${product.name}</td>
    <td>${formattedTotal}</td>
    <td>
      <span id="product_admin-edit">
        <i data="${product.id}" onclick="handleUpdateProductsAdmin(event)" class="fa-solid fa-pen-to-square"></i>
      </span>
    </td>
    <td>
      <span data="${product.id}" id="product_admin-delete">
        <i data="${product.id}" onclick="handleDeleteProductsAdmin(event)" class="fa-regular fa-trash-can"></i>
      </span>
    </td>
  </tr>
    `;
  });
  tbodyTag.innerHTML = htmls.join("");
};
defaultClassification(); // hàm này dùng để render ra danh sách sản phẩm khi chưa bấm phân loại

// 1. Thêm sản phẩm
const addProductAdminBtn = document.getElementById("addProductAdminBtn");
addProductAdminBtn.addEventListener("click", () => {
  let close = document.createElement("div");
  close.setAttribute("class", "overlay_close");
  close.setAttribute("onclick", "overlayClose()");
  close.innerHTML = "&times;";
  let overlay = document.getElementById("overlay");
  overlay.classList.add("active");
  let overlayContent = document.getElementById("overlay_content");
  overlayContent.innerHTML = "";
  const htmls = `
    <form class="form_admin" id="form_addProduct">
      <div class="form_controll_admin">
        <label for="file_product_admin" class="file_product_admin"
          >Ảnh sản phẩm
          </label>
          <input
            type="file"
            id="file_product_admin"
            accepts="image/*"
            placeholder="Chọn hình ảnh sản phẩm"
          />
          <img src="" alt="review ảnh" class="img_review_admin active"/>
      </div>

      <div class="form_controll_admin">
        <label for="name_product_admin">Tên sản phẩm</label>
        <input
          required
          type="text"
          id="name_product_admin"
          placeholder="Nhập tên sản phẩm..."
        />
      </div>

      <div class="form_controll_admin">
        <label for="price_product_admin">Giá sản phẩm</label>
        <input
          required
          type="text"
          id="price_product_admin"
          placeholder="Nhập giá sản phẩm..."
        />
      </div>

      <button class="submit_admin" id="addProductBtnSubmitForm">THÊM</button>
    </form>`;
  overlayContent.innerHTML = htmls;
  overlay.appendChild(close);

  // xử lí hiển thị hình ảnh
  let pictureValue = document.getElementById("file_product_admin");
  let imgUrl = "./assets/img/loi-hinh-anh.jpg";
  pictureValue.addEventListener("change", (e) => {
    var file = e.target.files[0];
    const fr = new FileReader();
    fr.addEventListener("load", () => {
      const url = fr.result;
      imgUrl = url;
      handleImageReview(imgUrl, true);
    });
    fr.readAsDataURL(file);
  });

  // logic ( khi ấn nút thêm)
  let addProductBtnSubmitForm = document.getElementById(
    "addProductBtnSubmitForm"
  );
  addProductBtnSubmitForm.addEventListener("click", (e) => {
    e.preventDefault();
    let nameValue = document.getElementById("name_product_admin").value;
    let priceValue = document.getElementById("price_product_admin").value;
    // kiểm tra dữ liệu 2 ô in put
    if (nameValue.length == 0) {
      alert("Tên sản phẩm không được để trống!");
      return;
    }
    let integerRegex = /^[0-9]+$/;
    let isInteger = integerRegex.test(priceValue);
    if (!isInteger) {
      alert("Giá không hợp lệ!");
      return;
    }

    let productsArr =
      JSON.parse(localStorage.getItem("PRODUCTS")) ||
      JSON.parse(localStorage.getItem("PRODUCT")) ||
      [];

    let prodtObject = {
      id: productsArr.length + 1,
      img: imgUrl,
      name: nameValue,
      price: Number(priceValue),
    };
    productsArr.push(prodtObject);

    localStorage.setItem("PRODUCTS", JSON.stringify(productsArr));
    localStorage.setItem("PRODUCT", JSON.stringify(productsArr));
    localStorage.setItem("addedProduct", true);
    overlay.classList.remove("active");
    alert("THÊM SẢN PHẨM THÀNH CÔNG");
    defaultClassification(); // cập nhật lại danh sách sản phẩm
  });
});
// 2. Chỉnh sửa sản phẩm
const updateProductAdminBtn = document.querySelectorAll("#product_admin-edit");
const handleUpdateProductsAdmin = (e) => {
  // Lấy dữ liệu
  let dataAttribute = e.target.getAttribute("data");
  productsArrLocal =
    JSON.parse(localStorage.getItem("PRODUCTS")) ||
    JSON.parse(localStorage.getItem("PRODUCT"));
  console.log(productsArrLocal);
  let imgUrl = "";
  // Xử lí hiển thị overlay chỉnh sửa
  productsArrLocal.forEach((product) => {
    if (Number(dataAttribute) == Number(product.id)) {
      let close = document.createElement("div");
      close.setAttribute("class", "overlay_close");
      close.setAttribute("onclick", "overlayClose()");
      close.innerHTML = "&times;";
      let overlay = document.getElementById("overlay");
      overlay.classList.add("active");
      let overlayContent = document.getElementById("overlay_content");
      overlayContent.innerHTML = "";
      // URL hình ảnh mặt định
      imgUrl = product.img;
      const htmls = `
  <form class="form_admin">

  <div class="form_controll_admin">
    
    <img src="${product.img}" alt="review ảnh" class="img_review_admin"/>
    <div class="admin_update-action">
      <span class="admin_update-action-delete">
        <i class="fa-solid fa-xmark"></i>
        <div class="admin_update-action-delete_description">
          <p>Xóa hình ảnh</p>
        </div>
      </span>
      <label for="file_product_admin"                 class="admin_update-action-edit">
        <i class="fa-regular fa-pen-to-square"></i>
        <div class="admin_update-action-delete_description">
          <p>Đổi ảnh mới</p>
        </div>
      </label>  
      <input 
        type="file"
        id="file_product_admin"
        accepts="image/*"
        placeholder="Chọn hình ảnh sản phẩm"
      />
    </div>
  </div>

    <div class="form_controll_admin">
      <label for="name_product_admin-update">Nhập tên mới</label>
      <input
        required
        type="text"
        id="name_product_admin-update"
        value="${product.name}"
      />
    </div>

    <div class="form_controll_admin">
      <label for="price_product_admin-update">Nhập giá mới</label>
      <input
        required
        type="text"
        id="price_product_admin-update"
        value="${product.price}"
      />
    </div>

    <button class="submit_admin" id="admin_update">XÁC NHẬN</button>
  </form>`;
      overlayContent.innerHTML = htmls;
      overlay.appendChild(close);
    }
  });
  // xử lí file ảnh người dùng tải lên
  const handleImageReview = (url, flag) => {
    const imgReview = document.querySelector(".img_review_admin");
    console.log(imgReview);
    if (flag) {
      imgReview.setAttribute("src", url);
      imgReview.classList.remove("active");
      document.querySelector(".file_product_admin").classList.add("active");
    } else {
      imgReview.classList.add("active");
      document.querySelector(".file_product_admin").classList.remove("active");
    }
  };

  // Xóa hình ảnh
  const xoaAnh = document.querySelector(".admin_update-action-delete");
  xoaAnh.addEventListener("click", () => {
    imgUrl = "./assets/img/loi-hinh-anh.jpg";
    handleImageReview(imgUrl, true);
  });
  // Thay ảnh mới
  const thayAnh = document.querySelector(".admin_update-action-edit");
  thayAnh.addEventListener("click", () => {
    let pictureValue = document.getElementById("file_product_admin");
    pictureValue.addEventListener("change", (e) => {
      var file = e.target.files[0];
      const fr = new FileReader();
      fr.addEventListener("load", () => {
        const url = fr.result;
        imgUrl = url;
        handleImageReview(imgUrl, true);
      });
      fr.readAsDataURL(file);
    });
  });
  // Xử lí logic chỉnh sửa
  const adminUpdateProductBtn = document.getElementById("admin_update");
  adminUpdateProductBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const dataProductLocal =
      JSON.parse(localStorage.getItem("PRODUCTS")) ||
      JSON.parse(localStorage.getItem("PRODUCT"));
    const name = document.getElementById("name_product_admin-update").value;
    const price = document.getElementById("price_product_admin-update").value;

    // Kiểm tra dữ liệu input
    let integerRegex = /^[0-9]+$/;
    let isInteger = integerRegex.test(price);
    if (name.length == 0) {
      alert("Tên không được để trống!");
      return;
    } else if (price.length == 0) {
      alert("Giá không được để trống!");
      return;
    } else if (!isInteger) {
      alert("Giá không hợp lệ!");
      return;
    }

    dataProductLocal.forEach((item, index) => {
      if (Number(item.id) == Number(dataAttribute)) {
        item.name = name;
        item.price = Number(price);
        item.img = imgUrl;
        dataProductLocal.splice(index, 1, item);
        localStorage.setItem("PRODUCTS", JSON.stringify(dataProductLocal));
        localStorage.setItem("updateAdmin", JSON.stringify(true));
        renderAddProductPage(dataProductLocal);
        overlay.classList.remove("active");
        alert("CHỈNH SỬA SẢN PHẨM THÀNH CÔNG");
      }
    });
  });
};
// 3. Xóa sản phẩm
const handleDeleteProductsAdmin = (e) => {
  const dataProductLocal =
    JSON.parse(localStorage.getItem("PRODUCTS")) ||
    JSON.parse(localStorage.getItem("PRODUCT"));

  let close = document.createElement("div");
  close.setAttribute("class", "overlay_close");
  close.setAttribute("onclick", "overlayClose()");
  close.innerHTML = "&times;";
  let overlay = document.getElementById("overlay");
  overlay.classList.add("active");
  let overlayContent = document.getElementById("overlay_content");
  overlayContent.innerHTML = "";

  const htmls = `
  <div class="overlay_header">Sản phẩm sẽ được xóa ?</div>
  <div class="acceptDeleteProductBtn">
  <button class="overlay_button" id="acceptDeleteProduct">ĐỒNG Ý</button>
  <button class="overlay_button">ĐÓNG</button>
  </div>
  `;
  overlayContent.innerHTML = htmls;
  let flag = false;
  function hanleDeleteProduct() {
    for (var i = 0; i < dataProductLocal.length; i++) {
      if (dataProductLocal[i].id === Number(e.target.getAttribute("data"))) {
        dataProductLocal.splice(i, 1); // Xóa phần tử khỏi mảng
        alert("Xóa thành công!");
        flag = false;
        localStorage.setItem("PRODUCTS", JSON.stringify(dataProductLocal));
        localStorage.setItem("deleteAdmin", JSON.stringify(true));
        renderAddProductPage(dataProductLocal);
        break; // Sau khi xóa xong, thoát khỏi vòng lặp
      }
    }
    localStorage.setItem("PRODUCTS", JSON.stringify(dataProductLocal));
    localStorage.setItem("deleteAdmin", JSON.stringify(true));
  }
  // bắt sự kiện khi admin đồng ý xóa sản phẩm
  document
    .getElementById("acceptDeleteProduct")
    .addEventListener("click", () => {
      hanleDeleteProduct();
    });
};

// RENDER TRANG QUẢN LÍ ĐƠN HÀNG
const renderOrderstManagementPage = () => {
  // Ẩn header
  document
    .querySelector(".header_admin-classification")
    .classList.add("active");
  document.querySelector(".header_admin-page-btn").classList.add("active");
  let thead = document.getElementById("table_header");
  let tbody = document.getElementById("tbody_ordersPage");
  document.getElementById("tbody_addProduct").classList.add("active");
  const htmlsTableHeader = `
    <tr>
      <th>Mã đơn hàng</th>
      <th>Tên tài khoản</th>
      <th>Trạng thái</th>
      <th>Thời điểm đặt hàng</th>
      <th>Tổng tiền</th>
      <th>Xem chi tiết</th>
      <th>Thao tác</th>
    </tr>
  `;
  thead.innerHTML = htmlsTableHeader;

  // Lấy dữ liệu các đơn hàng
  const data = JSON.parse(localStorage.getItem("USER"));

  // 1. Xử lí hiện thị table
  data.forEach((user) => {
    // Lấy thông tin đơn đặt hàng từ thuộc tính "orders" của từng người dùng
    let username = user.username;
    const orders = user.orders;
    // Tiếp tục xử lý dữ liệu đơn đặt hàng
    orders.forEach((order, index) => {
      const row = document.createElement("tr");

      // ID
      const idCell = document.createElement("td");
      idCell.innerHTML = `<span class="codeID_order">${order.code}</span>`;
      row.appendChild(idCell);

      // Tên khách hàng
      const usernameTD = document.createElement("td");
      usernameTD.innerHTML = `<span class="username_order">${username}</span>`;
      row.appendChild(usernameTD);

      // Trạng thái
      let active = "";
      let verify = "";
      if (order.isVerify) {
        verify = "Đã xác thực";
        active = "active";
      } else {
        verify = "Chưa xác thực";
        active = "acitve";
      }
      const isVerifyTD = document.createElement("td");
      isVerifyTD.innerHTML = `<span class="verify_order ${active}">${verify}</span>`;
      row.appendChild(isVerifyTD);

      // Ngày đặt hàng
      const orderTimeTD = document.createElement("td");
      orderTimeTD.innerHTML = `<span class="orderTime_order">${order.orderTime}</span>`;
      row.appendChild(orderTimeTD);

      // Tổng tiền
      const totalPriceTd = document.createElement("td");
      totalPriceTd.innerHTML = `<span class="totalPrice_order">${formatCurrency(
        order.totalPrice
      )}</span>`;
      row.appendChild(totalPriceTd);

      // Xem chi tiết
      const detailTD = document.createElement("td");
      detailTD.innerHTML = `<span data="${order.code}" class="detail_order" id="detail_order">Xem chi tiết</span>`;
      row.appendChild(detailTD);

      // Xác thực
      const authIconTD = document.createElement("td");
      authIconTD.innerHTML = `<span data="${order.code}" id="verifyOrders" class="${active}"><i class="fa-regular fa-square-check auth_order ${active}"></i></span>`;
      row.appendChild(authIconTD);

      tbody.appendChild(row);
    });
  });

  // 2. Xem chi tiết một đơn hàng bất kì dưới quyền admin
  const detailOrderBtn = document.querySelectorAll("#detail_order");
  detailOrderBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      data.forEach((user) => {
        const orders = user.orders;
        orders.forEach((order) => {
          if (order.code.includes(btn.getAttribute("data"))) {
            let overlay = document.getElementById("overlay");
            overlay.classList.add("active");
            let close = document.createElement("div");
            close.setAttribute("class", "overlay_close");
            close.setAttribute("onclick", "overlayClose()");
            close.innerHTML = "&times;";
            let detailOrdersDiv = document.createElement("div");
            detailOrdersDiv.setAttribute("class", "overlay_detail_order");
            detailOrdersDiv.setAttribute("id", "overlay_detail_order-close");
            console.log("Chi tiết: ", order);
            const formattedTotal = new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(order.totalPrice);
            let verify = "";
            let active = "";
            if (order.isVerify) {
              verify = "Đã xác thực";
              active = "active";
            } else {
              verify = "Chưa xác thực";
            }
            // Lấy dữ liệu sản phẩm
            const productsHtml = order.products
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
            let name = order.infoUser.name;
            let address = order.infoUser.address;
            let phone = order.infoUser.phone;
            let paymentMethod = order.infoUser.paymentMethod;

            // Render ra màn hình
            const htmls = `
        <div class="orders_item-header">
          <div class="orders_item-header-code">
            Mã đơn hàng:
            <p class="orders_item-header-code-text">${order.code}</p>
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
                <p>${order.orderTime}</p>
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
      });
    });
  });

  // 3. Thao tác xác thực 1 đơn hàng
  let tmpData = JSON.parse(localStorage.getItem("USER"));
  const checkAuthBtn = document.querySelectorAll("#verifyOrders");
  checkAuthBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      if (btn.getAttribute("class").includes("active")) {
        notificationAdminFail("Đơn hàng đã được xác thực trước đó!");
        return;
      }
      tmpData.forEach((user) => {
        const orders = user.orders;
        orders.forEach((order) => {
          btn.classList.add("active");
          if (order.code.includes(btn.getAttribute("data"))) {
            order.isVerify = true;
            localStorage.setItem("USER", JSON.stringify(tmpData));
            // renderOrdersPage(tmpData);
            notificationAdminSuccess("Đang xử lí...");
            setTimeout(() => {
              window.location.href = "admin.html";
            }, 1500);
            // alert("Verify ok!!");
          }
        });
      });
    });
  });
};
function formatCurrency(value) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(value);
}

// RENDER TRANG QUẢN LÍ TÀI KHOẢN
const renderCustomerManagementPage = () => {
  const containerAdminDiv = document.querySelector(".container_admin");
  containerAdminDiv.innerHTML = "";
  const dataUser = JSON.parse(localStorage.getItem("USER"));
  const htmls = dataUser.map((item, index) => {
    return `
      <div class="item_user">
        <div class="user_img-admin">
          <img src="./assets/img/user-login.jpg" alt="user_admin" />
        </div>
        <div class="user_info-admin">
          <h3 class="user_name-admin">${item.username}</h3>
          <div class="user_description-admin">Khách hàng</div>
        </div>
        <div class="item_user-action">
          <span data="${item.id}" id="delete_user-admin">&times;</span>
        </div>
      </div>`;
  });
  containerAdminDiv.classList.add("active");
  containerAdminDiv.innerHTML = htmls.join("");

  const deleteUser = document.querySelectorAll("#delete_user-admin");
  deleteUser.forEach((item, index) => {
    item.addEventListener("click", () => {
      for (let i = 0; i < dataUser.length; i++) {
        if (dataUser[i].id == Number(item.getAttribute("data"))) {
          dataUser.splice(i, 1); // xóa đi user admin vừa click
          localStorage.setItem("USER", JSON.stringify(dataUser)); // set lại mảng user
          notificationAdminSuccess("Đang xử lí...");
          setTimeout(() => {
            window.location.href = "admin.html";
          }, 1000);
        }
      }
    });
  });
};

const navItemAdmin = document.querySelectorAll(".nav_item_admin");
navItemAdmin.forEach((item, index) => {
  item.onclick = function () {
    document.querySelector(".nav_item_admin.active").classList.remove("active");
    this.classList.add("active");
    if (index == 0) {
      window.location.href = "admin.html";
      renderAddProductPage();
    } else if (index == 1) {
      renderOrderstManagementPage();
    } else if (index == 2) {
      renderCustomerManagementPage();
    } else if (index == 3) {
      //
      JSON.stringify(localStorage.setItem("isAdmin", false));
      JSON.stringify(localStorage.setItem("isLogin", false));
      window.location.href = "index.html";
    }
  };
});
// xử lí ẩn hiện ảnh review
const handleImageReview = (url, flag) => {
  const imgReview = document.querySelector(".img_review_admin");
  console.log(imgReview);
  if (flag) {
    imgReview.setAttribute("src", url);
    imgReview.classList.remove("active");
    document.querySelector(".file_product_admin").classList.add("active");
  } else {
    imgReview.classList.add("active");
    document.querySelector(".file_product_admin").classList.remove("active");
  }
};
