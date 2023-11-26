-- CreateTable
CREATE TABLE "visitantes" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "visitantes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "visitantes_code_key" ON "visitantes"("code");
