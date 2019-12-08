-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 08, 2019 at 06:50 PM
-- Server version: 5.7.26
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_home`
--

CREATE TABLE `tbl_home` (
  `ID` int(11) NOT NULL,
  `link` varchar(20) NOT NULL,
  `description` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_home`
--

INSERT INTO `tbl_home` (`ID`, `link`, `description`) VALUES
(1, 'camera.png', 'Here is where I showcase all of my photography work. Click the link below to explore some of my work across a variety of different categories.'),
(2, 'video-camera.png', 'Check out some of my videography work by clicking the link below. Here you can find an assortment of client and personal projects that I have created.'),
(3, 'web-startup.png', 'Browse through some of my stunning motion graphics content. Here you can find 2D and 3D motion graphics. '),
(4, 'demoReel.mp4', 'demo reel for home page'),
(5, 'dreamCulture.png', ''),
(6, 'dreamsFestival.png', ''),
(7, 'hashtagHealth.png', ''),
(8, 'uwo.png', ''),
(9, 'lifetimesliving.png', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_home`
--
ALTER TABLE `tbl_home`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_home`
--
ALTER TABLE `tbl_home`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
