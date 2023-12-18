-- CreateTable
CREATE TABLE `Summary` (
    `id` VARCHAR(191) NOT NULL DEFAULT 'summary',
    `totalRate` INTEGER NOT NULL DEFAULT 0,
    `average` INTEGER NOT NULL DEFAULT 0,
    `totalSuka` INTEGER NOT NULL DEFAULT 0,
    `totalTidakSuka` INTEGER NOT NULL DEFAULT 0,
    `totalSangatSuka` INTEGER NOT NULL DEFAULT 0,
    `totalBiasa` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
