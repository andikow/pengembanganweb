-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 24, 2021 at 02:02 PM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `binco`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `CustomerID` int(8) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`CustomerID`, `Email`, `Password`) VALUES
(1, 'sona@gmail.com', 'sona123'),
(2, 'pali@gmail.com', 'palipali'),
(3, 'sani@gmail.com', 'ssanniii'),
(4, 'jamesbond@gmail.com', '12345jbond'),
(5, 'emmawatson@gmail.com', 'rupertemma00'),
(6, 'harrypotter@gmail.com', 'hepothepot'),
(7, 'suzybae@gmail.com', 'namdosan1111'),
(8, 'kahado@gmail.com', 'hahadoka'),
(9, 'leehi88@gmail.com', 'hihilee80'),
(10, 'jihyosong@gmail.com', 'sjhsjh0000');

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `ProductID` int(3) NOT NULL,
  `Size` varchar(3) NOT NULL,
  `ColorID` varchar(7) NOT NULL,
  `Qty` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`ProductID`, `Size`, `ColorID`, `Qty`) VALUES
(1, 'L', '#000000', 4);

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `CategoryID` int(11) NOT NULL,
  `Description` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`CategoryID`, `Description`) VALUES
(1, 'T-Shirt'),
(2, 'Hoodie'),
(3, 'Crewneck Sweatshirt'),
(4, 'V Neck SweatShirt'),
(5, 'Polo Shirt'),
(6, 'V Neck T-Shirt'),
(7, 'Tank Top'),
(8, 'Long Sleeve Shirt');

-- --------------------------------------------------------

--
-- Table structure for table `color`
--

