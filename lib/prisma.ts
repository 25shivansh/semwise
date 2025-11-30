import { PrismaClient } from "./generated/prisma/client";
import "server-only";

declare global {
  // eslint-disable-next-line no-var, no-unused-vars
  var cachedPrisma: PrismaClient;
}

export let prisma: PrismaClient;
// The generated client type currently requires an options argument in TS.
// Cast the constructor to allow no-arg instantiation without TS errors.
const PrismaClientCtor = PrismaClient as unknown as { new (): PrismaClient };

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClientCtor();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClientCtor();
  }
  prisma = global.cachedPrisma;
}