import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class TaskRepository {
    async create(data: { title: string; description: string; userId: string }) {
        return await prisma.task.create({ data });
    }
    async findAllByUserId(userId: string) {
        return await prisma.task.findMany({ where: { userId } });
    }
    async delete(id: string, userId: string) {
        return await prisma.task.deleteMany({ where: { id, userId } });
    }
}