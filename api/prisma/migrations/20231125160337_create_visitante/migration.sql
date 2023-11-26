/*
  Warnings:

  - The primary key for the `visitantes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `visitantes` table. All the data in the column will be lost.
  - The `code` column on the `visitantes` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropIndex
DROP INDEX "visitantes_code_key";

-- AlterTable
ALTER TABLE "visitantes" DROP CONSTRAINT "visitantes_pkey",
DROP COLUMN "id",
DROP COLUMN "code",
ADD COLUMN     "code" SERIAL NOT NULL,
ADD CONSTRAINT "visitantes_pkey" PRIMARY KEY ("code");
