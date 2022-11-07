--Practice 27102022
--Table 1 - Cars
create table cars
(
    VIN uniqueIdentifier,
    Brand varchar(20),
    Model nvarchar(20),
)

insert into cars
    (VIN,Brand,Model)
values
    (newId(), 'Buggati', 'Veyron'),
    (newId(), 'Ferrari', '458'),
    (newId(), 'Mercedes', 'E420'),
    (newId(), 'Ferrari', '458 Pista'),
    (newId(), 'Aston Martin', 'Valk')

select *
from cars

select VIN
from cars
where Brand = 'Ferrari'

-- Table2 
-- Items and expiry date and price

create table goods
(
    name varchar(50),
    price int,
    expiry1 date,
    expiry2 datetime,
    expiry3 datetime2,
)

insert into  goods
    (name,price,expiry1,expiry2,expiry3)
values
    ('Milk', 175, '2022-10-27', '2022-10-27 23:20:15', '2022-10-27 23:20:15.878' )

select *
from goods

insert into  goods
    (name,price,expiry1,expiry2,expiry3)
values
    ('Potato', 175, GETDATE(), '2022-10-29 23:20:15', '2022-10-29 23:20:15.878' )
select *
from goods


-- Table 3 // I am using the rest of the datatypes here and deleteing and dropping this table.


create table dummy
(
    name varchar(20),
    age int,
    contact bigint,
    salary float,
    currency money,
    weight decimal,
)




insert into dummy
    (name,age,contact,salary,currency,weight)
values
    ('Shiv Sai', 20, 8247057536, 75000000.50, 78.22, 80.10),
    ('Shiv Sai', 20, 8247057536, 75000000.50, 78.22, 80.10),
    ('Sai', 30, 8247057536, 75000000.50, 78.12, 81.10)

select *
from dummy

delete  from dummy

drop table dummy


-- Table number 4 to explore GETDATE() method
create table dates
(
    day varchar(20),
    type1 date,
    type2 datetime,
    type3 datetime2
)

insert into dates
values
    ('Monday', GETDATE(), GETDATE(), GETDATE())
insert into dates
values
    ('Tuesday', GETDATE(), GETDATE(), GETDATE())
insert into dates
values
    ('Wednesday', GETDATE(), GETDATE(), GETDATE())

select *
from dates

truncate table dates
-- use truncate to delete

--28102022 practice
update cars Set brand='Aston Martin Racing',model='Vantage' where VIN='1E327FE1-4056-49C8-A3A6-E1D6F1FBAF23'

select *
from cars
insert into cars
values
    (newId(), 'Jaguar', 'F-Pace')

alter table cars add topspeed int

SELECT *
FROM CARS
WHERE BRAND ='MCLAREN'

ALTER TABLE CARS
DROP COLUMN topspeed;

delete from cars where  VIn='39CDD413-5A3F-429E-B735-3CC63ACE43F1'
alter table cars add topspeed decimal(20,4)

update cars set topspeed=323.163 where Brand='Mclaren'
update cars set topspeed=417.10 where Model='Veyron'
update cars set topspeed=317.0 where Model='458'
update cars set topspeed=287.10 where Model='E420'
update cars set topspeed=307.10 where Model='Vantage'
update cars set topspeed= 200 where brand ='Jaguar'

select Brand, Model, TOpspeed
from cars
where topspeed >300.0000

alter table cars alter column TOPSPEED decimal(20,4)

select *
from cars

--Practice  for 28102022
drop table students
create table students
(
    FirstName varchar(50),
    LastName varchar(50),
    Age int,
    Contact bigint,
    email nvarchar(255),
    address nvarchar(255),
    height decimal(10,2),
    weight decimal(10,2),
    entry_time datetime2
)
select *
from students

insert into students
    (FirstName, LastName, Age, Contact, email,address,height,entry_time)
values
    ('Shiv Sai', 'Indrakanti', 20, 8247057536, 'shivindrakanti@gmail.com', 'S.R.Nagar', 172.2, getDate())

alter table students add salary bigint

update students set salary = 5500000 where height =  172.2

alter table students drop column weight

alter table students alter column salary decimal(10,3)

--Creating a new schema


create schema student

