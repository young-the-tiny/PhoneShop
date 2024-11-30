# Tài liệu Hướng dẫn Dự án Web Bán Hàng

## Giới thiệu

Dự án này là một trang web bán hàng trực tuyến, cho phép người dùng xem và mua sản phẩm, quản lý giỏ hàng, đăng ký và đăng nhập tài khoản, cũng như quản lý đơn hàng. Trang web được xây dựng bằng HTML, CSS và JavaScript, lưu trữ dữ liệu người dùng và sản phẩm trên Local Storage.

## Mục lục

1. Cấu trúc Thư mục
2. Các Trang Chính
   - Trang Chủ (`index.html`)
   - Trang Đăng Nhập (`login.html`)
   - Trang Đăng Ký (`register.html`)
   - Trang Quản Trị (`admin.html`)
3. JavaScript Modules
   - `assets/js/index.js`
   - `assets/js/cart.js`
   - `assets/js/orders.js`
   - `assets/js/admin.js`
   - `assets/js/data/localStorage.js`
4. Quản Lý Người Dùng
5. Quản Lý Sản Phẩm
6. Quản Lý Giỏ Hàng
7. Quản Lý Đơn Hàng
8. Ghi Chú

---

## Cấu trúc Thư mục

```
├── index.html
├── login.html
├── register.html
├── admin.html
├── assets
    ├── css
    │   ├── style.css
    │   ├── responsive.css
    │   ├── admin.css
    ├── js
    │   ├── index.js
    │   ├── cart.js
    │   ├── orders.js
    │   ├── admin.js
    │   ├── data
    │       ├── product.js
    │       ├── user.js
    │       ├── localStorage.js
    ├── img
    ├── ...
```

## Các Trang Chính

### Trang Chủ (`index.html`)

- **Header**: Bao gồm logo, thanh tìm kiếm và các hành động như đăng nhập, đăng ký hoặc hiển thị thông tin người dùng khi đã đăng nhập.
- **Sidebar**: Menu bên trái với thông tin người dùng và các liên kết nhanh.
- **Sản Phẩm**: Hiển thị danh sách sản phẩm, cho phép phân loại và sắp xếp sản phẩm.
- **Footer**: Chứa thông tin liên hệ và bản quyền.

### Trang Đăng Nhập (`login.html`)

- Cho phép người dùng nhập thông tin tài khoản để đăng nhập.
- Bao gồm tùy chọn "Lưu thông tin đăng nhập".
- Liên kết đến trang đăng ký nếu người dùng chưa có tài khoản.
- Sử dụng `login.js` để xử lý logic đăng nhập.

### Trang Đăng Ký (`register.html`)

- Cho phép người dùng tạo tài khoản mới bằng cách cung cấp tên người dùng và mật khẩu.
- Liên kết đến trang đăng nhập nếu người dùng đã có tài khoản.
- Sử dụng `register.js` để xử lý logic đăng ký và lưu thông tin vào Local Storage.

### Trang Quản Trị (`admin.html`)

- Dành cho người dùng có quyền quản trị (`isAdmin`).
- Cho phép quản lý sản phẩm: thêm, sửa, xóa sản phẩm.
- Quản lý đơn hàng: xem và xác nhận đơn hàng.
- Sử dụng `admin.js` để xử lý logic quản trị.

## JavaScript Modules

### 

index.js



- **Chức năng**:
  - Kiểm tra trạng thái đăng nhập và hiển thị giao diện tương ứng.
  - Hiển thị thông tin người dùng khi đã đăng nhập.
  - Xử lý sự kiện đăng xuất.
  - Ẩn/hiện các phần tử giao diện dựa trên quyền của người dùng (người dùng thường hoặc quản trị viên).

### 

cart.js



- **Chức năng**:
  - Thêm sản phẩm vào giỏ hàng.
  - Xóa sản phẩm khỏi giỏ hàng.
  - Cập nhật thông tin giỏ hàng của người dùng trong Local Storage.
  - Xử lý hiển thị thông báo khi thêm sản phẩm vào giỏ hàng.

