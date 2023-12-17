create database Groceryhub;

use Groceryhub;

create table Registration(username varchar(40),password varchar(40),repassword varchar(40),
usertype varchar(40)); 

Create table CustomerOrders
(
OrderId integer,
userName varchar(40),
orderName varchar(40),
orderPrice double,
userAddress varchar(40),
creditCardNo varchar(40),
deliveryMethod varchar(255),
storeLocation varchar(255),
orderDate date,
Primary key(OrderId,userName,orderName)
);

INSERT INTO CustomerOrders (OrderId, userName, orderName, orderPrice, userAddress, creditCardNo, deliveryMethod, storeLocation, orderDate)
VALUES
('28849278', 'laptop1', 'Guava', '1.99', '500 E 33rd St', '12345678', 'homeDelivery', '', '2023-11-03'),
('43215660', 'mgr4', 'AKASH ITS ME', '120', 'Opposite SSP motors', '1234566', 'homeDelivery', '', '2023-11-28'),
('51862605', 'mgr4', 'Apple', '1.99', '1720 S Michigan Ave Apt 2305', '1234566', 'inStorePickup', 'Jewel Osco', '2023-11-28'),
('54478791', 'laptop', 'Watermalon', '4.99', 'Opposite SSP motors', '1234566', 'homeDelivery', '', '2023-11-11'),
('62699566', 'laptop', 'test', '234', '1720 S Michigan Ave Apt 2305', '0000', 'inStorePickup', 'Siri', '2023-11-13');


select * from CustomerOrders;



Create table Productdetails
(
ProductType varchar(20),
Id varchar(20),
productName varchar(40),
productPrice double,
productImage varchar(40),
productManufacturer varchar(40),
productCondition varchar(40),
productDiscount double,
productDescription varchar(255),
inventory int,
Primary key(Id)
);

ALTER TABLE ProductDetails MODIFY Id INTEGER NOT NULL AUTO_INCREMENT;

INSERT INTO ProductDetails (ProductType, productName, productPrice, productImage, productManufacturer, productCondition, productDiscount, productDescription, inventory)
VALUES
('veg','Cabbage',4.99,'cabbage.jpeg','Delmont','New',1.49,'3.99 if you buy 2 cabbage',11),
('veg','Tomato',2.99,'tomato.jpeg','Delmont','Old',1,'2.49 per if buy 3 begs',35),
('veg','Onion',3.99,'onion.jpeg','Adani','Old',1.8,'2.29 if you buy 4 count ',50),
('veg','Green Papper',9.99,'GP.jpeg','Ambani','New',3.49,'Fresh Green papper in Chicago',45),
('veg','Spenich',2.99,'spinich.jpeg','Delmont','Old',1.34,'Buy 3 and Get 1 free',55),
('beverages','CocaCola',2.99,'coca.jpeg','Coke','New',1.49,'3.99 if you buy 2 cabbage',55),
('beverages','Pepsi',2.99,'pepsi.jpeg','Pepsi','Old',1,'2.49 per if buy 3 begs',65),
('beverages','Monster',2.99,'monster.jpeg','Coke','New',2.29,'2.29 if you buy 4 count ',40),
('beverages','Diet Coke',2.99,'dc.jpeg','Coke','Old',3.49,'Diet cocke contains zero sugar',40),
('beverages','Sprit',2.99,'sprite.jpeg','Pepsi','New',1.34,'Buy 3 and Get 1 free',50),
('household','Tide',1.99,'tide.jpeg','Tide','New',1.49,'3.99 if you buy 2 cabbage',40),
('household','Lyzol Wipes',2.99,'wipes.jpeg','lyzol','New',1,'2.49 per if buy 3 begs',40),
('household','Handwash',4.99,'handwash.jpeg','Tide','old',2.29,'2.29 if you buy 4 count ',40),
('household','Shampoo',4.99,'handwash.jpeg','ITC','old',1.34,'Buy 3 and Get 1 free',50),
('dairy','ButterMilk',3.99,'buttermilk.jpeg','Amul','old',1.34,'Buy 3 and Get 1 free',50),
('pc','Nivea Cream',4.99,'nivea.jpeg','Nivea','New',1.49,'3.99 if you buy 2 Count',60),
('snacks','Doritos_cool_ranch',3.99,'doritos_cool.jpeg','Doritos','New',1,'3.99 / 4count',50),
('fruit','Pineapple',3.99,'pineapple.jpeg','Akash','New',0,'Fresh Juicy Pineapple',25),
('fruit','Apple',1.99,'apple.jpeg','Akash','New',0,'New Generation Smart Doorlock',25),
('fruit','Guava',1.99,'guava.webp','Akash','New',0,'Fresh Guava with discounted',25),
('fruit','Banana',4.99,'banana.jpeg','Akash','New',0,'New Generation Smart Doorlock',25),
('fruit','Watermalon',4.99,'watermelon.jpeg','Akash','New',0,'4.99 / kg',25);