create table student.std1
(
    Name varchar(50),
    Age int
)

create table student.std2
(
    Name varchar(50),
    Age int
)


select *
from student.std1
select *
from student.std2
insert into student.std1
    (Name,Age)
values
    ('Shiv Sai', 20)
insert into student.std2
    (Name,Age)
values
    ('Sai Sai', 21)


--28102022 practice
update cars Set brand='Aston Martin Racing',model='Vantage' where VIN='1E327FE1-4056-49C8-A3A6-E1D6F1FBAF23'

select *
from cars
insert into cars
values
    (newId(), 'Jaguar', 'F-Pace')

alter table cars add topspeed int

SELECT *
FROM CARS
WHERE BRAND ='MCLAREN'

ALTER TABLE CARS
DROP COLUMN topspeed;

delete from cars where  VIn='39CDD413-5A3F-429E-B735-3CC63ACE43F1'
alter table cars add topspeed decimal(20,4)

update cars set topspeed=323.163 where Brand='Mclaren'
update cars set topspeed=417.10 where Model='Veyron'
update cars set topspeed=317.0 where Model='458'
update cars set topspeed=287.10 where Model='E420'
update cars set topspeed=307.10 where Model='Vantage'
update cars set topspeed= 200 where brand ='Jaguar'

select Brand, Model, TOpspeed
from cars
where topspeed >300.0000

alter table cars alter column TOPSPEED decimal(20,4)

select *
from cars

--Practice  for 28102022
drop table students
create table students
(
    FirstName varchar(50),
    LastName varchar(50),
    Age int,
    Contact bigint,
    email nvarchar(255),
    address nvarchar(255),
    height decimal(10,2),
    weight decimal(10,2),
    entry_time datetime2
)
select *
from students

insert into students
    (FirstName, LastName, Age, Contact, email,address,height,entry_time)
values
    ('Shiv Sai', 'Indrakanti', 20, 8247057536, 'shivindrakanti@gmail.com', 'S.R.Nagar', 172.2, getDate())

alter table students add salary bigint

update students set salary = 5500000 where height =  172.2

alter table students drop column weight

alter table students alter column salary decimal(10,3)

--Creating a new schema


create schema student

create table student.std1
(
    Name varchar(50),
    Age int
)

create table student.std2
(
    Name varchar(50),
    Age int
)


select *
from student.std1
select *
from student.std2
insert into student.std1
    (Name,Age)
values
    ('Shiv Sai', 20)
insert into student.std2
    (Name,Age)
values
    ('Sai Sai', 21)


--31022022
--Primary and Foreign key
create table developers
(
    Id uniqueIdentifier,
    Name nvarchar(200),
    Role nvarchar(200),
    Client nvarchar(100),
    Contact nvarchar(100),
    Email nvarchar(100),
    constraint PK_Developers_Id primary key (Id)
)

create table developerDetails
(
    Id UniqueIdentifier,
    DeveloperId UniqueIdentifier,
    Experience nvarchar(100),
    Salary bigint,
    Skills nvarchar(200),
    constraint FK_DeveloperDetails_DeveloperId foreign key (developerId) references developers(Id)
)

select *
from dbo.developerDetails
select *
from dbo.developers


--inserting data


insert into dbo.developers
Values
    (NEWID(),
        'Shiv',
        'ML developer',
        'Google',
        '8247057536',
        'shivindrakanti@gmail.com'


),
    (NEWID(),
        'Sai',
        'GOAT',
        'Best',
        '8121447096',
        'saiindrakanti@gmail.com'
)
select *
from dbo.developers

--it wont let me drop the table 


drop table developers
drop table developerDetails
-- Note we first have to drop table with fk then drop the one with pk



--Practice 

create schema Students

create table Students.details
(
    id UNIQUEIDENTIFIER,
    Name nvarchar(20),
    Contact bigint,
    constraint pk_studentdetails Primary Key  (id)
)

create table Students.marks
(
    id uniqueidentifier,
    Maths int,
    Physics int,
    Chemistry int,
    Social int,
    English int
        constraint fk_studentdetails_id foreign key (id) references Students.details(id)

)



select *
from Students.details
Select *
from Students.marks

--Inserting values into these tables


insert into Students.details
values
    (newId(), 'Shiv Sai', 8247057536)
