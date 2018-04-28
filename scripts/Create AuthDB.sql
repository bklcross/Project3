DROP DATABASE IF EXISTS authdb;
CREATE database authdb;

USE authdb;

CREATE TABLE users(
	id integer(11) auto_increment not null primary key,
	email VARCHAR(128) not null unique,
	password VARCHAR(32) not null,
	first_name VARCHAR(32) not null,
	last_name VARCHAR(32) not null,
	created DATETIME not null,
	modified DATETIME not null
);
