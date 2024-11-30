# Phân tích các thành phần CSS

Dưới đây là phân tích các phần CSS trong codebase của bạn để giúp bạn hiểu rõ hơn.

## 1. Tệp `style.css`

### a. Thiết lập chung

- **Container chính** (`.container`):
  - Chiều rộng 100%, chiều cao tối thiểu 100vh.
  - Sử dụng `flex` để căn chỉnh nội dung.
  - Có khoảng cách trên (`margin-top`) 20px và khoảng cách dưới (`padding-bottom`) 30px.
  - Khi có class `active`, `display` sẽ là `none`.

### b. Sidebar và Thanh điều hướng

- **Sidebar** (`.sidebar`):
  - Không co lại khi cửa sổ thay đổi kích thước (`flex-shrink: 0`).

- **Thanh điều hướng** (`.bar`):
  - Vị trí cố định, chiều rộng 250px.
  - Sử dụng thuộc tính `sticky` để giữ vị trí khi cuộn trang.
  - Các mục trong thanh (`.bar-item`, `.bottom-bar`):
    - Có khoảng cách (`margin`) và đệm (`padding`) đều nhau.
    - Bo góc (`border-radius`) 4px.
    - Sử dụng `box-shadow` để tạo hiệu ứng nổi.
    - Hiển thị dưới dạng `flex` để căn giữa nội dung.
    - Khi di chuột vào (`:hover`), thay đổi viền và màu nền.
    - Khi được kích hoạt (`.active`), thay đổi màu chữ và màu nền.

- **Icon và Văn bản trong thanh điều hướng**:
  - Các biểu tượng SVG được đặt kích thước cố định.
  - Văn bản được căn trái và có font chữ đậm.

### c. Phân loại sản phẩm

- **Khung phân loại** (`.classification`):
  - Chiều rộng 100%, chiều cao 60px.
  - Có khoảng cách trên dưới và đệm.
  - Sử dụng `flex` để căn chỉnh nội dung sang trái.
  - Khi có class `active`, `display` sẽ là `none`.

- **Chọn phân loại** (`.classification_select`):
  - Chiều rộng 200px, chiều cao 30px.
  - Có đệm và khoảng cách.
  - Sử dụng `box-shadow` để tạo viền mờ.
  - Vị trí tương đối để chứa danh sách tùy chọn.
  - Con trỏ chuột hiển thị dạng pointer.
  - Khi di chuột vào, hiển thị danh sách tùy chọn (`.classification_option`).

### d. Hiệu ứng chung

- **Hiệu ứng chuyển đổi**:
  - Sử dụng `transition` cho các thay đổi về màu sắc và kích thước.
  - Bo góc cho các phần tử để giao diện mềm mại hơn.

## 2. Tệp `admin.css`

### a. Trang quản trị chung

- **Container của trang quản trị** (`.container_admin`):
  - Chiều rộng 100%, chiều cao tự động.
  - Sử dụng `grid` để hiển thị nội dung theo cột.
  - Có thanh cuộn tùy chỉnh với `::-webkit-scrollbar`.

- **Nút trong trang quản trị** (`.header_admin-page button`):
  - Có đệm và khoảng cách đều nhau.
  - Viền màu chính và nền trong suốt.
  - Font chữ đậm và kích thước 16px.
  - Khi di chuột vào, thay đổi màu nền và màu chữ.
  - Khi có class `active`, `display` sẽ là `none`.

### b. Quản lý người dùng

- **Danh sách người dùng** (`.wrapper_users-admin`):
  - Hiển thị dưới dạng lưới với 4 cột.
  - Có khoảng cách giữa các phần tử.

- **Thẻ người dùng** (`.item_user`):
  - Vị trí tương đối để chứa các phần tử con.
  - Có đệm và căn giữa nội dung.
  - Bo góc và hiệu ứng bóng đổ.
  - Nền là hình ảnh `bg_style.jpg`.
  - Khi di chuột vào, hiển thị hành động (`.item_user-action`) với hiệu ứng mờ dần.

- **Hành động trên thẻ người dùng** (`.item_user-action`):
  - Vị trí tuyệt đối, che phủ toàn bộ thẻ.
  - Hiển thị dạng `flex` để căn giữa nội dung.
  - Font chữ 30px, màu trắng.
  - Khi di chuột vào, thay đổi nền và độ mờ.

### c. Quản lý đơn hàng

- **Bảng hiển thị đơn hàng**:
  - Sử dụng `table` để hiển thị dữ liệu.
  - Tiêu đề bảng được thiết kế với font chữ đậm.

- **Trạng thái đơn hàng** (`.verify_order`):
  - Khi đơn hàng đã xác thực, thêm class `active` để thay đổi màu sắc và hiệu ứng.
  - Nút xác thực (`.auth_order`) sẽ bị vô hiệu hóa khi đơn hàng đã xác thực.

- **Chi tiết đơn hàng** (`.detail_order`):
  - Có gạch chân dưới và màu chữ xanh.
  - Con trỏ chuột hiển thị dạng pointer.

### d. Hiệu ứng và Thanh cuộn

- **Thanh cuộn tùy chỉnh**:
  - Sử dụng `::-webkit-scrollbar` để thay đổi độ rộng và màu sắc.
  - Bo góc cho thanh cuộn để giao diện thân thiện hơn.

## 3. Hiệu ứng cho Trang đặt hàng

- **Chi tiết đơn hàng trong Overlay** (`.overlay_detail_order`):
  - Vị trí tuyệt đối, căn giữa màn hình.
  - Chiều rộng cố định 1000px và chiều cao tối đa 700px.
  - Có thanh cuộn dọc nếu nội dung vượt quá chiều cao.
  - Nền trắng, bo góc và có đệm xung quanh.
  - Thanh cuộn tùy chỉnh với màu sắc và độ rộng xác định.

- **Nút hủy đơn hàng** (`.orders_item-footer_cancle`):
  - Khi đơn hàng đã xác thực, nút hủy sẽ ẩn đi (`display: none`).

## 4. Các thành phần khác

- **Hiệu ứng khi di chuột và kích hoạt**:
  - Các nút và liên kết thay đổi màu sắc, nền hoặc kích thước khi người dùng tương tác.
  - Sử dụng `transition` để tạo hiệu ứng mượt mà.

- **Phần tử vô hiệu hóa**:
  - Khi một phần tử bị vô hiệu hóa, giảm độ mờ (`opacity`) và thay đổi con trỏ chuột cũng như màu sắc để người dùng biết không thể tương tác.

---

Việc phân tích trên giúp bạn hiểu rõ cấu trúc và cách thức hoạt động của các thành phần CSS trong dự án, từ đó dễ dàng điều chỉnh và phát triển giao diện theo nhu cầu.