insert into Students.details
values
    (newId(), 'Swami', 9618729667),
    (newId(), 'K Sai Ram', 9985246354),
    (newId(), 'Pavan', 9985246354)


insert into Students.marks
values

    ('3FB187EA-459D-41F6-8AE3-22FB84E420B3', 99, 98, 97, 98, 99),
    ('BEE682CB-FA97-4F2B-B7E7-7E3292610466', 88, 85, 80, 81, 82),
    ('2FAD52AD-2E6A-45BF-AA3D-B9B12881019B', 66, 69, 70, 72, 74),
    ('2D01C028-170B-4AED-AFC1-EF4162941F8F', 91, 82, 87, 86, 82)


truncate table Students.details
-- Note parent table cant be deleted or dropped while it has fk constraints


delete from Students.details where Name='Shiv Sai'

update Students.details set Name='Shivs' where Name ='Shiv Sai'
update Students.details set id='39CDD413-5A3F-429E-B735-3CC63ACE43F1' where id ='3FB187EA-459D-41F6-8AE3-22FB84E420B3'
update Students.details set id=NEWiD() where id ='3FB187EA-459D-41F6-8AE3-22FB84E420B3'
update Students.marks set id='39CDD413-5A3F-429E-B735-3CC63ACE43F1' where id ='3FB187EA-459D-41F6-8AE3-22FB84E420B3'





alter table Students.details add  email  nvarchar(20)
select *
from Students.details
select *
from Students.marks



alter table Students.marks drop constraint fk_studentdetails_id
alter table Students.marks add constraint fk_studentdetails_id foreign key (id) references Students.details(id)

sp_rename 'dbo.developers.Role', 'ROLE';

  sp_rename 'dbo.developers', 'DEVELOPERS';

--Practice 01112022
create table signup
(
    UID uniqueIdentifier,
    FirstName nvarchar(20),
    LastName nvarchar(20),
    username nvarchar(30),
    password nvarchar(20),
    Constraint pk_signup primary key (UID)
)
alter table signup add constraint signup_username unique (username)
insert into  signup
values
    (newid(), 'Shiv', 'Sai', 'shivsai', 'sai12345');

select *
from signup


--Make these with atleast 10 records in each.
--Without constrainsts make cars , students,company, sales 
--With constraints student-student details , employee-employee details

create schema practice

create table practice.cars
(
    VIN uniqueidentifier,
    Brand varchar(20),
    Model nvarchar(20),
    Cost bigint,
    Color nvarchar(20),
    Topspeed int


)

insert into practice.cars
values(NEWID(), 'Tesla', 'Model S', 25000000, 'Midnight Black', 320)
insert into practice.cars
values
    (NEWID(), 'Volvo', 'XC90', 8500000, 'Sky Blue', 245)
insert into practice.cars
values
    (NEWID(), 'Audi', 'R8', 2500002, 'Fire Red', 342)
insert into practice.cars
values
    (NEWID(), 'Maruti', 'Alto', 200000, 'Soul Silver', 140)
insert into practice.cars
values
    (NEWID(), 'Porsche', '918', 4500000, 'Heart Gold', 332)
insert into practice.cars
values
    (NEWID(), 'Kia', 'Seltos', 200000, 'Pearl White', 220)
insert into practice.cars
values
    (NEWID(), 'Ferrari', 'California', 1000000, 'Burning Red', 280)
insert into practice.cars
values
    (NEWID(), 'Hyundai', 'Verna', 1150000, 'Arctic Blue', 200)
insert into practice.cars
values
    (NEWID(), 'Alpine', 'A150', 8000200, 'Matte Purple', 240)
insert into practice.cars
values
    (NEWID(), 'Renault', 'Megane', 160000, 'Arctic Blue', 280)
insert into practice.cars
values
    (NEWID(), 'Buggati', 'Veyron', 50000000, 'Speed Orange', 420)
select*
from practice.cars



create table practice.company
(
    RegId Uniqueidentifier,
    Name varchar(20),
    Budget bigint,
    Location varchar(20),
    Industry varchar(20)

)

