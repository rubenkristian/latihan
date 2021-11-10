SELECT COUNT(*) AS student FROM students WHERE firstName = 'Michael';

SELECT it.name as itemName, se.name as sellerName FROM items as it JOIN sellers as se ON it.sellerId = se.id WHERE se.rating > 4;

SELECT name FROM employees as emp WHERE id != managerId;

SELECT count(*) as student FROM (
  SELECT AVG(score) as avarageScore FROM student
) s WHERE score > avarageScore;

SELECT userid, avg(duration) FROM sessions GROUP BY userid HAVING COUNT(userid) > 1;