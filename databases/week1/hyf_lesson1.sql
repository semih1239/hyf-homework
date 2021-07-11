--1-- Find out how many tasks are in the task table
SELECT count(*)
FROM task;

--2-- Find out how many tasks in the task table do not have a valid due date
SELECT count(*)
FROM task
WHERE due_date is NULL;

--3-- Find all the tasks that are marked as done
SELECT *
from task
where status_id = 3;

--4-- Find all the tasks that are not marked as done
SELECT *
FROM task
WHERE NOT status_id=3;

--5-- Get all the tasks, sorted with the most recently created first
SELECT *
from task
ORDER BY created ASC;

--6-- Get the single most recently created task
SELECT *
FROM task
ORDER BY created DESC
LIMIT 1;

--7-- Get the title and due date of all tasks where the title or description contains database
SELECT title, due_date
FROM task
WHERE title like '%database%' OR  description like '$database%';

--8-- Get the title and status (as text) of all tasks
SELECT title , status.name
FROM task
JOIN status ON task.status_id = status.id;

--9-- Get the name of each status, along with a count of how many tasks have that status
SELECT status.name , COUNT(task.status_id) as 'Total Count'
FROM status
JOIN task ON status.id = task.status_id
GROUP BY task.status_id;

--10-- Get the names of all statuses, sorted by the status with most tasks first
SELECT status.name , COUNT(task.status_id) as 'Total Count'
FROM status
JOIN task ON status.id = task.status_id
GROUP BY task.status_id
ORDER BY COUNT(task.status_id) DESC ;