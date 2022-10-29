--Why one column's data we musn't delete ask during constraints


--Constraints
--1)Not Null
--Table 1
create table bikes
(
ID nvarchar(20) unique ,
Company varchar(100) not null,
[Model Name] varchar(100),
Price decimal(20,5)

)
select * from bikes
delete from bikes where [Model Name]  ='tiger'
alter table bikes drop constraint UQ__bikes__3214EC260F89437F
alter table bikes alter column ID  nvarchar(20)  Not NUll
select * from bikes
insert into bikes (ID,company,[model name],price)values ('b103','Ducati','diavel',721022),
('b104','Beneli','Speed',920022)


insert into bikes(Company,[Model Name],Price) values('Suzuki','SuperSport',1000000)

alter table bikes alter column ID  nvarchar(20)
alter table bikes add constraint chk Check(price>1000)
alter table bikes add constraint unq unique(price) 

 
create table trains (
id nvarchar(100)  constraint trnnum check(LEN(id)<7),
price int  not null,
[from to] varchar(80) unique

)

insert into trains (id,price,[from to]) values ('12345678',99890,'Hyd-Blr')
insert into trains (id,price,[from to]) values ('12345',91290,'Hyd-Blr')
select * from trains


create table  flipkart
(
id nvarchar(100) primary key not null ,
quantity int constraint def default 1

)

insert into flipkart (id) values ('Mouse')
insert into flipkart  (id) values ('Keyboard')
insert into flipkart  (id) values ('Heli')
insert into flipkart (id)  values ('RC car')
insert into flipkart (id,quantity)values ('Pillow',3)

select * from flipkart

select * from flipkart order by quantity DESC


create table 