INSERT INTO ProductDetails (ProductType, productName, productPrice, productImage, productDiscount, productDescription, inventory)
VALUES
('pc', 'Bath & body', 2.99, 'b&b.jpeg', 0, '4.99 /2 count', 25),
('pc', 'colgate', 1.99, 'colgate.png', 0, '4.99 / count', 40),
('pc', 'veseline', 3.99, 'veseline.jpeg', 0, '3.99 / count', 30),
('pc', 'Nivea Facewash', 3.99, 'facewash.jpeg', 0, '2.99 /2 count', 20);


INSERT INTO ProductDetails (ProductType, productName, productPrice, productImage, productDiscount, productDescription, inventory)
VALUES
('dairy', 'Chedder_Chees', 4.99, 'cheese.jpeg', 0, '4.99 / count', 50),
('dairy', 'Milk', 2.99, 'milk.jpeg', 0, '4.99 /2 count', 75),
('dairy', 'Yogart', 1.99, 'yogurt.jpeg', 0, '4.99 / count', 60),
('dairy', 'Paneer', 3.99, 'paneer.jpeg', 0, '3.99 / count', 45);

INSERT INTO ProductDetails (ProductType, productName, productPrice, productImage, productDiscount, productDescription, inventory)
VALUES
('hotbeverages', 'Red Label Tea', 4.99, 'redlabel.jpeg', 0, '4.99 / count', 30),
('hotbeverages', 'Nascafe', 2.99, 'nascafe.jpeg', 0, '4.99 /2 count', 25),
('hotbeverages', 'WaghBakri', 1.99, 'wb.jpeg', 0, '4.99 / count', 35),
('hotbeverages', 'Mili Chai', 3.99, 'mili.jpeg', 0, '3.99 / count', 40);

INSERT INTO ProductDetails (ProductType, productName, productPrice, productImage, productDiscount, productDescription, inventory)
VALUES
('snacks', 'Lays', 3.99, 'Lays.jpeg', 0, '3.99 / count', 55),
('snacks', 'Lays_baked', 3.99, 'LB.jpeg', 0, '3.99 / count', 65),
('snacks', 'Miss Vickie Jalapenos', 3.99, 'mj.jpeg', 0, '3.99 / count', 45),
('snacks', 'Miss Vickie Sea & Salt', 3.99, 'msv.jpeg', 0, '3.99 / count', 30),
('snacks', 'Sun Chips Garden & salsa', 3.99, 'scgs.jpeg', 0, '3.99 / count', 40),
('snacks', 'Sun Chips Chedder & Cheese', 3.99, 'schc.jpeg', 0, '3.99 / count', 20),
('snacks', 'cheetos', 3.99, 'cheetos.jpeg', 0, '3.99 / count', 50);

UPDATE ProductDetails
SET productManufacturer = 'FreshFruitsCo'
WHERE productName IN ('Pineapple', 'Apple', 'Guava', 'Banana', 'Watermalon');

UPDATE ProductDetails
SET productManufacturer = 'ITC', productCondition = CASE WHEN RAND() > 0.5 THEN 'New' ELSE 'Old' END
WHERE productName IN ('Bath & body', 'colgate', 'veseline', 'Nivea Facewash');


UPDATE ProductDetails
SET productManufacturer = 'NewDairyCompany', productCondition = CASE WHEN RAND() > 0.5 THEN 'New' ELSE 'Old' END
WHERE productName IN ('Chedder_Chees', 'Milk', 'Yogart', 'Paneer');

UPDATE ProductDetails
SET productManufacturer = 'NewHotBevCo', productCondition = CASE WHEN RAND() > 0.5 THEN 'New' ELSE 'Old' END
WHERE productName IN ('Red Label Tea', 'Nascafe', 'WaghBakri', 'Mili Chai');

UPDATE ProductDetails
SET productManufacturer = 'NewSnacksCo', productCondition = CASE WHEN RAND() > 0.5 THEN 'New' ELSE 'Old' END
WHERE productName IN ('Lays', 'Lays_baked', 'Miss Vickie Jalapenos', 'Miss Vickie Sea & Salt', 'Sun Chips Garden & salsa', 'Sun Chips Chedder & Cheese', 'cheetos');

select * from Productdetails;


CREATE TABLE store (
	storeId varchar(80) not null primary key,
    storeName varchar(80),
    street varchar(80),
    city varchar(80),
    state varchar(80),
    zipcode varchar(6)
);