insert into practice.company
values(newId(), 'Meta', 9000000, 'California', 'Big Tech')
insert into practice.company
values(newId(), 'Microsoft', 9000000, 'Seattle', 'Big Tech')
insert into practice.company
values
    (newId(), 'Amazon', 150000000, 'Hyderabad', 'E-Commerce')
insert into practice.company
values(newId(), 'Dell', 45000000, 'Texas', 'Hardware')
insert into practice.company
values
    (newId(), 'Tesla', 202022002, 'Texas', 'Car-Tech')
insert into practice.company
values(newId(), 'MRF', 1500000, 'Chennai', 'Tyres')
insert into practice.company
values(newId(), 'Hercules', 1700000, 'Bengaluru', 'Bicycles')
insert into practice.company
values(newId(), 'Reynolds', 2500000, 'Delhi', 'Pens')
insert into practice.company
values(newId(), 'Tommy Hilfiger', 1500000, 'New York', 'Apparel')
insert into practice.company
values(newId(), 'Apple', 60000000, 'California', 'Big Tech')

select *
from practice.company




create table practice.students
(
    Admn uniqueIdentifier,
    Name nvarchar(20),
    Age int,
    Contact bigint,

)
insert into practice.students
values
    (newId(), 'Sai Ram', 24, 9798979890)
insert into practice.students
values
    (newId(), 'Kiran', 23, 989099090)
insert into practice.students
values
    (newId(), 'Shiv Sai', 20, 8247057536)
insert into practice.students
values
    (newId(), 'Mahesh', 25, 910292992)
insert into practice.students
values
    (newId(), 'Raju', 30, 889188821)
insert into practice.students
values
    (newId(), 'Pavan', 24, 8292001202)
insert into practice.students
values
    (newId(), 'Bhanu', 21, 892716290)
insert into practice.students
values
    (newId(), 'Sandeep', 21, 787281028)
insert into practice.students
values
    (newId(), 'Charan', 22, 921128901)
insert into practice.students
values
    (newId(), 'Swami', 25, 8291029222)
insert into practice.students
values
    (newId(), 'JP', 22, 892810292)

select *
from practice.students


create table practice.sales
(
    productid Uniqueidentifier,
    quantity int,
    cost int

)
insert into practice.sales
values
    (newId(), 77, 100)
insert into practice.sales
values
    (newId(), 65, 890)
insert into practice.sales
values
    (newId(), 42, 70)
insert into practice.sales
values
    (newId(), 31, 800)
insert into practice.sales
values
    (newId(), 662, 700)
insert into practice.sales
values
    (newId(), 89, 251)
insert into practice.sales
values
    (newId(), 89, 1201)
insert into practice.sales
values
    (newId(), 66, 121)
insert into practice.sales
values
    (newId(), 82, 828)
insert into practice.sales
values
    (newId(), 77, 382)

select *
from practice.sales


create schema constraints

create table constraints.Student
(
    studentid uniqueidentifier,
    Name varchar(20) not null,
    Age int not null,
    Contact bigint not null,
    constraint Student_studentid_pk primary key (studentid)
)

create table constraints.Studentmarks
(
    scoreid uniqueidentifier primary key ,
    id uniqueidentifier,
    Maths int,
    Physics int,
    Chemistry int,
    constraint Studentmarks_id_fk foreign key (id) references constraints.Student(studentid)
)

insert into constraints.Student
values
    (newId(), 'Sai Ram', 24, 9798979890)

insert into constraints.Student
values
    (newId(), 'Kiran', 23, 989099090)
insert into constraints.Student
values
    (newId(), 'Shiv Sai', 20, 8247057536)
insert into constraints.Student
values
    (newId(), 'Mahesh', 25, 910292992)
insert into constraints.Student
values
    (newId(), 'Raju', 30, 889188821)
insert into constraints.Student
values
    (newId(), 'Pavan', 24, 8292001202)
insert into constraints.Student
values
    (newId(), 'Bhanu', 21, 892716290)
insert into constraints.Student
values
    (newId(), 'Sandeep', 21, 787281028)
insert into constraints.Student
values
    (newId(), 'Charan', 22, 921128901)
insert into constraints.Student
values
    (newId(), 'Swami', 25, 8291029222)
insert into constraints.Student
values
    (newId(), 'JP', 22, 892810292)

select *
from constraints.Student


