CREATE TABLE Customer(
    Customer_id BIGSERIAL NOT NULL PRIMARY KEY,
    Name VARCHAR(40) NOT NULL,
    email_id VARCHAR(120) NOT NULL, 
    Address TEXT,
	City VARCHAR(40) NOT NULL,
    State VARCHAR(40) NOT NULL,
    phone VARCHAR(10) NOT NULL
);
    INSERT INTO Customer (Name,email_id,Address,City,State,phone) VALUES ('Shivam Kiran','shiv@gmail.com','JP Nagar 1st cross','Hospet','Karnataka','6373182093');

DELETE FROM Admin WHERE email_id = 'skadmin';

--reconsider
CREATE TABLE Orders(
    Order_id BIGSERIAL NOT NULL PRIMARY KEY,
	Customer_id BIGINT NOT NULL,
    Product_id BIGINT NOT NULL,
	Ship_address TEXT NOT NULL,
	Shipping_Date TEXT,
    Order_status VARCHAR(40) NOT NULL,
	Total_amount INT DEFAULT 0
);
--reconsider

CREATE TABLE Product(
    Product_id BIGSERIAL NOT NULL PRIMARY KEY,
	Product_name TEXT NOT NULL,
    Supplier_id BIGINT NOT NULL,
	Quantity BIGINT NOT NULL,
	Category_id INT NOT NULL,
	Description TEXT,
    Price INT NOT NULL,
    Category_type VARCHAR(100) NOT NULL
);

INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price) values (ikea chair,1,1,2,'chair with teak wood',1000);

CREATE TABLE Login(
    login_id BIGSERIAL NOT NULL PRIMARY KEY,
    password TEXT NOT NULL,
	email_id VARCHAR(80) NOT NULL
);
DELETE FROM Login;

CREATE TABLE Supplier(
    Supplier_id BIGSERIAL NOT NULL PRIMARY KEY,
	Supplier_name VARCHAR(40) NOT NULL,
    Address TEXT NOT NULL,
	Phone VARCHAR(10) NOT NULL,
	email_id VARCHAR(40) NOT NULL
);

CREATE TABLE Category(
    Category_id BIGSERIAL NOT NULL PRIMARY KEY,
	Category_name VARCHAR(120) NOT NULL
);

INSERT INTO Category (Category_name) values ('');

CREATE TABLE Admin(
    admin_id BIGSERIAL NOT NULL PRIMARY KEY,
    password TEXT NOT NULL,
	email_id VARCHAR(120) NOT NULL,
	Phone VARCHAR(10) NOT NULL
);
INSERT INTO Admin (password,email_id,Phone) values ('hi',);

UPDATE Product SET Description='Buffet with plywood' WHERE Product_id=24;
UPDATE Product SET Description='Buffet with plywood' WHERE Product_id=26;

ALTER TABLE Product ADD Category_type VARCHAR(100);

SELECT * FROM Product WHERE Description LIKE 'bed%';

UPDATE Product SET Category_type='Dining Chair' WHERE Description LIKE 'Dining Chairs%';
UPDATE Product SET Category_type='Dining table' WHERE Description LIKE 'Dining table%';

UPDATE Product SET Description='Desk with plywood' WHERE Product_id=45;

UPDATE Product SET Category_type='Bookshelf' WHERE Description LIKE 'Bookshelf%';
UPDATE Product SET Category_type='Dining Chair' WHERE Description LIKE 'Dining Chairs%';
UPDATE Product SET Category_type='Office Chair' WHERE Description LIKE 'Office Chair%';
UPDATE Product SET Category_type='Dining Chair' WHERE Description LIKE 'Dining Chairs%';
UPDATE Product SET Category_type='Bar stool' WHERE Description LIKE 'Bar stool%';
UPDATE Product SET Category_type='Dining Chair' WHERE Description LIKE 'Dining Chairs%';
UPDATE Product SET Category_type='Dining set' WHERE Description LIKE 'Diningsets%';
UPDATE Product SET Category_type='Dining Chair' WHERE Description LIKE 'Dining Chairs%';
UPDATE Product SET Category_type='Kitchen Island' WHERE Description LIKE 'Kitchen Islands%';
UPDATE Product SET Category_type='Coffee table' WHERE Description LIKE 'Coffee tables%';
UPDATE Product SET Category_type='Side table' WHERE Description LIKE 'Side table%';
UPDATE Product SET Category_type='Sofa' WHERE Description LIKE 'Sofa%';
UPDATE Product SET Category_type='Garden benches' WHERE Description LIKE 'Garden benches%';
UPDATE Product SET Category_type='Hammoks' WHERE Description LIKE 'Hammoks%';
UPDATE Product SET Category_type='Patio Furniture' WHERE Description LIKE 'Patio Furniture%';
--payment not done and also Inventory
--orderItem not required i guess



