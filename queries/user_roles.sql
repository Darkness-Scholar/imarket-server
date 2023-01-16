create table user_roles (
	user_role_id int not null auto_increment,
    user_id varchar(50) not null,
	role_id int not null,
    primary key (user_role_id),
    foreign key (user_id) references users(user_id)
)