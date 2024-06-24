/*
  Warnings:

  - Added the required column `available` to the `DoctorSchedule` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_DoctorSchedule" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "available" BOOLEAN NOT NULL,
    "doctorId" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "DoctorSchedule_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_DoctorSchedule" ("createdAt", "date", "doctorId", "id") SELECT "createdAt", "date", "doctorId", "id" FROM "DoctorSchedule";
DROP TABLE "DoctorSchedule";
ALTER TABLE "new_DoctorSchedule" RENAME TO "DoctorSchedule";
CREATE UNIQUE INDEX "DoctorSchedule_available_key" ON "DoctorSchedule"("available");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
