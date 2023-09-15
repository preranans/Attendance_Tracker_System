-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 15, 2023 at 09:31 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `attendance_tracking_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `Name` varchar(30) NOT NULL,
  `USN` varchar(10) NOT NULL,
  `Class` int(2) NOT NULL,
  `No_Present` bigint(100) NOT NULL,
  `No_Absent` bigint(100) NOT NULL,
  `Percentage` double NOT NULL,
  `Section` varchar(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`Name`, `USN`, `Class`, `No_Present`, `No_Absent`, `Percentage`, `Section`) VALUES
('Bindu', '1JS22CS006', 3, 0, 0, 0, 'A'),
('Nishchitha', '1JS22CS019', 3, 0, 0, 0, 'B'),
('Bhuvan', '1JS22CS100', 3, 0, 0, 0, 'A'),
('Kavya', '1JS22CS116', 3, 0, 0, 0, 'B'),
('Shanaya', '1JS22CS130', 3, 0, 0, 0, 'C'),
('Zoya', '1JS22CS131', 3, 0, 0, 0, 'C'),
('Aradhya', '1JS23CS001', 1, 0, 0, 0, 'A'),
('Harshitha', '1JS23CS002', 2, 0, 0, 0, 'A'),
('Kapil', '1JS23CS010', 1, 0, 0, 0, 'A'),
('Komal', '1JS23CS014', 2, 0, 0, 0, 'A'),
('Ashwini', '1JS23CS110', 1, 0, 0, 0, 'B'),
('Indu', '1JS23CS114', 2, 0, 0, 0, 'B'),
('Hima', '1JS23CS115', 2, 0, 0, 0, 'B'),
('Jasmin', '1JS23CS116', 2, 0, 0, 0, 'C'),
('Hamsa', '1JS23CS117', 1, 0, 0, 0, 'B'),
('Skanda', '1JS23CS130', 1, 0, 0, 0, 'C'),
('Simran', '1JS23CS135', 2, 0, 0, 0, 'C'),
('Yashaswini', '1JS23CS150', 1, 0, 0, 0, 'C');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `email` varchar(30) NOT NULL,
  `password` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`email`, `password`) VALUES
('nsprerana@gmail.com', '1234');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`USN`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
