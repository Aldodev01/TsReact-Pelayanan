-- DropForeignKey
ALTER TABLE `Ulasan` DROP FOREIGN KEY `Ulasan_pelayananId_fkey`;

-- AlterTable
ALTER TABLE `Pelayanan` MODIFY `photo` LONGBLOB NOT NULL;

-- AlterTable
ALTER TABLE `Ulasan` MODIFY `photo` LONGBLOB NULL;

-- AddForeignKey
ALTER TABLE `Ulasan` ADD CONSTRAINT `Ulasan_pelayananId_fkey` FOREIGN KEY (`pelayananId`) REFERENCES `Pelayanan`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
