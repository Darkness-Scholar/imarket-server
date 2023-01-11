create table owner_products (
	owner_product_id varchar(50) not null,
	owner_id varchar(50) not null,
    in_stock int not null,
    foreign key (owner_product_id) references products(product_id),
    foreign key (owner_id) references users(user_id)
)