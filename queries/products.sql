create table products (
	product_id varchar(50) not null,
    product_name varchar(100) not null,
    product_description varchar(255),
    product_price int not null,
    product_image varchar(255),
    primary key (product_id)
)