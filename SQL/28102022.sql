update cars Set brand='Aston Martin Racing',model='Vantage' where VIN='1E327FE1-4056-49C8-A3A6-E1D6F1FBAF23'

select * from cars
insert into cars values (newId(),'Jaguar','F-Pace')

alter table cars add topspeed int

SELECT * FROM CARS WHERE BRAND ='MCLAREN'

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

select Brand,Model,TOpspeed from cars where topspeed >300.0000


alter table cars alter column TOPSPEED decimal(20,4)

select * from cars

--Practice  for 28102022
drop table students
create table students(
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
select * from students

insert into students(FirstName, LastName, Age, Contact, email,address,height,entry_time) 
values
('Shiv Sai','Indrakanti',20,8247057536,'shivindrakanti@gmail.com','S.R.Nagar',172.2,getDate())

alter table students add salary bigint 

update students set salary = 5500000 where height =  172.2

alter table students drop column weight

alter table students alter column salary decimal(10,3)

--Creating a new schema


create schema student

create table student.std1 (
Name varchar(50),
Age int
)

create table student.std2(
Name varchar(50),
Age int
)


select * from student.std1
select * from student.std2
insert into student.std1 (Name,Age) values ('Shiv Sai',20)
insert into student.std2 (Name,Age) values ('Sai Sai',21)