insert into constraints.Studentmarks
values(newId(), '66a75274-e4e5-4b82-bda6-05dd29aaeb8a', 92, 90, 78)
insert into constraints.Studentmarks
values(newId(), '9c4c6646-9539-4c1c-b19d-0abed490d837', 78, 82, 88)
insert into constraints.Studentmarks
values(newId(), 'f5049af0-d66d-4aa7-b12e-214f1e41a47f', 76, 82, 99)
insert into constraints.Studentmarks
values(newId(), '7ca9d1c7-2539-4bdc-84ba-7a35b5564bb7', 76, 62, 99)
insert into constraints.Studentmarks
values(newId(), 'b2d1de20-9919-4a25-a9d1-8069e500f4cc', 82, 10, 2)
insert into constraints.Studentmarks
values(newId(), 'e22f58ac-a4fe-4ba6-a955-9232fa55ea65', 78, 86, 22)
insert into constraints.Studentmarks
values(newId(), 'ea77b3d3-7f5e-4274-b950-9c784587612d', 86, 88, 91)
insert into constraints.Studentmarks
values(newId(), '776a2fb7-7aa2-4a4e-94cb-be16568e3442', 56, 62, 10)
insert into constraints.Studentmarks
values(newId(), '08889eed-a859-4e6f-a8c5-ce4130598437', 78, 82, 78)
insert into constraints.Studentmarks
values(newId(), 'b0b16b5c-7999-491e-8be9-e15799aa7d05', 82, 100, 100)
insert into constraints.Studentmarks
values
    (newId(), 'fd5fca96-04aa-422a-9a70-ea7f94c2122d', 76, 67, 71)

select *
from constraints.Studentmarks

--Practice 02112022
select *
from practice.students
where Age>22
select *
from practice.cars
where topspeed>250
select *
from practice.sales
-- TOP N ROWS 
select top 4
    cost, quantity
from practice.sales
where cost>500
select top 7
    model, cost
from practice.cars
order by model
alter table practice.cars add year int;
update practice.cars set year = 2021 where Brand = 'Tesla'
update practice.cars set year = 2020 where Brand = 'Volvo'
update practice.cars set year = 2019 where Brand = 'Maruti'
update practice.cars set year = 2017 where Brand = 'Porsche'
update practice.cars set year = 2022 where Brand = 'Kia'
update practice.cars set year = 2002 where Brand = 'Ferrari'
update practice.cars set year = 2023 where Brand = 'Hyundai'
update practice.cars set year = 2020 where Brand = 'Alpine'
update practice.cars set year = 2019 where Brand = 'Renault'
update practice.cars set year = 2007 where Brand = 'Buggati'
select *
from practice.cars

select year, count(year)
from practice.cars
group by year
having count(year)>1
--Later subquery will be explained this is hardcoded
update practice.cars set cost+=5000000  where year>2000

--AS keyword alias
select brand, year, model, cost, cost-2000 as DiscountedPrice
from practice.cars

--concat
select * , brand+ ' ' + model as brandmodel
from practice.cars


--try =,!=,<,> 

select *
from practice.cars
where  brand>='Maruti'

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

--Ques.1. Write an SQL query to fetch the EmpId and FullName of all the employees working under Manager with id � �986�.
--Modification for my table where company RegId = 7EE24D81-BDC4-43BB-B24F-51D56DB07E86

--Solution
select Name, Location, Industry, Budget
from practice.company
where RegId='7EE24D81-BDC4-43BB-B24F-51D56DB07E86'


--Ques.2. Write an SQL query to fetch the different projects available from the EmployeeSalary table.
--Modification for my table I am checking for different or similar industries
--Solution
select distinct(Industry)
from practice.company


--Ques.3. Write an SQL query to fetch the count of employees working in project �P1�.
--Modification for my table I am checking for companies working in the big tech sector

select *
from practice.company
where Industry = 'Big Tech'

--Ques.4. Write an SQL query to find the maximum, minimum, and average salary of the employees.
--Modification for my table I am calculating average ,sum , max , min related to salaries
select max(budget) as Maximum, min(budget) as Minimum, avg(budget) as average
from practice.company

