--work assigned on 02112022
-- the 40 questions 


--create table practice.company (
--RegId Uniqueidentifier,
--Name varchar(20),
--Budget bigint,
--Location  varchar(20),
--Industry varchar(20)

--)

--insert into practice.company values(newId(),'Meta',9000000,'California','Big Tech')
--insert into practice.company values(newId(),'Microsoft',9000000,'Seattle','Big Tech')
--insert into practice.company values (newId(),'Amazon',150000000,'Hyderabad','E-Commerce')
--insert into practice.company values(newId(),'Dell',45000000,'Texas','Hardware')
--insert into practice.company values (newId(),'Tesla',202022002,'Texas','Car-Tech')
--insert into practice.company values(newId(),'MRF',1500000,'Chennai','Tyres')
--insert into practice.company values(newId(),'Hercules',1700000,'Bengaluru','Bicycles')
--insert into practice.company values(newId(),'Reynolds',2500000,'Delhi','Pens')
--insert into practice.company values(newId(),'Tommy Hilfiger',1500000,'New York','Apparel')
--insert into practice.company values(newId(),'Apple',60000000,'California','Big Tech')

--select * from practice.company

--Ques.1. Write an SQL query to fetch the EmpId and FullName of all the employees working under Manager with id – ‘986’.
--Modification for my table where company RegId = 7EE24D81-BDC4-43BB-B24F-51D56DB07E86

--Solution
select Name,Location,Industry,Budget from practice.company where RegId='7EE24D81-BDC4-43BB-B24F-51D56DB07E86'


--Ques.2. Write an SQL query to fetch the different projects available from the EmployeeSalary table.
--Modification for my table I am checking for different or similar industries
--Solution
select  distinct(Industry)   from practice.company 


--Ques.3. Write an SQL query to fetch the count of employees working in project ‘P1’.
--Modification for my table I am checking for companies working in the big tech sector

select * from practice.company where Industry = 'Big Tech'

--Ques.4. Write an SQL query to find the maximum, minimum, and average salary of the employees.
--Modification for my table I am calculating average ,sum , max , min related to salaries
select max(budget) as Maximum,min(budget) as Minimum,avg(budget) as average from practice.company

--Ques.5. Write an SQL query to find the employee id whose salary lies in the range of 9000 and 15000.
--Modification for my table I am calculating budget ranges between 45000000 and 150000000
--Method 1
select * from practice.company where budget>=45000000 and budget<=150000000 order by budget
--Method 2
select * from practice.company where budget between 45000000 and 150000000


--Ques.6. Write an SQL query to fetch those employees who live in Toronto and work under manager with ManagerId – 321.
--Modification I am making sure location is california and  industry is big tech
select * from practice.company where location = 'California' and Industry = 'Big Tech'


--Question.7 Write an SQL query to fetch all the employees who either live in California or work under a manager with ManagerId – 321.
select * from practice.company where location = 'California' OR Industry = 'Big Tech'

--Question.8  Write an SQL query to fetch all those employees who work on Project other than P1.
--Modification I am querying for locations other than California
select * from practice.company where location != 'California'
--Ques.9. Write an SQL query to display the total salary of each employee adding the Salary with Variable value.
--Modification I am concat'ing two columns 
select *,Name + Industry as Concat from practice.company
--Ques10. Write an SQL query to fetch the employees whose name begins with any two characters, followed by a text “hn” and ending with any sequence of characters.

select * from practice.company where Name like '_pp%' --One underscore for one letter 




--Ques.11 Write an SQL query to fetch all the EmpIds which are present in either of the tables – ‘EmployeeDetails’ and ‘EmployeeSalary’.
--I am using joins.Students and joins.Student details
select Id from joins.Students union select studentid from joins.StudentDetails

--Ques.12 Write an SQL query to fetch common records between two tables.
select * from joins.StudentDetails intersect select * from joins.Students
--Does not work with my tables

