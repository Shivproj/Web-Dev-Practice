
create table Supplier (Id int,CompanyName varchar(50),[ContactName] varchar(50),[City] varchar(50),[Country] varchar(50),[Phone] varchar(50),[Fax] varchar(50))
INSERT INTO [Supplier] ([Id],[CompanyName],[ContactName],[City],[Country],[Phone],[Fax])VALUES(1,'Exotic Liquids','Charlotte Cooper','London','UK','(171) 555-2222',NULL)
INSERT INTO [Supplier] ([Id],[CompanyName],[ContactName],[City],[Country],[Phone],[Fax])VALUES(2,'New Orleans Cajun Delights','Shelley Burke','New Orleans','USA','(100) 555-4822',NULL)
INSERT INTO [Supplier] ([Id],[CompanyName],[ContactName],[City],[Country],[Phone],[Fax])VALUES(3,'Grandma Kelly''s Homestead','Regina Murphy','Ann Arbor','USA','(313) 555-5735','(313) 555-3349')
INSERT INTO [Supplier] ([Id],[CompanyName],[ContactName],[City],[Country],[Phone],[Fax])VALUES(4,'Tokyo Traders','Yoshi Nagase','Tokyo','Japan','(03) 3555-5011',NULL)
INSERT INTO [Supplier] ([Id],[CompanyName],[ContactName],[City],[Country],[Phone],[Fax])VALUES(5,'Cooperativa de Quesos ''Las Cabras''','Antonio del Valle Saavedra','Oviedo','Spain','(98) 598 76 54',NULL)
INSERT INTO [Supplier] ([Id],[CompanyName],[ContactName],[City],[Country],[Phone],[Fax])VALUES(6,'Mayumi''s','Mayumi Ohno','Osaka','Japan','(06) 431-7877',NULL)
INSERT INTO [Supplier] ([Id],[CompanyName],[ContactName],[City],[Country],[Phone],[Fax])VALUES(7,'Pavlova, Ltd.','Ian Devling','Melbourne','Australia','(03) 444-2343','(03) 444-6588')
INSERT INTO [Supplier] ([Id],[CompanyName],[ContactName],[City],[Country],[Phone],[Fax])VALUES(8,'Specialty Biscuits, Ltd.','Peter Wilson','Manchester','UK','(161) 555-4448',NULL)
INSERT INTO [Supplier] ([Id],[CompanyName],[ContactName],[City],[Country],[Phone],[Fax])VALUES(9,'PB Knäckebröd AB','Lars Peterson','Göteborg','Sweden','031-987 65 43','031-987 65 91')
INSERT INTO [Supplier] ([Id],[CompanyName],[ContactName],[City],[Country],[Phone],[Fax])VALUES(10,'Refrescos Americanas LTDA','Carlos Diaz','Sao Paulo','Brazil','(11) 555 4640',NULL)
INSERT INTO [Supplier] ([Id],[CompanyName],[ContactName],[City],[Country],[Phone],[Fax])VALUES(11,'Heli Süßwaren GmbH & Co. KG','Petra Winkler','Berlin','Germany','(010) 9984510',NULL)
INSERT INTO [Supplier] ([Id],[CompanyName],[ContactName],[City],[Country],[Phone],[Fax])VALUES(12,'Plutzer Lebensmittelgroßmärkte AG','Martin Bein','Frankfurt','Germany','(069) 992755',NULL)
INSERT INTO [Supplier] ([Id],[CompanyName],[ContactName],[City],[Country],[Phone],[Fax])VALUES(13,'Nord-Ost-Fisch Handelsgesellschaft mbH','Sven Petersen','Cuxhaven','Germany','(04721) 8713','(04721) 8714')
INSERT INTO [Supplier] ([Id],[CompanyName],[ContactName],[City],[Country],[Phone],[Fax])VALUES(14,'Formaggi Fortini s.r.l.','Elio Rossi','Ravenna','Italy','(0544) 60323','(0544) 60603')
INSERT INTO [Supplier] ([Id],[CompanyName],[ContactName],[City],[Country],[Phone],[Fax])VALUES(15,'Norske Meierier','Beate Vileid','Sandvika','Norway','(0)2-953010',NULL)
INSERT INTO [Supplier] ([Id],[CompanyName],[ContactName],[City],[Country],[Phone],[Fax])VALUES(16,'Bigfoot Breweries','Cheryl Saylor','Bend','USA','(503) 555-9931',NULL)
INSERT INTO [Supplier] ([Id],[CompanyName],[ContactName],[City],[Country],[Phone],[Fax])VALUES(17,'Svensk Sjöföda AB','Michael Björn','Stockholm','Sweden','08-123 45 67',NULL)
INSERT INTO [Supplier] ([Id],[CompanyName],[ContactName],[City],[Country],[Phone],[Fax])VALUES(18,'Aux joyeux ecclésiastiques','Guylène Nodier','Paris','France','(1) 03.83.00.68','(1) 03.83.00.62')
INSERT INTO [Supplier] ([Id],[CompanyName],[ContactName],[City],[Country],[Phone],[Fax])VALUES(19,'New England Seafood Cannery','Robb Merchant','Boston','USA','(617) 555-3267','(617) 555-3389')
INSERT INTO [Supplier] ([Id],[CompanyName],[ContactName],[City],[Country],[Phone],[Fax])VALUES(20,'Leka Trading','Chandra Leka','Singapore','Singapore','555-8787',NULL)
INSERT INTO [Supplier] ([Id],[CompanyName],[ContactName],[City],[Country],[Phone],[Fax])VALUES(21,'Lyngbysild','Niels Petersen','Lyngby','Denmark','43844108','43844115')
INSERT INTO [Supplier] ([Id],[CompanyName],[ContactName],[City],[Country],[Phone],[Fax])VALUES(22,'Zaanse Snoepfabriek','Dirk Luchte','Zaandam','Netherlands','(12345) 1212','(12345) 1210')
INSERT INTO [Supplier] ([Id],[CompanyName],[ContactName],[City],[Country],[Phone],[Fax])VALUES(23,'Karkki Oy','Anne Heikkonen','Lappeenranta','Finland','(953) 10956',NULL)
INSERT INTO [Supplier] ([Id],[CompanyName],[ContactName],[City],[Country],[Phone],[Fax])VALUES(24,'G''day, Mate','Wendy Mackenzie','Sydney','Australia','(02) 555-5914','(02) 555-4873')
INSERT INTO [Supplier] ([Id],[CompanyName],[ContactName],[City],[Country],[Phone],[Fax])VALUES(25,'Ma Maison','Jean-Guy Lauzon','Montréal','Canada','(514) 555-9022',NULL)
INSERT INTO [Supplier] ([Id],[CompanyName],[ContactName],[City],[Country],[Phone],[Fax])VALUES(26,'Pasta Buttini s.r.l.','Giovanni Giudici','Salerno','Italy','(089) 6547665','(089) 6547667')
INSERT INTO [Supplier] ([Id],[CompanyName],[ContactName],[City],[Country],[Phone],[Fax])VALUES(27,'Escargots Nouveaux','Marie Delamare','Montceau','France','85.57.00.07',NULL)
INSERT INTO [Supplier] ([Id],[CompanyName],[ContactName],[City],[Country],[Phone],[Fax])VALUES(28,'Gai pâturage','Eliane Noz','Annecy','France','38.76.98.06','38.76.98.58')
INSERT INTO [Supplier] ([Id],[CompanyName],[ContactName],[City],[Country],[Phone],[Fax])VALUES(29,'Forêts d''érables','Chantal Goulet','Ste-Hyacinthe','Canada','(514) 555-2955','(514) 555-2921')


select Id,ContactName from supplier where ID>10
SELECT SUM(Id) AS 'pRODUCT COUNT' FROM Supplier


declare @Res as int
declare @Cnt int
select @Cnt = count(id) from Supplier
select @Res = SUM(Id) FROM SUPPLIER
PRINT @Res/@Cnt
PRINT @Res
print @Cnt
