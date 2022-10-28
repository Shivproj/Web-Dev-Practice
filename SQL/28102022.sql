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

--Practice 



