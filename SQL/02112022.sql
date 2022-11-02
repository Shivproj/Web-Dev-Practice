select * from practice.students where Age>22
select * from practice.cars where topspeed>250
select * from practice.sales
-- TOP N ROWS 
select top 4 cost,quantity from practice.sales where cost>500
select top 7 model,cost  from practice.cars order by model 
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
select * from practice.cars

select year,count(year) from practice.cars group by year having count(year)>1
--Later subquery will be explained this is hardcoded
update practice.cars set cost+=5000000  where year>2000

--AS keyword alias
select brand,year,model,cost,cost-2000 as DiscountedPrice from practice.cars

--concat
select * ,brand+ ' ' + model as brandmodel  from  practice.cars


--try =,!=,<,> 

select * from practice.cars where  brand>='Maruti'


