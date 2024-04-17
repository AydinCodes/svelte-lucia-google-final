import type { PrismaClient } from "@prisma/client";

declare global {
	namespace App {
		interface Locals {
			user: import("lucia").User | null;
			session: import("lucia").Session | null;
		}
	}

	var prisma: PrismaClient;
}
export {};
