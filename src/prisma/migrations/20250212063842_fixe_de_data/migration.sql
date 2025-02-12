/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Video` table. All the data in the column will be lost.
  - Added the required column `categorieId` to the `Video` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Video` DROP FOREIGN KEY `Video_categoryId_fkey`;

-- DropIndex
DROP INDEX `Video_categoryId_fkey` ON `Video`;

-- AlterTable
ALTER TABLE `Video` DROP COLUMN `categoryId`,
    ADD COLUMN `categorieId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Video` ADD CONSTRAINT `Video_categorieId_fkey` FOREIGN KEY (`categorieId`) REFERENCES `Categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
