# A - CÔNG NGHỆ SỬ DỤNG

1. Programming language: Typescript/NodeJS

2. Database: MySQL

3. Framework: ExpressJS

4. Libraries: Jsonwebtoken, Sequelize, ...

# B - PHÂN TÍCH THIẾT KẾ HỆ THỐNG

* Mô tả: Là 1 hệ thống quản lý hàng hóa, nhập xuất hàng giữa người bán hàng và nhà phân phối

1. Các chức năng cơ bản:

    - Đăng nhập, đăng ký

    - Phân quyền

    - Thêm, sửa và xóa dữ liệu

    - Nhập hàng

    - Tìm kiếm

 > UPDATE NEW 11/01/2023:

2. Hệ thống phân quyền

* Seller: Người bán hàng

    - Đăng nhập
    - Chỉnh sửa thông tin cá nhân
    - Xem sản phẩm của cá nhân
    - Tìm kiếm sản phẩm, nhà phân phối
    - Nhập hàng từ nhà phân phối
    - Quản lý nhập hàng (create orders)

* Distributor: Nhà phân phối

    - Đăng nhập
    - Chỉnh sửa thông tin cá nhân
    - Xem sản phẩm của cá nhân
    - Tìm kiếm sản phẩm, nhà phân phối
    - Tạo sản phẩm
    - Chỉnh sửa thông tin sản phẩm
    - Quản lý xuất hàng (approve orders)

* Admin: Quản trị viên

    - Đăng nhập
    - Chỉnh sửa thông tin cá nhân
    - Quản lý thông tin người dùng
    - Xem toàn bộ sản phẩm
    - Tìm kiếm sản phẩm, nhà phân phối

3. Chức năng cụ thể:

* Tổng quan: [https://drive.google.com/file/d/1j4JtZ3LU_uqR2VpAJ8r0bcJ7mvsZga56/view?usp=sharing]

* Đăng nhập: [https://drive.google.com/file/d/1ef5TrK1VlqiCxViw27MY0FGHAG3ApMw9/view?usp=sharing]

* Đăng ký: [https://drive.google.com/file/d/1Nm0rzDaXVbzJ61gdB-ziPu33R9WlVQOE/view?usp=sharing]

* Chỉnh sửa thông tin sản phẩm: [https://drive.google.com/file/d/1VKsarvk6cenRR61NS3ZIysPOPfYRBj2C/view?usp=sharing]

* Tạo order: [https://drive.google.com/file/d/1PBCD7T3h91RLZLkoSdVJzetOWdai92Zd/view?usp=sharing]

* Tìm kiếm: [https://drive.google.com/file/d/1kdTwG4DVc3ZBWb7B5TvD_qiyWQTvK8mE/view?usp=sharing]

* Database diagram: [https://dbdiagram.io/d/63be989f6afaa541e5d1c222]