--Ques.5. Write an SQL query to find the employee id whose salary lies in the range of 9000 and 15000.
--Modification for my table I am calculating budget ranges between 45000000 and 150000000
--Method 1
select *
from practice.company
where budget>=45000000 and budget<=150000000
order by budget
--Method 2
select *
from practice.company
where budget between 45000000 and 150000000


--Ques.6. Write an SQL query to fetch those employees who live in Toronto and work under manager with ManagerId � 321.
--Modification I am making sure location is california and  industry is big tech
select *
from practice.company
where location = 'California' and Industry = 'Big Tech'


--Question.7 Write an SQL query to fetch all the employees who either live in California or work under a manager with ManagerId � 321.
select *
from practice.company
where location = 'California' OR Industry = 'Big Tech'

--Question.8  Write an SQL query to fetch all those employees who work on Project other than P1.
--Modification I am querying for locations other than California
select *
from practice.company
where location != 'California'
--Ques.9. Write an SQL query to display the total salary of each employee adding the Salary with Variable value.
--Modification I am concat'ing two columns 
select *, Name + Industry as Concat
from practice.company
--Ques10. Write an SQL query to fetch the employees whose name begins with any two characters, followed by a text �hn� and ending with any sequence of characters.

select *
from practice.company
where Name like '_pp%'
--One underscore for one letter 




--Ques.11 Write an SQL query to fetch all the EmpIds which are present in either of the tables � �EmployeeDetails� and �EmployeeSalary�.
--I am using joins.Students and joins.Student details
    select Id
    from joins.Students
union
    select studentid
    from joins.StudentDetails

--Ques.12 Write an SQL query to fetch common records between two tables.
    select *
    from joins.StudentDetails
intersect
    select *
    from joins.Students
--Does not work with my tables

--Ques.13. Write an SQL query to fetch records that are present in one table but not in another table.
select *
from joins.StudentDetails minus
select *
from joins.Students
--Q14 and Q15 Subquery

--Ques.16. Write an SQL query to fetch the employee full names and replace the space with �-�.
--Modification replace comany industry
select Replace(Industry,' ','-')
from practice.company

--Ques.17. Write an SQL query to fetch the position of a given character(s) in a field.Did not get

--Ques.18. Write an SQL query to display both the EmpId and ManagerId together.

--Modification  I am concat'ing two columns 
select *, Name + Industry as Concat
from practice.company
--Q19.Write a query to fetch only the first name(string before space) from the FullName column of the EmployeeDetails table.
-- I am using it after the ID as it includes 'A'
select substring(Id,2,len(ID)) as ID
from joins.Students

