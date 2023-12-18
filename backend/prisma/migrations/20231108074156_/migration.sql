/*
  Warnings:

  - Added the required column `updatedAt` to the `Pelayanan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Summary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Ulasan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Pelayanan` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Summary` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Ulasan` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;
