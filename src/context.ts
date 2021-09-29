import { PrismaClient } from "@prisma/client";
export let prisma = new PrismaClient();

export interface Context {
  prisma: typeof prisma;
}

export const context: Context = {
  prisma
};

export function createContext(): Context {
  return { prisma };
}