### 

orders.js



- **Chức năng**:
  - Xử lý đặt hàng từ giỏ hàng của người dùng.
  - Tạo đơn hàng mới và lưu vào thông tin người dùng.
  - Tính tổng tiền cho đơn hàng.
  - Cập nhật trạng thái đơn hàng và thông tin người dùng trong Local Storage.

### 

admin.js



- **Chức năng**:
  - Thêm sản phẩm mới vào danh sách sản phẩm.
  - Sửa thông tin sản phẩm hiện có.
  - Xóa sản phẩm khỏi danh sách.
  - Quản lý đơn hàng: xem danh sách đơn hàng, xác nhận đơn hàng.
  - Xử lý tải lên và xem trước hình ảnh sản phẩm.

### 

localStorage.js



- **Chức năng**:
  - Lưu thông tin người dùng mới khi đăng ký.
  - Kiểm tra thông tin đăng nhập của người dùng.
  - Cập nhật thông tin người dùng trong Local Storage sau các hành động như thêm vào giỏ hàng, đặt hàng, v.v.

## Quản Lý Người Dùng

- **Đăng Ký**:
  - Người dùng mới có thể đăng ký tài khoản bằng cách cung cấp tên người dùng và mật khẩu.
  - Thông tin được lưu vào Local Storage dưới khóa `"USER"`.
- **Đăng Nhập**:
  - Người dùng đăng nhập bằng tên người dùng và mật khẩu đã đăng ký.
  - Trạng thái đăng nhập được lưu trong Local Storage (`"isLogin"`).
  - Thông tin người dùng đăng nhập hiện tại được lưu dưới khóa `"userIsLogin"`.

## Quản Lý Sản Phẩm

- **Hiển Thị Sản Phẩm**:
  - Danh sách sản phẩm được hiển thị trên trang chủ.
  - Người dùng có thể sắp xếp và phân loại sản phẩm.
- **Quản Trị Sản Phẩm**:
  - Quản trị viên có thể thêm, sửa, xóa sản phẩm.
  - Thông tin sản phẩm được lưu trong Local Storage dưới khóa `"PRODUCTS"` hoặc `"PRODUCT"`.

## Quản Lý Giỏ Hàng

- **Thêm Sản Phẩm Vào Giỏ Hàng**:
  - Người dùng đã đăng nhập có thể thêm sản phẩm vào giỏ hàng.
  - Giỏ hàng của người dùng được lưu trong đối tượng người dùng (`user.cart`) trong Local Storage.
- **Xóa Sản Phẩm Khỏi Giỏ Hàng**:
  - Người dùng có thể xóa sản phẩm khỏi giỏ hàng của họ.
  - Cập nhật lại thông tin giỏ hàng trong Local Storage sau khi xóa.

## Quản Lý Đơn Hàng

- **Đặt Hàng**:
  - Người dùng có thể đặt hàng với các sản phẩm trong giỏ hàng.
  - Yêu cầu người dùng nhập thông tin cá nhân (tên, số điện thoại, địa chỉ).
- **Xác Nhận Đơn Hàng**:
  - Quản trị viên có thể xem danh sách đơn hàng và xác nhận đơn hàng.
  - Trạng thái đơn hàng được cập nhật trong thông tin người dùng.

## Ghi Chú

- Dự án sử dụng Local Storage để lưu trữ dữ liệu, do đó dữ liệu sẽ bị mất khi xóa cache trình duyệt.
- Cần đảm bảo rằng JavaScript được bật trên trình duyệt để trang web hoạt động đầy đủ.
- Các tệp JavaScript được liên kết ở cuối tệp HTML để đảm bảo chúng được tải sau khi DOM đã được xây dựng.
- Phân quyền truy cập giữa người dùng thường và quản trị viên được thực hiện dựa trên thuộc tính `isAdmin` trong đối tượng người dùng.