create table users(
	user_id varchar(50) not null,
    name varchar(50) not null,
    email varchar(200) not null unique,
    password varchar(200) not null,
    role varchar(20) default 'seller',
    is_active boolean default true,
    createdDate datetime,
    updatedDate datetime,
    primary key(user_id)
)