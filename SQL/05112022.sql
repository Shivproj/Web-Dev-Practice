--05112022 practice
--Inner Join syntax

select Name,Maths,Physics,Chemistry
 from constraints.Student as A inner JOIN
 constraints.Studentmarks as B On A.studentid= B.id
 

 select * from constraints.Studentmarks,constraints.Student




 create schema joins
 create table joins.Students 
 (Id nvarchar(100),
 Name nvarchar(100),
 Class nvarchar(100),
 Contact nvarchar(100),
 Email nvarchar(100),
 Location Nvarchar(100)
 )
 Insert into joins.Students Values
 ('A101','Shiv','10','8247057536','shivindrakanti@gmail.com','Hyderabad'),
 ('A102','Swami','10','9909099098','Swami@gmail.com','Hyderabad'),
 ('A103','Satish','9','8765321992','Satish@gmail.com','Ongole'),
  ('A104','Ram','8','8765321992','Ram@gmail.com','Nellore'),
  ('A105','Pavan','8','2782992802','Pavan@gmail.com','Nellore'),
  ('A106','Cal','10','782982981','Cal@gmail','Ongole')

select * from joins.Students

create table joins.StudentDetails
(Id nvarchar(100),
StudentId nvarchar(100),
Subject nvarchar(100),
AGE INT,
Hobbies nvarchar(20),
)
insert into joins.StudentDetails
values ('SD101','A101','Maths',20,'Football'),
('SD102','A101','Physics',20,'Cricket'),
('SD103','A103','Philosophy',24,'Cricket'),
('SD104','A104','SQL',22,'Music'),
('SD105','A104','SQL',22,'Comp porgramming'),
('SD106','A107','SQL',23,'Music')

select * from joins.StudentDetails












