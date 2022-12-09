-- CreateTable
CREATE TABLE "referral_methods" (
    "id" UUID NOT NULL,
    "user_id" VARCHAR(40) NOT NULL,
    "code" VARCHAR(10) NOT NULL,
    "link" VARCHAR(80) NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "referral_methods_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "referral_methods_user_id_key" ON "referral_methods"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "referral_methods_code_key" ON "referral_methods"("code");

-- CreateIndex
CREATE UNIQUE INDEX "referral_methods_link_key" ON "referral_methods"("link");
