-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "ad" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "sifreHash" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
