--Practice 27102022
--Table 1 - Cars
create table cars(
VIN  uniqueIdentifier,
Brand varchar(20),
Model nvarchar(20),
)

insert into cars (VIN,Brand,Model) 
values 
(newId(),'Buggati','Veyron'),
(newId(),'Ferrari','458'),
(newId(),'Mercedes','E420'),
(newId(),'Ferrari','458 Pista'),
(newId(),'Aston Martin','Valk')

select * from cars

select VIN  from cars where Brand = 'Ferrari'

-- Table2 
-- Items and expiry date and price

create table goods (
name varchar(50),
price int,
expiry1 date,
expiry2 datetime,
expiry3 datetime2,
)

insert into  goods (name,price,expiry1,expiry2,expiry3) values  ('Milk',175,'2022-10-27','2022-10-27 23:20:15','2022-10-27 23:20:15.878' )

select * from goods

insert into  goods (name,price,expiry1,expiry2,expiry3) values  ('Potato',175,GETDATE(),'2022-10-29 23:20:15','2022-10-29 23:20:15.878' )
select * from goods


-- Table 3 // I am using the rest of the datatypes here and deleteing and dropping this table.


create table dummy(
name varchar(20),
age int,
contact bigint,
salary float,
currency money,
weight decimal,
)




insert into dummy (name,age,contact,salary,currency,weight) values ('Shiv Sai',20,8247057536,75000000.50,78.22,80.10),('Shiv Sai',20,8247057536,75000000.50,78.22,80.10),('Sai',30,8247057536,75000000.50,78.12,81.10)

select * from dummy

delete  from dummy

drop table dummy


-- Table number 4 to explore GETDATE() method
create table dates (
day varchar(20),
type1 date,type2 datetime,type3 datetime2)

insert into dates values ('Monday',GETDATE(),GETDATE(),GETDATE())
insert into dates values ('Tuesday',GETDATE(),GETDATE(),GETDATE())
insert into dates values ('Wednesday',GETDATE(),GETDATE(),GETDATE())
 
select * from dates

truncate table dates 
-- use truncate to delete