CREATE TABLE `color` (
  `ColorID` varchar(8) NOT NULL,
  `ColorName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `color`
--

INSERT INTO `color` (`ColorID`, `ColorName`) VALUES
('#000000', 'Black'),
('#1E90FF', 'Blue'),
('#32CD32', 'Green'),
('#40E0D0', 'Tosca'),
('#800000', 'Maroon'),
('#800080', 'Purple'),
('#808080', 'Gray'),
('#A0522D', 'Brown'),
('#F0E68C', 'Khaki'),
('#FF0000', 'Red'),
('#FFA07A', 'Peach'),
('#FFA500', 'Orange'),
('#FFC0CB', 'Pink'),
('#FFFF00', 'Yellow'),
('#FFFFFF', 'Pure White');

-- --------------------------------------------------------

--
-- Table structure for table `orderdetail`
--

CREATE TABLE `orderdetail` (
  `OrderID` int(8) NOT NULL,
  `ProductID` int(8) NOT NULL,
  `ColorID` varchar(8) NOT NULL,
  `Size` varchar(3) NOT NULL,
  `Qty` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orderdetail`
--

INSERT INTO `orderdetail` (`OrderID`, `ProductID`, `ColorID`, `Size`, `Qty`) VALUES
(1, 5, '#FFFFFF', 'L', 1),
(2, 3, '#FFFF00', 'M', 1),
(2, 4, '#000000', 'L', 3),
(3, 7, '#FFFF00', 'L', 1),
(3, 8, '#FFA07A', 'L', 2),
(3, 10, '#000000', 'L', 1),
(4, 2, '#F0E68C', 'L', 1),
(4, 5, '#FFA07A', 'L', 2),
(5, 3, '#FFFF00', 'M', 1),
(5, 4, '#FFA500', 'XL', 1),
(5, 6, '#40E0D0', 'M', 1),
(5, 9, '#A0522D', 'M', 1),
(6, 1, '#000000', 'M', 1);

-- --------------------------------------------------------

--
-- Table structure for table `orderheader`
--

CREATE TABLE `orderheader` (
  `OrderID` int(8) NOT NULL,
  `OrderDate` date NOT NULL,
  `ShippingID` int(8) NOT NULL,
  `SubTotal` int(12) NOT NULL,
  `ShippingCosts` int(11) NOT NULL,
  `SalesTax` double(11,2) NOT NULL,
  `Total` double(11,2) NOT NULL,
  `StatusID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orderheader`
--

INSERT INTO `orderheader` (`OrderID`, `OrderDate`, `ShippingID`, `SubTotal`, `ShippingCosts`, `SalesTax`, `Total`, `StatusID`) VALUES
(1, '2021-01-01', 1, 116000, 46000, 1160.00, 163160.00, 4),
(2, '2021-01-13', 2, 172000, 36000, 1720.00, 209720.00, 2),
(3, '2021-01-13', 3, 368000, 58000, 3680.00, 429680.00, 3),
(4, '2021-01-14', 4, 276000, 42000, 2760.00, 320760.00, 3),
(5, '2021-01-14', 5, 326000, 32000, 3260.00, 361260.00, 1),
(6, '2021-01-21', 6, 95000, 69000, 950.00, 164950.00, 1);

-- --------------------------------------------------------

--
-- Table structure for table `orderstatusdetail`
--

CREATE TABLE `orderstatusdetail` (
  `OrderID` int(8) NOT NULL,
  `StatusID` varchar(30) NOT NULL,
  `Date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orderstatusdetail`
--

INSERT INTO `orderstatusdetail` (`OrderID`, `StatusID`, `Date`) VALUES
(1, '1', '2021-01-01'),
(1, '2', '2021-01-02'),
(1, '3', '2021-01-05'),
(1, '4', '2021-01-09'),
(2, '1', '2021-01-13'),
(2, '2', '2021-01-13'),
(3, '1', '2021-01-13'),
(3, '2', '2021-01-13'),
(3, '3', '2021-01-15'),
(4, '1', '2021-01-14'),
(4, '2', '2021-01-14'),
(4, '3', '2021-01-16'),
(5, '1', '2021-01-14'),
(6, '1', '2021-01-15');

-- --------------------------------------------------------

--
-- Table structure for table `productdetail`
--

CREATE TABLE `productdetail` (
  `ProductID` int(8) NOT NULL,
  `ColorID` varchar(8) NOT NULL,
  `Size` varchar(3) NOT NULL,
  `Qty` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `productdetail`
--

INSERT INTO `productdetail` (`ProductID`, `ColorID`, `Size`, `Qty`) VALUES
(1, '#000000', 'L', 5),
(1, '#000000', 'M', 5),
(1, '#000000', 'S', 5),
(2, '#F0E68C', 'L', 3),
(3, '#FFFF00', 'M', 2),
(4, '#000000', 'L', 6),
(4, '#FFA500', 'XL', 6),
(5, '#FFA07A', 'L', 3),
(5, '#FFFFFF', 'L', 3),
(5, '#FFFFFF', 'M', 8),
(6, '#40E0D0', 'M', 5),
(6, '#40E0D0', 'S', 5),
(7, '#FFC0CB', 'M', 4),
(7, '#FFC0CB', 'S', 3),
(7, '#FFFF00', 'L', 4),
(7, '#FFFFFF', 'M', 2),
(7, '#FFFFFF', 'XL', 5),
(8, '#FFA07A', 'L', 5),
(9, '#A0522D', 'L', 5),
(9, '#A0522D', 'M', 4),
(9, '#A0522D', 'S', 2),
(9, '#A0522D', 'XL', 5),
(9, '#FFFFFF', 'L', 5),
(9, '#FFFFFF', 'S', 4),
(10, '#000000', 'L', 2),
(10, '#000000', 'XL', 5),
(10, '#808080', 'XL', 2);

-- --------------------------------------------------------

--
-- Table structure for table `productheader`
--

CREATE TABLE `productheader` (
  `ProductID` int(8) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Price` int(11) NOT NULL,
  `CategoryID` int(11) NOT NULL,
  `Description` varchar(1000) NOT NULL,
  `PictureLink1` varchar(500) NOT NULL,
  `PictureLink2` varchar(100) DEFAULT NULL,
  `PictureLink3` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `productheader`
--

INSERT INTO `productheader` (`ProductID`, `Name`, `Price`, `CategoryID`, `Description`, `PictureLink1`, `PictureLink2`, `PictureLink3`) VALUES
(1, 'Eco T-Shirt', 95000, 1, 'Premium T-Shirt with \'Eco\' Design\r\n\r\nUnisex\r\nMaterial: Cotton\r\nFabric weight: 4.42 oz (lightweight)', 'https://m.media-amazon.com/images/I/A13usaonutL._AC_CLa%7C2140%2C2000%7C81LJLhEQ2yL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UX342_.png', NULL, NULL),
(2, 'Jipyeong Hoodie', 160000, 2, 'This Jipyeong Hoodie is a comfortable classic. The hooded sweatshirt has become a staple in any wardrobe. Kangaroo-style front pocket is perfect for your phone, keys or anything else you want to stash.\r\n\r\nUnisex\r\n50% cotton/50% polyester | Fabric Weight: 7.8 oz (midweight)\r\nRibbed cuffs and waist hem\r\nAdjustable drawstring hood\r\n', 'https://res.cloudinary.com/teepublic/image/private/s--QAT6NEcD--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,h_620/c_crop,g_north_west,h_620,w_465,x_-4,y_6/g_north_west,u_upload:v1446840652:production:blanks:ymwlojdlb9pdlxgcmck4,x_-395,y_-276/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1606869302/production/designs/16759957_0.jpg', NULL, NULL),
(3, 'Santa Cruz Sweatshirt', 90000, 3, 'This classic has stood the test of time. Always in fashion, this crewneck sweatshirt is perfect as an outer, under or single layer. Soft and comfortable, this stand-by is a must.\r\n\r\nUnisex\r\n50% preshrunk cotton/50% polyester\r\nFabric Weight: 7.75 oz (midweight)\r\nPill-resistant\r\n1X1 Lycra® spandex ribbed collar, cuffs and waist\r\nFully double-stitched', 'https://i.pinimg.com/originals/15/29/c7/1529c760958a93c96fe42b3b9778f4e9.jpg', NULL, NULL),
(4, 'Swag V Neck Sweatshirt', 82000, 4, 'This V neck sweatshirt is perfect as an outer, under or single layer. Soft and comfortable, this stand-by is a must.\r\n\r\nUnisex\r\n50% preshrunk cotton/50% polyester \r\nFabric Weight: 7.75 oz (midweight)\r\nPill-resistant\r\n1X1 Lycra® spandex ribbed collar, cuffs and waist\r\nFully double-stitched', 'https://images-na.ssl-images-amazon.com/images/I/51u1Gtl7tqL._UL1250_.jpg', NULL, NULL),
(5, 'Red Heart Polo Shirt', 116000, 5, 'A timeless, perfect companion for the office, the golf course, or everyday wear.\r\n\r\nUnisex\r\n100% cotton \r\nHeavyweight fabric (6 oz)\r\nThree-button closure\r\nTopstitching for a crisp finish throughout', 'https://www.hervia.com/uploads/images/products/verylarge/hervia.com-comme-des-gar-ons-play-t006-red-heart-polo-shirt-white-1592319408ggg.png', NULL, NULL),
(6, 'Keep Going V Neck T-Shirt', 86000, 6, 'A little V in the neckline can make a T-shirt look classier. Nice enough to wear to the club and casual enough to wear around the house, this super soft jersey cotton V-neck is versatility at its finest.\r\n\r\nUnisex\r\n100% cotton (deep heather is 52% cotton/48% polyester and marble colors are 91% polyester/9% cotton)\r\nFabric weight: 4.2 oz (lightweight)\r\nReinforced shoulder and side seam construction retains shape and elasticity, comfort and support\r\nDouble-stitched sleeves and waist\r\nRibbed v-neck collar', 'https://cdn.shopify.com/s/files/1/2362/6981/products/spod-1052415273-4-1_1000x.png?v=1596489982', NULL, NULL),
(7, 'Peace Tank Top', 82000, 7, 'The premium tank is ideal for anything from yoga and Pilates or gym. Our entire collection is optimized for vibrant print results.\r\n\r\nUnisex\r\n100% cotton (heather gray is 95% cotton/5% viscose. charcoal gray is 80% cotton/20% polyester)\r\nFabric Weight: 4.42 oz (lightweight)\r\nFairly produced, certified and triple audited', 'https://m.media-amazon.com/images/I/A1PDlPmN9wL._AC_CLa%7C2140%2C2000%7C51XLr930ylL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UL1500_.png', NULL, NULL),
(8, 'Cute Cat Long Sleeve Shirt', 148000, 8, 'This premium long sleeve t-shirt is as close to perfect as can be. Soft, comfortable and durable.\r\n\r\n100% cotton (heather gray and heather ice blue are 95%/5% viscose. charcoal gray is 80% cotton/20% polyester. heather burgundy is 60% cotton/40% polyester)\r\nFabric Weight: 4.42 oz (heavyweight)\r\nFairly produced, certified and triple audited.\r\nDouble stitched, reinforced seams at shoulder, sleeve, collar and waist\r\nOptimized for beautiful brilliance across all printing methods', 'https://dpegb9ebondhq.cloudfront.net/product_photos/45620150/QQ_E6_88_AA_E5_9B_BE20161103175319_original.png', NULL, NULL),
(9, 'Milk Mocha Bear T-Shirt', 68000, 1, 'Premium T-Shirt with Milk Mocha Bear Design\r\n\r\nUnisex\r\nMaterial: Cotton\r\nFabric weight: 4.42 oz (lightweight)', 'https://m.media-amazon.com/images/I/A13usaonutL._AC_CLa%7C2140%2C2000%7C71C7oOdolYL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UL1500_.png', NULL, NULL),
(10, 'Calm Hoodie', 138000, 2, 'This Calm Design Hoodie is a comfortable classic. The hooded sweatshirt has become a staple in any wardrobe. Kangaroo-style front pocket is perfect for your phone, keys or anything else you want to stash.\r\n\r\nUnisex\r\n50% cotton/50% polyester | Fabric Weight: 7.8 oz (midweight)\r\nRibbed cuffs and waist hem\r\nAdjustable drawstring hood', 'https://cdn2.bigcommerce.com/server2100/da4a7/products/692/images/652/KEEP_CALM_AND_CARRY_ON_CUSTOMISED_HOODED_TOP__79457.1449594496.1280.1280.jpg', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `CustomerID` int(8) NOT NULL,
  `OrderID` int(8) NOT NULL,
  `Review` varchar(800) NOT NULL,
  `Stars` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`CustomerID`, `OrderID`, `Review`, `Stars`) VALUES
(1, 1, 'Good quality', 5);

-- --------------------------------------------------------

--
-- Table structure for table `shippingdetail`
--

CREATE TABLE `shippingdetail` (
  `ShippingID` int(8) NOT NULL,
  `CustomerID` int(8) NOT NULL,
  `FirstName` varchar(25) NOT NULL,
  `LastName` varchar(50) DEFAULT NULL,
  `Address` varchar(50) NOT NULL,
  `Building` varchar(50) DEFAULT NULL,
  `Country` varchar(50) NOT NULL,
  `ZipCode` varchar(20) NOT NULL,
  `City` varchar(50) NOT NULL,
  `ShippingMethod` varchar(20) NOT NULL,
  `Phone` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `shippingdetail`
--

INSERT INTO `shippingdetail` (`ShippingID`, `CustomerID`, `FirstName`, `LastName`, `Address`, `Building`, `Country`, `ZipCode`, `City`, `ShippingMethod`, `Phone`) VALUES
(1, 1, 'Kim', 'Sona', 'Lily No. 1', NULL, 'German', '20220', 'Frankfrut', 'Fedex', '+4981234567890'),
(2, 5, 'Sasa', NULL, 'Qingxin no. 9', NULL, 'China', '20222', 'GuangZhou', 'Fedex', '+8689912123333'),
(3, 3, 'Hasanuddin', NULL, 'Jl. Pinus No. 3', 'Toko Apin', 'Indonesia', '20290', 'Makassar', 'DHL', '085243547878'),
(4, 4, 'Dahlia', 'Ria', 'Jl. Nanas Komp. Indah no. 90', '', 'Indonesia', '20292', 'Pekanbaru', 'DHL', '089034542134'),
(5, 5, 'Ronald', 'Prump', 'Jl. Bintang No. 14', 'PT. Putih', 'Indonesia', '20890', 'Aceh', 'USPostalService', '089756453212'),
(6, 6, 'Jojo', 'Lie', 'Aprt. Lestari Blok A No. 19 ', '', 'Indonesia', '29090', 'Jakarta', 'USPostalService', '084523124378');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`CustomerID`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`ProductID`,`Size`,`ColorID`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`CategoryID`);

--
-- Indexes for table `color`
--
ALTER TABLE `color`
  ADD PRIMARY KEY (`ColorID`);

--
-- Indexes for table `orderdetail`
--
ALTER TABLE `orderdetail`
  ADD PRIMARY KEY (`OrderID`,`ProductID`,`ColorID`,`Size`),
  ADD KEY `FK_ProductDetail` (`ProductID`,`ColorID`,`Size`);

--
-- Indexes for table `orderheader`
--
ALTER TABLE `orderheader`
  ADD PRIMARY KEY (`OrderID`),
  ADD KEY `FK_ShippingID` (`ShippingID`);

--
-- Indexes for table `orderstatusdetail`
--
ALTER TABLE `orderstatusdetail`
  ADD PRIMARY KEY (`OrderID`,`StatusID`);

--
-- Indexes for table `productdetail`
--
ALTER TABLE `productdetail`
  ADD PRIMARY KEY (`ProductID`,`ColorID`,`Size`),
  ADD KEY `FK_ColorID` (`ColorID`);

--
-- Indexes for table `productheader`
--
ALTER TABLE `productheader`
  ADD PRIMARY KEY (`ProductID`),
  ADD KEY `FK_CategoryID` (`CategoryID`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`CustomerID`,`OrderID`),
  ADD KEY `FK2_OrderID` (`OrderID`);

--
-- Indexes for table `shippingdetail`
--
ALTER TABLE `shippingdetail`
  ADD PRIMARY KEY (`ShippingID`),
  ADD KEY `FK_CustomerID` (`CustomerID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `CustomerID` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `CategoryID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `orderheader`
--
ALTER TABLE `orderheader`
  MODIFY `OrderID` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `productheader`
--
ALTER TABLE `productheader`
  MODIFY `ProductID` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `shippingdetail`
--
ALTER TABLE `shippingdetail`
  MODIFY `ShippingID` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orderdetail`
--
ALTER TABLE `orderdetail`
  ADD CONSTRAINT `FK3_OrderID` FOREIGN KEY (`OrderID`) REFERENCES `orderheader` (`OrderID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_ProductDetail` FOREIGN KEY (`ProductID`,`ColorID`,`Size`) REFERENCES `productdetail` (`ProductID`, `ColorID`, `Size`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `orderheader`
--
ALTER TABLE `orderheader`
  ADD CONSTRAINT `FK_ShippingID` FOREIGN KEY (`ShippingID`) REFERENCES `shippingdetail` (`ShippingID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `orderstatusdetail`
--
ALTER TABLE `orderstatusdetail`
  ADD CONSTRAINT `FK_OrderID` FOREIGN KEY (`OrderID`) REFERENCES `orderheader` (`OrderID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `productdetail`
--
ALTER TABLE `productdetail`
  ADD CONSTRAINT `FK2_ProductID` FOREIGN KEY (`ProductID`) REFERENCES `productheader` (`ProductID`),
  ADD CONSTRAINT `FK_ColorID` FOREIGN KEY (`ColorID`) REFERENCES `color` (`ColorID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `productheader`
--
ALTER TABLE `productheader`
  ADD CONSTRAINT `FK_CategoryID` FOREIGN KEY (`CategoryID`) REFERENCES `category` (`CategoryID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `FK2_OrderID` FOREIGN KEY (`OrderID`) REFERENCES `orderheader` (`OrderID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK3_CustomerID` FOREIGN KEY (`CustomerID`) REFERENCES `account` (`CustomerID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `shippingdetail`
--
ALTER TABLE `shippingdetail`
  ADD CONSTRAINT `FK_CustomerID` FOREIGN KEY (`CustomerID`) REFERENCES `account` (`CustomerID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
