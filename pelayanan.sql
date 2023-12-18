-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 08 Nov 2023 pada 13.23
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pelayanan`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `Pelayanan`
--

CREATE TABLE `Pelayanan` (
  `id` varchar(191) NOT NULL,
  `title` varchar(191) NOT NULL,
  `description` varchar(191) NOT NULL,
  `photo` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `Pelayanan`
--

INSERT INTO `Pelayanan` (`id`, `title`, `description`, `photo`, `createdAt`, `updatedAt`) VALUES
('clopq5mxc0000ue1bbpnzw7d7', 'asuasu', 'pepek pepek', 'http://res.cloudinary.com/aldodevv/image/upload/v1699445850/pelayanan/i79i7bfcz2kanckohmjv.jpg', '2023-11-08 12:16:49.488', '2023-11-08 12:17:30.737');

-- --------------------------------------------------------

--
-- Struktur dari tabel `Ulasan`
--

CREATE TABLE `Ulasan` (
  `id` varchar(191) NOT NULL,
  `rate` int(11) NOT NULL DEFAULT 0,
  `date` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `pelayananId` varchar(191) NOT NULL,
  `category` enum('SangatSuka','Suka','Biasa','TidakSuka') NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `Ulasan`
--

INSERT INTO `Ulasan` (`id`, `rate`, `date`, `pelayananId`, `category`, `createdAt`, `updatedAt`) VALUES
('clopq7t3v0001ue1bm3su6fcl', 10, '2023-11-08 12:18:30.789', 'clopq5mxc0000ue1bbpnzw7d7', 'TidakSuka', '2023-11-08 12:18:30.789', '2023-11-08 12:18:30.789'),
('clopq7x4i0002ue1bwza4t5qg', 90, '2023-11-08 12:18:36.018', 'clopq5mxc0000ue1bbpnzw7d7', 'SangatSuka', '2023-11-08 12:18:36.018', '2023-11-08 12:19:02.521');

-- --------------------------------------------------------

--
-- Struktur dari tabel `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('4371e7b1-614c-4578-af31-a417555400a9', 'af085cfe40cf1e64e5dd3a056f76a9238acf0270d8087ba1b7f033550a0895be', '2023-11-08 12:16:07.380', '20231108011823_pelayanan', NULL, NULL, '2023-11-08 12:16:07.375', 1),
('5d4aa5c4-4d39-4d0c-93e4-670999b57f8f', '1598ba918ec717b2936f3c5f1b89dab62627e14306666a9726ce199a87d652bc', '2023-11-08 12:16:07.259', '20231104091238_npx_prisma_db_push', NULL, NULL, '2023-11-08 12:16:07.207', 1),
('6f08ddbb-1aa6-443a-9ffa-c2ade4df79e0', '11fed7e7b8aca4a63766edcc39d32f6029d72f5929caf49cb016060a217ee501', '2023-11-08 12:16:07.206', '20231104013407_penilaian', NULL, NULL, '2023-11-08 12:16:07.196', 1),
('71177ec4-2c5d-488d-81a1-d8a82a3df356', '18038eebf330521b6c7fb9b4d806e77c196a18940cb1b34ccdf890f7379bda7f', '2023-11-08 12:16:07.395', '20231108074156_', NULL, NULL, '2023-11-08 12:16:07.380', 1),
('77ec25dc-17f5-456b-8ecd-cfdc4980fbde', 'c248c42ac0ad949d4776b85d91d663d5292b51acfcb37074c95e58df84a791e7', '2023-11-08 12:16:20.352', '20231108121620_pelayanan_new', NULL, NULL, '2023-11-08 12:16:20.350', 1),
('878ff1f2-fbfd-445d-acf8-7f88bfbeba55', '8326d79cfd9bfbb486810b0123a8b070e02cad66a238212f45fb00acb0efdf97', '2023-11-08 12:16:07.196', '20231104013237_penilaian', NULL, NULL, '2023-11-08 12:16:07.185', 1),
('932259da-aa45-4506-844b-32a22ae78e96', '6e80bad893f2c2f98e812b9cb07e1f7e89c12067f4560570e5a0d9e3d1a6ae22', '2023-11-08 12:16:07.295', '20231105061741_pelayanan', NULL, NULL, '2023-11-08 12:16:07.267', 1),
('a4c0a998-bded-4928-80f7-40871493bbbb', '71cfde3b39de4265efedb8de9da2159a74c8bf28fd1b942a6dd75a219166faaa', '2023-11-08 12:16:07.267', '20231104094245_pelayanan', NULL, NULL, '2023-11-08 12:16:07.259', 1),
('adf859b9-b384-4771-b773-358bd4141db8', '1244c00509e42b6e6af0a5a32ca83c311fcf043678e2f5a125b0cab0f7a7e206', '2023-11-08 12:16:07.336', '20231105063837_pelayanan', NULL, NULL, '2023-11-08 12:16:07.296', 1),
('b604e528-4e40-4f05-8e56-bc586c32deae', 'c0d0b0de59776d25b6acdfd466804cdd4cedb7537b46cd7cd6d270162a924922', '2023-11-08 12:16:07.374', '20231108003849_pelayanan', NULL, NULL, '2023-11-08 12:16:07.362', 1),
('bbff8963-44a9-4e58-9bf6-4ddc321c1c32', '6e80bad893f2c2f98e812b9cb07e1f7e89c12067f4560570e5a0d9e3d1a6ae22', '2023-11-08 12:16:07.362', '20231105070841_pelayanan', NULL, NULL, '2023-11-08 12:16:07.336', 1);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `Pelayanan`
--
ALTER TABLE `Pelayanan`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `Ulasan`
--
ALTER TABLE `Ulasan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Ulasan_pelayananId_fkey` (`pelayananId`);

--
-- Indeks untuk tabel `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `Ulasan`
--
ALTER TABLE `Ulasan`
  ADD CONSTRAINT `Ulasan_pelayananId_fkey` FOREIGN KEY (`pelayananId`) REFERENCES `Pelayanan` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
