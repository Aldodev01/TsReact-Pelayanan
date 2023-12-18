/*
  Warnings:

  - You are about to drop the column `description` on the `Ulasan` table. All the data in the column will be lost.
  - You are about to drop the column `photo` on the `Ulasan` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Ulasan` table. All the data in the column will be lost.
  - You are about to drop the column `userid` on the `Ulasan` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `category` to the `Ulasan` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Ulasan` DROP FOREIGN KEY `Ulasan_userid_fkey`;

-- AlterTable
ALTER TABLE `Ulasan` DROP COLUMN `description`,
    DROP COLUMN `photo`,
    DROP COLUMN `title`,
    DROP COLUMN `userid`,
    ADD COLUMN `category` ENUM('SangatSuka', 'Suka', 'Biasa', 'TidakSuka') NOT NULL;

-- DropTable
DROP TABLE `User`;