--Ques.13. Write an SQL query to fetch records that are present in one table but not in another table.
select * from joins.StudentDetails minus select * from joins.Students
--Q14 and Q15 Subquery

--Ques.16. Write an SQL query to fetch the employee full names and replace the space with ‘-’.
--Modification replace comany industry
select Replace(Industry,' ','-') from practice.company 

--Ques.17. Write an SQL query to fetch the position of a given character(s) in a field.Did not get

--Ques.18. Write an SQL query to display both the EmpId and ManagerId together.

--Modification  I am concat'ing two columns 
select *,Name + Industry as Concat from practice.company
--Q19.Write a query to fetch only the first name(string before space) from the FullName column of the EmployeeDetails table.
-- I am using it after the ID as it includes 'A'
select substring(Id,2,len(ID)) as ID from joins.Students

--Ques.20. Write an SQL query to upper case the name of the employee and lower case the city values.
--Modification upper casing name lower caisng industry
select upper(Name)as Name,lower(Industry) as Industry from practice.company
--Q21 
select name,len(name)-len(replace(name,'a','')) as  [number of a's] from joins.Students
--Q22
update joins.Students set name=ltrim(rtrim(name)) 
select * from joins.Students
--Q23 Fetch all the employees who are not working on any project.
select * from joins.Students A LEFT join joins.StudentDetails B ON A.id = B.StudentId where B.Id is Null
--Ques.24. Write an SQL query to fetch employee names having a budget greater than or equal to 9000000  and less than or equal to 9000000.
select name from practice.company where Budget>=9000000 and Budget<=150000000

--Question.25 Write an SQL query to find the current date-time.
SELECT getdate() as [Date and Time]
--Ques.26. Write an SQL query to fetch all the Employees details from EmployeeDetails table who joined in the Year 2020.
select * from practice.cars where year = 2020
--Ques.27. Write an SQL query to fetch all employee records from EmployeeDetails table who have a salary record in EmployeeSalary table.
select * from joins.Students as A INNER join joins.StudentDetails as B on A.Id=B.StudentId
--Ques.28. Write an SQL query to fetch project-wise count of employees sorted by project’s count in descending order.
select year,count(*) as count from practice.cars  group by Year order by count desc
select * from practice.cars
--Ques.29. Write a query to fetch employee names and salary records. Display the employee details even if the salary record is not present for the employee.
select * from joins.Students A right join  joins.StudentDetails B on A.Id=B.StudentId
--Ques.30. Write an SQL query to join 3 tables.
select * from joins.Students A inner join joins.StudentDetails B on A.Id=B.StudentId  inner join PRACTICE.students as C on B.age=C.age

select * from practice.students
--Ques.32.Write an SQL query to fetch duplicate records from EmployeeDetails (without considering the primary key – EmpId).
select * from practice.cars
select count(year) as Count from practice.cars group by year having count(*)>1

--Ques.34. Write an SQL query to fetch only odd rows from the table.
--Did not get solution as my table does not have a num based ID
--Ques.36. Write an SQL query to create a new table with data and structure copied from another table.

SELECT * INTO practice.companycopy1  FROM practice.company --cloning of a table

SELECT * from practice.companycopy1
--Ques.37. Write an SQL query to create an empty table with the same structure as some other table.

select * into practice.companycopy2 from practice.company where 1=0
select * from practice.companycopy2


--Ques.38. Write an SQL query to fetch top n records?
select top 5 * from practice.company

--Ques.39. Write an SQL query to find the nth highest salary from table.
select top 1  * from practice.company order by budget desc

--Ques.40. Write SQL query to find the 3rd highest salary from a table without using the TOP/limit keyword.
--Do not know how to do this


-- Testing group by select Location,RegId,Industry,Name from practice.company group by industry,Name,RegId,Location 
select Industry from practice.company
select distinct Industry from practice.company
select distinct * FROM practice.company 
--14 15 31 35 left