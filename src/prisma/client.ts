import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => new PrismaClient();
type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

export const db = globalForPrisma.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV === "development") globalForPrisma.prisma = db;
