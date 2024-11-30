# Phân tích các thành phần HTML

Dưới đây là phân tích các phần HTML trong codebase của bạn để giúp bạn hiểu rõ hơn.

## 1. Tệp 

index.html



### a. Header (Phần đầu trang)

- **Logo và Thanh tìm kiếm**:
  - Sử dụng thẻ `<header>` với class `header`.
  - Logo được đặt trong thẻ `<a>` với hình ảnh `logo.png`.
  - Thanh tìm kiếm được tạo bằng thẻ `<input>` với class `search_input`.
  - Nút tìm kiếm sử dụng biểu tượng SVG.

- **Khu vực hành động**:
  - Thẻ `<div>` với class `nav_action` để chứa các nút hoặc liên kết hành động như đăng nhập, đăng xuất.

### b. Sidebar (Thanh bên)

- **Menu điều hướng**:
  - Sử dụng thẻ `<ul>` với class `bar-list`.
  - Các mục menu `<li>` có class `bar-item`:
    - Trang chủ (`TRANG CHỦ`)
    - Sản phẩm (`SẢN PHẨM`)
    - Giỏ hàng (`GIỎ HÀNG`)
    - Các mục khác với chức năng chưa hoàn thiện.

### c. Nội dung chính

- **Slide trình chiếu**:
  - Thẻ `<div>` với class 

slide

 chứa các hình ảnh slide (

slide-item

).
  - Mỗi slide chứa một hình ảnh sản phẩm hoặc quảng cáo.

- **Trang sản phẩm**:
  - Thẻ `<div>` với class `wrapper-product`.
  - Tiêu đề trang trong thẻ `<h2>` với class `title-product`.
  - Phân loại sản phẩm sử dụng `<div>` với class `classification`.
  - Danh sách sản phẩm được hiển thị trong `<div>` với class `product`.
  - Phân trang sử dụng `<div>` với class `number_page`.

- **Trang giỏ hàng**:
  - Tiêu đề giỏ hàng trong `<header>` với class `header-cart`.
  - Nội dung giỏ hàng trong `<div>` với class `cart-content`.
  - Biểu mẫu thanh toán trong `<form>` với class `form_admin`.
  - Nút thanh toán gọi hàm `sendDataOrders()`.

- **Trang đơn hàng**:
  - Thẻ `<div>` với class `orders-page` để hiển thị các đơn hàng.

### d. Footer (Chân trang)

- Chứa logo, các liên kết như Điều khoản dịch vụ, Chính sách bảo mật.
- Biểu tượng mạng xã hội được hiển thị trong `<ul>` với class `footer-contact_icon`.

## 2. Tệp 

admin.html



- Trang quản trị với tiêu đề `TRANG ADMIN`.
- Chứa các chức năng:
  - Thêm, xóa, chỉnh sửa sản phẩm.
  - Quản lý đơn hàng và tài khoản.
- Sử dụng bảng `<table>` để hiển thị dữ liệu sản phẩm và đơn hàng.

## 3. Các tệp JavaScript

- **`slider.js`**:
  - Điều khiển chức năng trình chiếu của phần slide.
  - Sử dụng 

setInterval

 để tự động chuyển slide.

- **`render.js`**:
  - Xử lý hiển thị sản phẩm và giỏ hàng.
  - Bao gồm các hàm như `renderProductPage()`, `addToCart()`.

- **`admin.js`**:
  - Quản lý chức năng admin như xác thực đơn hàng, hiển thị chi tiết đơn hàng.

## 4. Biểu mẫu Đăng nhập và Đăng ký

- Tệp 

login.html

 và 

register.html

:
  - Sử dụng `<form>` với các trường nhập cho tên tài khoản và mật khẩu.
  - Các biểu tượng được thêm bằng thẻ `<i>` với class từ Font Awesome.

## 5. Các thành phần khác

- **Biểu tượng SVG**:
  - Sử dụng trong các nút và liên kết để tăng tính trực quan.

- **Mã thông báo chưa hoàn thiện**:
  - Một số chức năng gọi `notificationAdmin('CHỨC NĂNG CHƯA HOÀN THIỆN')` để thông báo chưa hoàn thiện.

---

Việc phân tích trên giúp bạn hiểu cấu trúc HTML của dự án và cách các thành phần kết hợp với nhau.