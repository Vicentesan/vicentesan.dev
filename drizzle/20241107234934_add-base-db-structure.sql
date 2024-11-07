CREATE TYPE "public"."quote_budget" AS ENUM('1k', '2k', '3k', '5k', 'custom');--> statement-breakpoint
CREATE TYPE "public"."quote_delivery_time" AS ENUM('short', 'normal', 'medium', 'flexible', 'urgent');--> statement-breakpoint
CREATE TYPE "public"."quote_status" AS ENUM('pending', 'accepted', 'rejected');--> statement-breakpoint
CREATE TYPE "public"."quote_type" AS ENUM('api', 'web', 'mobile', 'desktop', 'unfinished', 'other');--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "quotes" (
	"id" text PRIMARY KEY NOT NULL,
	"client_id" text,
	"project_name" varchar(255) NOT NULL,
	"current_website" varchar(255),
	"type" "quote_type" NOT NULL,
	"budget" "quote_budget" NOT NULL,
	"custom_budget" integer,
	"additional_info" text,
	"delivery_time" "quote_delivery_time" NOT NULL,
	"status" "quote_status" DEFAULT 'pending' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "clients" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"phone" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "auth_links" (
	"id" text PRIMARY KEY NOT NULL,
	"code" text NOT NULL,
	"client_id" text NOT NULL,
	"createdAt" timestamp DEFAULT now(),
	CONSTRAINT "auth_links_code_unique" UNIQUE("code")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "quotes" ADD CONSTRAINT "quotes_client_id_clients_id_fk" FOREIGN KEY ("client_id") REFERENCES "public"."clients"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "auth_links" ADD CONSTRAINT "auth_links_client_id_clients_id_fk" FOREIGN KEY ("client_id") REFERENCES "public"."clients"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "quotes_client_id_idx" ON "quotes" USING btree ("client_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "quotes_status_idx" ON "quotes" USING btree ("status");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "quotes_created_at_idx" ON "quotes" USING btree ("created_at");