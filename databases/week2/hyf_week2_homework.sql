-- I used hyf_lesson2 datas for that homework
-- Part 1: Working with tasks
-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id

INSERT INTO task (title, description, created, updated, due_date, status_id)
VALUES ('Be a Web Developer','You need to study hardly and you need to be a Web Developer', '2021-08-04 02:31:00', '2021-08-04 02:32:00', '2022-01-01 00:00:00', 2);

INSERT INTO user (name, email, phone)
VALUES ('Semih AYYILDIZ', 'semihayyildiz23@hotmail.com', '11 11 11 11');

INSERT INTO user_task (user_id, task_id)
VALUES (12 , 36);

-- Change the title of a task
UPDATE task
SET title = 'Be a Best Web Developer :)'
WHERE id = 36;

-- Change a task due date

UPDATE task
SET due_date = '2021-12-31 23:59:00'
WHERE id = 36;

-- Change a task status

UPDATE task
SET status_id = 3
WHERE id = 7;

-- Mark a task as complete

UPDATE task
SET status_id = 3
WHERE id = 21;

-- Delete a task

DELETE FROM task
WHERE id = 32;

-- Part 2: School database

SET NAMES utf8mb4;

-- Class: with the columns: id, name, begins (date), ends (date)

CREATE TABLE `class` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `begins` DATETIME NOT NULL,
  `ends` DATETIME NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Student: with the columns: id, name, email, phone, class_id (foreign key)

CREATE TABLE `student` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NULL,
  `class_id` INT(10) unsigned NOT NULL,
  CONSTRAINT `fk_class_id` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `class_student` (
  `class_id` int(10) unsigned NOT NULL,
  `student_id` int(10) unsigned NOT NULL,
  PRIMARY KEY(`class_id`, `student_id`),
  CONSTRAINT `fk_class_id_class` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_student_id_student` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO student (name, email, phone, class_id)
VALUES ('Semih AYYILDIZ', 'semihayyildiz23@hotmail.com', '11 11 11 11', 18);

INSERT INTO class (id, name, begins, ends)
VALUES (18, 'Class 18', '2021-02-27 00:00:00', '2021-12-01 00:00:00');

INSERT INTO class_student (class_id, student_id)
VALUES (18, 1);

-- Create an index on the name column of the student table.

CREATE index name
ON student (name);

-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).

CREATE TABLE status_school (  
    id INT PRIMARY KEY AUTO_INCREMENT,
    status ENUM('not-started', 'ongoing', 'finished')  
);

INSERT INTO status_school (status)
VALUES ('not-started');

INSERT INTO status_school (status)
VALUES ('ongoing');

INSERT INTO status_school (status)
VALUES ('finished');

ALTER TABLE class
ADD status int(10);

UPDATE class
SET status = 2
WHERE id = 18;

-- Part 3: More queries
-- Get all the tasks assigned to users whose email ends in @spotify.com

SELECT *
FROM task
JOIN user_task ON user_task.task_id =  task.id
JOIN user ON user.id = user_task.user_id
WHERE email like '%@spotify.com%';

-- Get all the tasks for 'Donald Duck' with status 'Not started'

SELECT *
FROM task
JOIN user_task ON user_task.task_id = task.id
JOIN user ON user.id = user_task.user_id
JOIN status ON status.id = task.status_id
WHERE user.name = 'Donald Duck'
AND status.name = 'Not started';

-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)

SELECT *
FROM task
JOIN user_task ON user_task.task_id = task.id
JOIN user ON user.id = user_task.user_id
WHERE user.name = 'Maryrose Meadows'
AND month(task.created) = 9;

-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)

SELECT COUNT(task.id) as total_task , month(task.created) as month
FROM task
GROUP BY month;
