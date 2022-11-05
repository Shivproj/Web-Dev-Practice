

SELECT * FROM
(
select
	A.*,B.AGE
from
	joins.Students A 
inner join
	joins.StudentDetails B 
on 
	A.Id = B.StudentId
) as X
inner join
	PRACTICE.students as C 
on 
	X.age = C.age
