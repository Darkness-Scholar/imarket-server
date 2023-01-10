# A - CÔNG NGHỆ SỬ DỤNG

1. Programming language: Typescript/NodeJS

2. Database: MySQL

3. Framework: ExpressJS

4. Libraries: Jsonwebtoken, Sequelize, ...

# B - PHÂN TÍCH THIẾT KẾ HỆ THỐNG

1. Các chức năng cơ bản:

    - Đăng nhập, đăng ký

    - Phân quyền

    - Thêm, sửa và xóa dữ liệu

    - Nhập hàng

    - Tìm kiếm

![general_diagram](https://i.ibb.co/HCttSmb/general-diagram.png)

2. Xác định đối tượng người dùng

> Người bán

    - Đăng nhập / đăng ký

    - Xem sản phẩm của cá nhân (doanh nghiệp)

    - Quản lý thông tin tài khoản cá nhân (doanh nghiệp)

        + Chỉnh sửa thông tin

    - Quản lý thông tin sản phẩm cá nhân (doanh nghiệp)

        + Chỉnh sửa thông tin sản phẩm
        + Thêm / Xóa sản phẩm

    - Quản lý kho hàng
    
    - Tìm kiếm sản phẩm

>>>>>>>>>>>>>>>>>>>

> Quản trị viên

    - Đăng nhập

    - Xem toàn bộ sản phẩm

    - Quản lý toàn bộ thông tin tài khoản

        + Chỉnh sủa thông tin
        + Thêm người dùng
        + Xóa người dùng

    - Quản lý toàn bộ thông tin sản phẩm

        + Chỉnh sửa thông tin sản phẩm
        + Thêm / Xóa sản phẩm

    - Quản lý kho hàng

    - Tìm kiếm sản phẩm

>>>>>>>>>>>>>>>>>>>


3. Tìm kiếm

    - Tìm kiếm theo tên sản phẩm

    - Tìm kiếm theo nhãn hiệu, nhà phân phối sản phẩm

![register_diagram](https://i.ibb.co/1Xq11KD/image.png)

![login_diagram](https://i.ibb.co/X4QCFK4/image.png)

![product_manager_diagram](https://i.ibb.co/QCFcqsX/product-manager-diagram.png)
