/*
  Warnings:

  - You are about to drop the `connections_schedule` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `available` on the `doctor_schedule` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `doctor_schedule` table. All the data in the column will be lost.
  - Added the required column `avatar_url` to the `doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `patientUserId` to the `doctor_schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `doctor_schedule` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "connections_schedule_doctorScheduleId_key";

-- DropIndex
DROP INDEX "connections_schedule_patientUserId_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "connections_schedule";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_doctor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "speciality" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "city" TEXT NOT NULL,
    "avatar_url" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "experience" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_doctor" ("city", "createdAt", "description", "experience", "id", "name", "price", "speciality", "state") SELECT "city", "createdAt", "description", "experience", "id", "name", "price", "speciality", "state" FROM "doctor";
DROP TABLE "doctor";
ALTER TABLE "new_doctor" RENAME TO "doctor";
CREATE UNIQUE INDEX "doctor_name_key" ON "doctor"("name");
CREATE TABLE "new_doctor_schedule" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "doctorId" TEXT NOT NULL,
    "time" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "patientUserId" TEXT NOT NULL,
    CONSTRAINT "doctor_schedule_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "doctor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "doctor_schedule_patientUserId_fkey" FOREIGN KEY ("patientUserId") REFERENCES "patient_user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_doctor_schedule" ("createdAt", "doctorId", "id") SELECT "createdAt", "doctorId", "id" FROM "doctor_schedule";
DROP TABLE "doctor_schedule";
ALTER TABLE "new_doctor_schedule" RENAME TO "doctor_schedule";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
