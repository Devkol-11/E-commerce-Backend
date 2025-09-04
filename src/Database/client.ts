//Responsible for database Operations

import { PrismaClient } from '@prisma/client';

class DatabaseProvider {
  constructor(private prisma: PrismaClient) {
    this.prisma = new PrismaClient();
  }

  get client() {
    return this.prisma;
  }

  async connect(): Promise<void> {
    try {
      await this.prisma.$connect();
      console.log('connnected to the database');
    } catch (error: any) {
      throw new Error('error connecting to the data base', error);
    }
  }

  async disconnect(): Promise<void> {
    try {
      await this.prisma.$disconnect();
      console.log('database successfully disconnected');
    } catch (error: any) {
      throw new Error('database disconnected', error);
    }
  }
}
const prisma = new PrismaClient();
export const databaseProvider = new DatabaseProvider(prisma);
