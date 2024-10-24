/*
  Warnings:

  - Added the required column `avatar_url` to the `patient_user` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_patient_user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar_url" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_patient_user" ("createdAt", "email", "id", "name", "password", "phone") SELECT "createdAt", "email", "id", "name", "password", "phone" FROM "patient_user";
DROP TABLE "patient_user";
ALTER TABLE "new_patient_user" RENAME TO "patient_user";
CREATE UNIQUE INDEX "patient_user_email_key" ON "patient_user"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
