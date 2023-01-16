create table role_permissions (
	role_permission_id int not null auto_increment,
    role_id int not null,
    permission_id int not null,
    primary key (role_permission_id),
    foreign key (role_id) references roles (role_id),
    foreign key (permission_id) references permissions (permission_id)
)