SET
  NAMES utf8mb4;
CREATE TABLE `members` (
    `member_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `member_name` VARCHAR (255) NOT NULL
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE TABLE `book_status` (
    `status_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `status_description` varchar(255) NOT NULL
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE TABLE `categories` (
    `category_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `category` varchar(255) NOT NULL
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE TABLE `books` (
    `book_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `book_name` varchar(255) NOT NULL,
    `book_status` int(10) unsigned NOT NULL,
    `category_id` int(10) unsigned NOT NULL,
    CONSTRAINT `fk_category_id` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_book_status` FOREIGN KEY (`book_status`) REFERENCES `book_status` (`status_id`) ON DELETE CASCADE ON UPDATE CASCADE
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
CREATE TABLE `member_book` (
    `book_id` int(10) unsigned NOT NULL,
    `member_id` int(10) unsigned NULL,
    PRIMARY KEY (`book_id`, `member_id`),
    CONSTRAINT `fk_books_book_id` FOREIGN KEY (`book_id`) REFERENCES `books` (`book_id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_member_book_members` FOREIGN KEY (`member_id`) REFERENCES `members` (`member_id`) ON DELETE CASCADE ON UPDATE CASCADE
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

INSERT INTO members (member_name)
VALUES ('Semih AYYILDIZ');

INSERT INTO members (member_name)
VALUES ('Donald Duck');

INSERT INTO members (member_name)
VALUES ('Wonder Woman');

INSERT INTO book_status (status_description)
VALUES ('Rentable');

INSERT INTO book_status (status_description)
VALUES ('Leased');

INSERT INTO categories (category)
VALUES ('Heroic');

INSERT INTO categories (category)
VALUES ('Mystery');

INSERT INTO categories (category)
VALUES ('Comic Book');

INSERT INTO books (book_id, book_name, book_status, category_id)
VALUES (1, 'The Lord Of The Rings', 2, 1);

INSERT INTO books (book_id, book_name, book_status, category_id)
VALUES (2, 'Sherlock Holmes', 2, 2);

INSERT INTO books (book_id, book_name, book_status, category_id)
VALUES (3, 'The Walking Dead', 1, 3);

INSERT INTO member_book (book_id, member_id)
VALUES (1, 1);

INSERT INTO member_book (book_id, member_id)
VALUES (2, 2);

INSERT INTO member_book (book_id, member_id)
VALUES (3, NULL);

SELECT books.book_name, book_status.status_description
FROM books
JOIN book_status ON books.book_status = book_status.status_id
WHERE book_status.status_description = 'Rentable';

SELECT books.book_name, categories.category, book_status.status_description , members.member_name
FROM books
JOIN categories ON categories.category_id = books.book_status
JOIN book_status ON books.book_status = book_status.status_id
JOIN member_book ON member_book.book_id = books.book_id
JOIN members ON members.member_id = member_book.member_id;

SELECT members.member_name, books.book_name
FROM members
JOIN member_book ON member_book.member_id = members.member_id
JOIN books ON books.book_id = member_book.book_id;

SELECT *
from members;

SELECT books.book_name, book_status.status_description
FROM books
JOIN book_status ON books.book_status = book_status.status_id;