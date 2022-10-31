--Primary and Foreign key
create table developers(
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

select * from dbo.developerDetails
select * from dbo.developers


--inserting data


insert into dbo.developers Values 
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
select * from dbo.developers

--it wont let me drop the table 


drop table developers
drop table developerDetails
-- Note we first have to drop table with fk then drop the one with pk



--Practice 

create schema Students

create table Students.details(
id UNIQUEIDENTIFIER,
Name nvarchar(20),
Contact bigint, 
constraint pk_studentdetails Primary Key  (id)
)

create table Students.marks(
id uniqueidentifier,
Maths int,
Physics int,
Chemistry int,
Social int,
English int
constraint fk_studentdetails_id foreign key (id) references Students.details(id)

)



select * from Students.details
Select * from Students.marks

--Inserting values into these tables


insert into Students.details values 
(newId(),'Shiv Sai',8247057536)
insert into Students.details values 
(newId(),'Swami',9618729667),
(newId(),'K Sai Ram',9985246354),
(newId(),'Pavan',9985246354)


insert into Students.marks values

('3FB187EA-459D-41F6-8AE3-22FB84E420B3',99,98,97,98,99),
('BEE682CB-FA97-4F2B-B7E7-7E3292610466',88,85,80,81,82),
('2FAD52AD-2E6A-45BF-AA3D-B9B12881019B',66,69,70,72,74),
('2D01C028-170B-4AED-AFC1-EF4162941F8F',91,82,87,86,82)


truncate table Students.details
-- Note parent table cant be deleted or dropped while it has fk constraints


delete from Students.details where Name='Shiv Sai'

update Students.details set Name='Shivs' where Name ='Shiv Sai'
update Students.details set id='39CDD413-5A3F-429E-B735-3CC63ACE43F1' where id ='3FB187EA-459D-41F6-8AE3-22FB84E420B3'
update Students.details set id=NEWiD() where id ='3FB187EA-459D-41F6-8AE3-22FB84E420B3'
update Students.marks set id='39CDD413-5A3F-429E-B735-3CC63ACE43F1' where id ='3FB187EA-459D-41F6-8AE3-22FB84E420B3'





alter table Students.details add  email  nvarchar(20) 
select * from Students.details
select * from Students.marks



alter table Students.marks drop constraint fk_studentdetails_id
alter table Students.marks add constraint fk_studentdetails_id foreign key (id) references Students.details(id)

  sp_rename 'dbo.developers.Role', 'ROLE';

  sp_rename 'dbo.developers', 'DEVELOPERS';







