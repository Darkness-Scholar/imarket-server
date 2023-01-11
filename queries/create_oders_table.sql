create table orders (
	order_id varchar(50) not null,
    created_by varchar(50) not null,
    order_to varchar(50) not null,
    product_id varchar(50) not null,
    quantity int not null,
    status varchar(10) default 'pending',
    primary key (order_id),
    foreign key (created_by) references users(user_id),
    foreign key (order_to) references users(user_id),
    foreign key (product_id) references products(product_id)
)