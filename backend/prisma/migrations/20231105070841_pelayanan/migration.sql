/*
  Warnings:

  - You are about to alter the column `photo` on the `Pelayanan` table. The data in that column could be lost. The data in that column will be cast from `LongBlob` to `VarChar(191)`.
  - You are about to alter the column `photo` on the `Ulasan` table. The data in that column could be lost. The data in that column will be cast from `LongBlob` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `Pelayanan` MODIFY `photo` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Ulasan` MODIFY `photo` VARCHAR(191) NULL;