--Ques.20. Write an SQL query to upper case the name of the employee and lower case the city values.
--Modification upper casing name lower caisng industry
select upper(Name)as Name, lower(Industry) as Industry
from practice.company
--Q21 
select name, len(name)-len(replace(name,'a','')) as  [number of a's]
from joins.Students
--Q22
update joins.Students set name=ltrim(rtrim(name))
select *
from joins.Students
--Q23 Fetch all the employees who are not working on any project.
select *
from joins.Students A LEFT join joins.StudentDetails B ON A.id = B.StudentId
where B.Id is Null
--Ques.24. Write an SQL query to fetch employee names having a budget greater than or equal to 9000000  and less than or equal to 9000000.
select name
from practice.company
where Budget>=9000000 and Budget<=150000000

--Question.25 Write an SQL query to find the current date-time.
SELECT getdate() as [Date and Time]
--Ques.26. Write an SQL query to fetch all the Employees details from EmployeeDetails table who joined in the Year 2020.
select *
from practice.cars
where year = 2020
--Ques.27. Write an SQL query to fetch all employee records from EmployeeDetails table who have a salary record in EmployeeSalary table.
select *
from joins.Students as A INNER join joins.StudentDetails as B on A.Id=B.StudentId
--Ques.28. Write an SQL query to fetch project-wise count of employees sorted by project�s count in descending order.
select year, count(*) as count
from practice.cars
group by Year
order by count desc
select *
from practice.cars
--Ques.29. Write a query to fetch employee names and salary records. Display the employee details even if the salary record is not present for the employee.
select *
from joins.Students A right join joins.StudentDetails B on A.Id=B.StudentId
--Ques.30. Write an SQL query to join 3 tables.
select *
from joins.Students A inner join joins.StudentDetails B on A.Id=B.StudentId inner join PRACTICE.students as C on B.age=C.age

select *
from practice.students
--Ques.32.Write an SQL query to fetch duplicate records from EmployeeDetails (without considering the primary key � EmpId).
select *
from practice.cars
select count(year) as Count
from practice.cars
group by year
having count(*)>1

--Ques.34. Write an SQL query to fetch only odd rows from the table.
--Did not get solution as my table does not have a num based ID
--Ques.36. Write an SQL query to create a new table with data and structure copied from another table.

SELECT *
INTO practice.companycopy1
FROM practice.company
--cloning of a table

SELECT *
from practice.companycopy1
--Ques.37. Write an SQL query to create an empty table with the same structure as some other table.

select *
into practice.companycopy2
from practice.company
where 1=0
select *
from practice.companycopy2


--Ques.38. Write an SQL query to fetch top n records?
select top 5
    *
from practice.company

--Ques.39. Write an SQL query to find the nth highest salary from table.
select top 1
    *
from practice.company
order by budget desc

--Ques.40. Write SQL query to find the 3rd highest salary from a table without using the TOP/limit keyword.
--Do not know how to do this


-- Testing group by select Location,RegId,Industry,Name from practice.company group by industry,Name,RegId,Location 
select Industry
from practice.company
select distinct Industry
from practice.company
select distinct *
FROM practice.company
--04112022
--clauses and operators continued
select *
from practice.cars
where topspeed=320 or topspeed=245


--IN IS FOR  MULTIPLE CONDITIONS
SELECT *
FROM practice.CARS
WHERE TOPSPEED IN(140,240,200,420,332)
SELECT *
FROM practice.cars
where Model In ('918','Alto') or Color In('Midnight Black','Pearl White')
--Between 
Select *
from practice.cars
where topspeed between 320 and 500
order by topspeed desc


select *
from practice.cars
where brand not in ('Ferrari','Kia','Maruti')
Order by Topspeed desc

--Like Operator
select *
from practice.cars
where Color  like ('S%')
-- STARTS WITH S
select *
from practice.cars
where Color  like ('%E')
-- ENDS WITH E
select *
from practice.cars
where Color like('%B%')
-- SHould have B

--05112022 practice
--Inner Join syntax

select Name, Maths, Physics, Chemistry
from constraints.Student as A inner JOIN
    constraints.Studentmarks as B On A.studentid= B.id


select *
from constraints.Studentmarks, constraints.Student




create schema joins
 create table joins.Students
(
    Id nvarchar(100),
    Name nvarchar(100),
    Class nvarchar(100),
    Contact nvarchar(100),
    Email nvarchar(100),
    Location Nvarchar(100)
)
Insert into joins.Students
Values
    ('A101', 'Shiv', '10', '8247057536', 'shivindrakanti@gmail.com', 'Hyderabad'),
    ('A102', 'Swami', '10', '9909099098', 'Swami@gmail.com', 'Hyderabad'),
    ('A103', 'Satish', '9', '8765321992', 'Satish@gmail.com', 'Ongole'),
    ('A104', 'Ram', '8', '8765321992', 'Ram@gmail.com', 'Nellore'),
    ('A105', 'Pavan', '8', '2782992802', 'Pavan@gmail.com', 'Nellore'),
    ('A106', 'Cal', '10', '782982981', 'Cal@gmail', 'Ongole')

select *
from joins.Students

create table joins.StudentDetails
(
    Id nvarchar(100),
    StudentId nvarchar(100),
    Subject nvarchar(100),
    AGE INT,
    Hobbies nvarchar(20),
)
insert into joins.StudentDetails
values
    ('SD101', 'A101', 'Maths', 20, 'Football'),
    ('SD102', 'A101', 'Physics', 20, 'Cricket'),
    ('SD103', 'A103', 'Philosophy', 24, 'Cricket'),
    ('SD104', 'A104', 'SQL', 22, 'Music'),
    ('SD105', 'A104', 'SQL', 22, 'Comp porgramming'),
    ('SD106', 'A107', 'SQL', 23, 'Music')

select *
from joins.StudentDetails
--14 15 31 35 left































































