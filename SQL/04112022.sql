--04112022
--clauses and operators continued
select * from practice.cars where topspeed=320 or topspeed=245


--IN IS FOR  MULTIPLE CONDITIONS
SELECT * FROM practice.CARS WHERE TOPSPEED IN(140,240,200,420,332)
SELECT * FROM practice.cars where Model In ('918','Alto') or Color In('Midnight Black','Pearl White') 
--Between 
Select * from practice.cars where topspeed between 320 and 500 order by topspeed desc


select * from practice.cars where brand not in ('Ferrari','Kia','Maruti') Order by Topspeed desc

--Like Operator
select * from practice.cars where Color  like ('S%') -- STARTS WITH S
select * from practice.cars where Color  like ('%E') -- ENDS WITH E
select * from practice.cars where Color like('%B%') -- SHould have B