INSERT INTO Orders1 (Customer_id,Product_id,Ship_address,Shipping_Date,Order_status,Total_amount) values (2,3,'H K Nagar','13-5-24','on cart',12);

INSERT INTO Supplier (Supplier_name,Address,Phone,email_id) values ('Akash','J P Nagar','5674898760','akash@gmail.com');
INSERT INTO Supplier (Supplier_name,Address,Phone,email_id) values ('Ramesh','J D Nagar','5674890760','ramesh@gmail.com');
INSERT INTO Supplier (Supplier_name,Address,Phone,email_id) values ('Milind','Jaya Nagar','5679898760','milind@gmail.com');
INSERT INTO Supplier (Supplier_name,Address,Phone,email_id) values ('Jogi','J D Nagar','5675890760','jogi@gmail.com');
INSERT INTO Supplier (Supplier_name,Address,Phone,email_id) values ('Patil','Jaya Nagar','5279098760','patil@gmail.com');
INSERT INTO Supplier (Supplier_name,Address,Phone,email_id) values ('Suhas','JP Nagar','5605890760','suhas@gmail.com');

CREATE TABLE Orders1(
    Order_id BIGSERIAL NOT NULL PRIMARY KEY,
	Customer_id BIGINT NOT NULL,
	Customer_name VARCHAR(80) NOT NULL,
    Product_id BIGINT NOT NULL,
	Product_name VARCHAR(80) NOT NULL,
	Ship_address TEXT NOT NULL,
	Shipping_Date TEXT,
    Order_status VARCHAR(40) NOT NULL,
	Total_amount INT DEFAULT 0
);

SELECT Customer_id FROM Customer WHERE name = 'ShivamK';
SELECT Product_id FROM Orders WHERE Customer_id=(SELECT Customer_id FROM Customer WHERE name = 'ShivamK');
SELECT * FROM Product WHERE Product_id IN (SELECT Product_id FROM Orders WHERE Customer_id=(SELECT Customer_id FROM Customer WHERE name = 'ShivamK'));

INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Canopy Beds',1,100,2,'bed with teak wood',140,'Beds');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('California King',2,130,2,'bed with ply wood',130,'Beds');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Round Bed',3,120,2,'bed with ply wood',160,'Beds');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Poster Bed',4,130,2,'bed with ply wood',160,'Beds');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Storage Bed',5,120,2,'bed with ply wood',160,'Beds');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Queen Bed',6,130,2,'bed with ply wood',160,'Beds');

INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Combo Dresser',1,100,2,'dresser with teak wood',140,'Dressers');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('LowBoy',2,130,2,'dresser with ply wood',130,'Dressers');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('HighBoy',3,120,2,'dresser with ply wood',160,'Dressers');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Armoire',4,130,2,'dresser with ply wood',160,'Dressers');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Media Dresser',5,120,2,'dresser with ply wood',160,'Dressers');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Horizontal Dresser',6,130,2,'dresser with ply wood',160,'Dressers');

INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Cain NightStand',1,100,2,'Nightstand with teak wood',140,'Nightstands');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Rubix NightStand',2,130,2,'Nightstand with ply wood',130,'Nightstands');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Square NightStand',3,120,2,'Nightstand with ply wood',160,'Nightstands');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Cubic NightStand',4,130,2,'Nightstand with ply wood',160,'Nightstands');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Compartmental NightStand',5,120,2,'Nightstand with ply wood',160,'Nightstands');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Cubic large  nightstand',6,130,2,'Nightstand with ply wood',160,'Nightstands');

INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Meal period Buffet',1,100,3,'Buffet with teak wood',140,'Buffets');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Brunch Buffet',2,130,3,'Buffet with ply wood',130,'Buffets');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Finger or fork Buffet',3,120,3,'Buffet with ply wood',160,'Buffets');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Display Buffet',4,130,3,'Buffet with ply wood',160,'Buffets');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Regional and ethnic Buffet',5,120,3,'Buffet with ply wood',160,'Buffets');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Event oriented Buffet',6,130,3,'Buffet with ply wood',160,'Buffets');

INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Arm chair',1,100,3,'Dinningchair with teak wood',140,'Dinningchairs');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Parsons Chair',2,130,3,'Dinningchair with ply wood',130,'Dinningchairs');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Wingback chair',3,120,3,'Dinningchair with ply wood',160,'Dinningchairs');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Ladderback chair',4,130,3,'Dinningchair with ply wood',160,'Dinningchairs');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Wishbone',5,120,3,'Dinningchair with ply wood',160,'Dinningchairs');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Fan back',6,130,3,'Dinningchair with ply wood',160,'Dinningchairs');

INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Madison Park',1,100,3,'Diningtable with teak wood',140,'Diningtable');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Ashley',2,130,3,'Diningtable with ply wood',130,'Diningtable');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Japhad',3,120,3,'Diningtable with ply wood',160,'Diningtable');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Freeform',4,130,3,'Diningtable with ply wood',160,'Diningtable');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Sintered',5,120,3,'Diningtable with ply wood',160,'Diningtable');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Contemporary',6,130,3,'Diningtable with ply wood',160,'Diningtable');

INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Cubicles',1,100,5,'Bookshelf with teak wood',140,'Bookshelves');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Madina',2,130,5,'Bookshelf with ply wood',130,'Bookshelves');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Thin wood',3,120,5,'Bookshelf with ply wood',160,'Bookshelves');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Rectangular Block',4,130,5,'Bookshelf with ply wood',160,'Bookshelves');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Closet',5,120,5,'Bookshelf with ply wood',160,'Bookshelves');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Barrister',6,130,5,'Bookshelf with ply wood',160,'Bookshelves');

INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Writing desk',1,100,5,'Desk with teak wood',140,'Desks');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Credenta',2,130,5,'Desk with ply wood',130,'Desks');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Carrel',3,120,5,'Desk with ply wood',160,'Desks');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Trestle',4,130,5,'Desk with ply wood',160,'Desks');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Executive',5,120,5,'Desk with ply wood',160,'Desks');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Proffessional',6,130,5,'Desk with ply wood',160,'Desks');

INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Heavy Duty',1,100,5,'Officechair with teak wood',140,'Officechairs');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Designer',2,130,5,'Officechair with ply wood',130,'Officechairs');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('High back',3,120,5,'Officechair with ply wood',160,'Officechairs');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Ergonomic',4,130,5,'Officechair with ply wood',160,'Officechairs');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Conference',5,120,5,'Officechair with ply wood',160,'Officechairs');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Leather',6,130,5,'Officechair with ply wood',160,'Officechairs');

INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Swivel',1,100,4,'Barstool with teak wood',140,'Barstools');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Backless',2,130,4,'Barstool with ply wood',130,'Barstools');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Counter',3,120,4,'Barstool with ply wood',160,'Barstools');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Klingbel',4,130,4,'Barstool with ply wood',160,'Barstools');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Wishbone',5,120,4,'Barstool with ply wood',160,'Barstools');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Rattan',6,130,4,'Barstool with ply wood',160,'Barstools');

INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Hagen',1,100,4,'Diningset with teak wood',140,'Diningsets');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Concrete',2,130,4,'Diningset with ply wood',130,'Diningsets');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Familie',3,120,4,'Diningset with ply wood',160,'Diningsets');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Santora',4,130,4,'Diningset with ply wood',160,'Diningsets');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Beverly',5,120,4,'Diningset with ply wood',160,'Diningsets');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Frontane',6,130,4,'Diningset with ply wood',160,'Diningsets');

INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Fixed islands',1,100,4,'Kitchenisland with teak wood',140,'Kitchenislands');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Sleek waterfall',2,130,4,'Kitchenisland with ply wood',130,'Kitchenislands');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Mobile Kitchen',3,120,4,'Kitchenisland with ply wood',160,'Kitchenislands');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Cabinet kings',4,130,4,'Kitchenisland with ply wood',160,'Kitchenislands');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Galley',5,120,4,'Kitchenisland with ply wood',160,'Kitchenislands');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Chefs Island',6,130,4,'Kitchenisland with ply wood',160,'Kitchenislands');

INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Evelyn',1,100,1,'Coffeetable with teak wood',140,'Coffeetables');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Nebue',2,130,1,'Coffeetable with ply wood',130,'Coffeetables');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Cottage',3,120,1,'Coffeetable with ply wood',160,'Coffeetables');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Industrial',4,130,1,'Coffeetable with ply wood',160,'Coffeetables');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Gallyn',5,120,1,'Coffeetable with ply wood',160,'Coffeetables');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Farmhouse',6,130,1,'Coffeetable with ply wood',160,'Coffeetables');

INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('End table',1,100,1,'Sidetable with teak wood',140,'Sidetables');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Console table',2,130,1,'Sidetable with ply wood',130,'Sidetables');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Bedside',3,120,1,'Sidetable with ply wood',160,'Sidetables');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Nesting',4,130,1,'Sidetable with ply wood',160,'Sidetables');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Console',5,120,1,'Sidetable with ply wood',160,'Sidetables');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Frontera',6,130,1,'Sidetable with ply wood',160,'Sidetables');

INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Green Wave-Sage',1,100,1,'Sofa with teak wood',140,'Sofas');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Jackson-EverGreen',2,130,1,'Sofa with ply wood',130,'Sofas');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Blue Lagoon',3,120,1,'Sofa with ply wood',160,'Sofas');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Ledger Blue',4,130,1,'Sofa with ply wood',160,'Sofas');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Harbour Mulli',5,120,1,'Sofa with ply wood',160,'Sofas');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('London Salsa',6,130,1,'Sofa with ply wood',160,'Sofas');

INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Banana',1,100,6,'GarderBench with teak wood',140,'GarderBenches');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Lutyens',2,130,6,'GarderBench with ply wood',130,'GarderBenches');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Memorial',3,120,6,'GarderBench with ply wood',160,'GarderBenches');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Couples',4,130,6,'GarderBench with ply wood',160,'GarderBenches');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Park',5,120,6,'GarderBench with ply wood',160,'GarderBenches');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Relax',6,130,6,'GarderBench with ply wood',160,'GarderBenches');

INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Brazilian',1,100,6,'Hammock with teak wood',140,'Hammocks');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Nicaraguan',2,130,6,'Hammock with ply wood',130,'Hammocks');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Venezeulen',3,120,6,'Hammock with ply wood',160,'Hammocks');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Naval',4,130,6,'Hammock with ply wood',160,'Hammocks');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Travel',5,120,6,'Hammock with ply wood',160,'Hammocks');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Mayan',6,130,6,'Hammock with ply wood',160,'Hammocks');

INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Resin wicker',1,100,6,'PatioFurniture with teak wood',140,'PatioFurnitures');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Outdoors',2,130,6,'PatioFurniture with ply wood',130,'PatioFurnitures');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Milan',3,120,6,'PatioFurniture with ply wood',160,'PatioFurnitures');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Resort',4,130,6,'PatioFurniture with ply wood',160,'PatioFurnitures');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('MockingBird',5,120,6,'PatioFurniture with ply wood',160,'PatioFurnitures');
INSERT INTO Product (Product_name,Supplier_id,Quantity,Category_id,Description,Price,Category_type) values ('Mozaic',6,130,6,'PatioFurniture with ply wood',160,'PatioFurnitures');

INSERT INTO Orders1 (Customer_id,Product_id,Ship_address,Shipping_Date,Order_status,Total_amount) values (2,3,'H K Nagar','13-5-24','on cart',12);

INSERT INTO Category (Category_name) values ('Living Room');
INSERT INTO Category (Category_name) values ('Bedroom');
INSERT INTO Category (Category_name) values ('Dining Room');
INSERT INTO Category (Category_name) values ('Kitchen');
INSERT INTO Category (Category_name) values ('Home/Office');
INSERT INTO Category (Category_name) values ('Outdoor');

INSERT INTO Supplier (Supplier_name,Address,Phone,email_id) values ('Living Room');