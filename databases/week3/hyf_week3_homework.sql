SET
  NAMES utf8mb4;

CREATE TABLE `meal` (
    `id` INT(10) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT NULL DEFAULT NULL,
    `location` VARCHAR(255) NOT NULL,
    `when` DATETIME DEFAULT NULL,
    `max_reservations` INT(10) NOT NULL,
    `price` DECIMAL NOT NULL,
    `created_date` DATE NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `reservation` (
    `id` INT(10) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `number_of_guests` INT(10) NOT NULL,
    `meal_id` INT(10) NOT NULL,
    `created_date` DATE NOT NULL,
    `contact_phonenumber` VARCHAR(255) NOT NULL,
    `contact_name` VARCHAR(255) NOT NULL,
    `contact_email` VARCHAR(255) NOT NULL,
    CONSTRAINT `fk_reservation_meal_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE Table `review` (
    `id` INT(10) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT NULL DEFAULT NULL,
    `meal_id` INT(10) NOT NULL,
    `stars` INT(10) NOT NULL,
    `created_date` DATE NOT NULL,
    CONSTRAINT `fk_review_meal_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO meal (title, description, location, max_reservations, price, created_date)
VALUES ('Yaprak Sarma', 'Delicious Turkish Food include Rice with grape leaf', 'Denmark', 12, 360.00, '2021-08-11');

INSERT INTO meal (title, description, location, max_reservations, price, created_date)
VALUES ('Manti', 'Delicious Turkish Food include Mince', 'Denmark', 12, 400.00, '2021-08-11');

INSERT INTO meal (title, description, location, max_reservations, price, created_date)
VALUES ('Dolma', 'Delicious Turkish Food include Rice, Mince with pepper', 'Denmark', 12, 300.00, '2021-08-08');

INSERT INTO meal (title, description, location, max_reservations, price, created_date)
VALUES ('Pasta', 'Delicious homemade pasta with cheese', 'Denmark', 8, 240.00, '2021-08-05');

INSERT INTO meal (title, description, location, max_reservations, price, created_date)
VALUES ('Soup', 'Amazing tomato soup', 'Denmark', 12, 180.00, '2021-08-10');

INSERT INTO meal (title, description, location, max_reservations, price, created_date)
VALUES ('Fish Fry', 'Fish fry with potato', 'Denmark', 4, 320.00, '2021-08-07');

INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (8, 1, '2021-08-11 00:00:00', '11 11 11 11', 'Semih', 'abc@mail.com');

INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (3, 2, '2021-08-10 00:00:00', '22 22 22 22', 'Yusuf', 'def@mail.com');

INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (12, 3, '2021-08-08 00:00:00', '33 33 33 33', 'Ayse', 'ghj@mail.com');

INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (6, 4, '2021-08-12 00:00:00', '55 55 55 55', 'John', 'zxc@mail.com');

INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (2, 5, '2021-08-10 00:00:00', '66 66 66 66', 'Angel', 'vbn@mail.com');

INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (7, 6, '2021-08-11 00:00:00', '77 77 77 77', 'Don', 'qwe@mail.com');

INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES ('Very Delicious', 'Best food of my life', 1, 5 , '2021-08-11 00:00:00');

INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES ('Amazing', 'Amazing Food', 2, 5 , '2021-08-11 00:00:00');

INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES ('Awesome', 'Awesome Food', 4, 5 , '2021-08-12 00:00:00');

INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES ('Really Bad', 'Bad taste and very salty', 5, 1 , '2021-08-11 00:00:00');

INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES ('Good', 'Normal Taste', 6, 3 , '2021-08-11 00:00:00');

-- QUERIES
-- Get all meals
SELECT *
FROM meal;

-- Add a new review
INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES ('A little bit salty', 'Food was little bit salty but it was delicious', 3, 4 , '2021-08-11 00:00:00');

-- Get a review with any id, fx 1

SELECT *
FROM review
WHERE meal_id = 2;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE review
SET description = 'Very very delicious'
WHERE review.id = 1;

-- Delete a review with any id, fx 1

DELETE FROM review WHERE id = 1;

-- Get meals that has a price smaller than a specific price fx 90

SELECT *
FROM meal
WHERE meal.price < 360;

-- Get meals that still has available reservations

SELECT *
FROM meal
JOIN reservation ON meal.id = reservation.meal_id
WHERE reservation.number_of_guests < meal.max_reservations;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde

SELECT *
FROM meal
WHERE meal.title like '%yaprak%';

-- Get meals that has been created between two dates

SELECT *
FROM meal
WHERE meal.created_date < '2021-08-12'
AND meal.created_date > '2021-08-09';

-- Get only specific number of meals fx return only 5 meals

SELECT *
FROM meal
LIMIT 2;

-- Get the meals that have good reviews

SELECT meal.* , review.stars
FROM meal
JOIN review ON meal.id = review.meal_id
WHERE review.stars > 3;

-- Get reservations for a specific meal sorted by created_date

SELECT *
FROM reservation
JOIN meal ON meal.id = reservation.meal_id
WHERE meal.title LIKE '%yaprak%'
ORDER BY reservation.created_date ASC;

-- Sort all meals by average number of stars in the reviews

SELECT meal.* , review.stars
FROM meal
JOIN review ON review.meal_id = meal.id
ORDER BY review.stars DESC;
