CREATE TABLE users
(user_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
name VARCHAR(50),
email VARCHAR(50),
password VARCHAR(70),
balance DOUBLE(15,2),
PRIMARY KEY(user_id))AUTO_INCREMENT = 1;

CREATE TABLE share_companies
(share_company_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
company_name VARCHAR(50),
shares_number INT,
sell_price DOUBLE(15,2),
buy_price DOUBLE(15,2),
PRIMARY KEY(share_company_id))AUTO_INCREMENT = 1;

CREATE TABLE share_items
(share_item_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
share_company_id INT UNSIGNED NOT NULL,
user_id INT UNSIGNED NOT NULL,
PRIMARY KEY(share_item_id),
FOREIGN KEY (share_company_id) REFERENCES share_companies(share_company_id),
FOREIGN KEY (user_id) REFERENCES users(user_id))AUTO_INCREMENT = 1;