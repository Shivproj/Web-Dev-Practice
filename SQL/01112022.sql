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



create table practice.company (
RegId Uniqueidentifier,
Name varchar(20),
Budget bigint,
Location  varchar(20),
Industry varchar(20)

)

insert into practice.company values(newId(),'Meta',9000000,'California','Big Tech')
insert into practice.company values(newId(),'Microsoft',9000000,'Seattle','Big Tech')
insert into practice.company values (newId(),'Amazon',150000000,'Hyderabad','E-Commerce')
insert into practice.company values(newId(),'Dell',45000000,'Texas','Hardware')
insert into practice.company values (newId(),'Tesla',202022002,'Texas','Car-Tech')
insert into practice.company values(newId(),'MRF',1500000,'Chennai','Tyres')
insert into practice.company values(newId(),'Hercules',1700000,'Bengaluru','Bicycles')
insert into practice.company values(newId(),'Reynolds',2500000,'Delhi','Pens')
insert into practice.company values(newId(),'Tommy Hilfiger',1500000,'New York','Apparel')
insert into practice.company values(newId(),'Apple',60000000,'California','Big Tech')

select * from practice.company




create table practice.students (
Admn uniqueIdentifier,
Name nvarchar(20),
Age int,
Contact bigint,

)
insert into practice.students values (newId(),'Sai Ram',24,9798979890)
insert into practice.students values (newId(),'Kiran',23,989099090)
insert into practice.students values (newId(),'Shiv Sai',20,8247057536)
insert into practice.students values (newId(),'Mahesh',25,910292992)
insert into practice.students values (newId(),'Raju',30,889188821)
insert into practice.students values (newId(),'Pavan',24,8292001202)
insert into practice.students values (newId(),'Bhanu',21,892716290)
insert into practice.students values (newId(),'Sandeep',21,787281028)
insert into practice.students values (newId(),'Charan',22,921128901)
insert into practice.students values (newId(),'Swami',25,8291029222)
insert into practice.students values (newId(),'JP',22,892810292)

select * from practice.students


create table practice.sales(
productid Uniqueidentifier,
quantity int,
cost int

)
insert into practice.sales values (newId(),77,100)
insert into practice.sales values (newId(),65,890)
insert into practice.sales values (newId(),42,70)
insert into practice.sales values (newId(),31,800)
insert into practice.sales values (newId(),662,700)
insert into practice.sales values (newId(),89,251)
insert into practice.sales values (newId(),89,1201)
insert into practice.sales values (newId(),66,121)
insert into practice.sales values (newId(),82,828)
insert into practice.sales values (newId(),77,382)

select * from practice.sales


create schema constraints

create table constraints.Student(
studentid uniqueidentifier,
Name varchar(20) not null,
Age int not null,
Contact bigint not null,
constraint Student_studentid_pk primary key (studentid)
)

create table constraints.Studentmarks(
scoreid uniqueidentifier primary key ,
id uniqueidentifier, 
Maths int,
Physics int,
Chemistry int,
constraint Studentmarks_id_fk foreign key (id) references constraints.Student(studentid)
)

insert into constraints.Student values (newId(),'Sai Ram',24,9798979890)

insert into constraints.Student values (newId(),'Kiran',23,989099090)
insert into constraints.Student values (newId(),'Shiv Sai',20,8247057536)
insert into constraints.Student values (newId(),'Mahesh',25,910292992)
insert into constraints.Student values (newId(),'Raju',30,889188821)
insert into constraints.Student values (newId(),'Pavan',24,8292001202)
insert into constraints.Student values (newId(),'Bhanu',21,892716290)
insert into constraints.Student values (newId(),'Sandeep',21,787281028)
insert into constraints.Student values (newId(),'Charan',22,921128901)
insert into constraints.Student values (newId(),'Swami',25,8291029222)
insert into constraints.Student values (newId(),'JP',22,892810292)

select * from constraints.Student


insert into constraints.Studentmarks values(newId(),'66a75274-e4e5-4b82-bda6-05dd29aaeb8a',92,90,78)
insert into constraints.Studentmarks values(newId(),'9c4c6646-9539-4c1c-b19d-0abed490d837',78,82,88)
insert into constraints.Studentmarks values(newId(),'f5049af0-d66d-4aa7-b12e-214f1e41a47f',76,82,99)
insert into constraints.Studentmarks values(newId(),'7ca9d1c7-2539-4bdc-84ba-7a35b5564bb7',76,62,99)
insert into constraints.Studentmarks values(newId(),'b2d1de20-9919-4a25-a9d1-8069e500f4cc',82,10,2)
insert into constraints.Studentmarks values(newId(),'e22f58ac-a4fe-4ba6-a955-9232fa55ea65',78,86,22)
insert into constraints.Studentmarks values(newId(),'ea77b3d3-7f5e-4274-b950-9c784587612d',86,88,91)
insert into constraints.Studentmarks values(newId(),'776a2fb7-7aa2-4a4e-94cb-be16568e3442',56,62,10)
insert into constraints.Studentmarks values(newId(),'08889eed-a859-4e6f-a8c5-ce4130598437',78,82,78)
insert into constraints.Studentmarks values(newId(),'b0b16b5c-7999-491e-8be9-e15799aa7d05',82,100,100)
insert into constraints.Studentmarks values (newId(),'fd5fca96-04aa-422a-9a70-ea7f94c2122d',76,67,71)

select * from constraints.Studentmarks





