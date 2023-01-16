create table product_categories (
	product_id varchar(50) not null,
    category_id varchar(50) not null,
    foreign key (product_id) references products (product_id),
    foreign key (category_id) references categories (category_id)
)