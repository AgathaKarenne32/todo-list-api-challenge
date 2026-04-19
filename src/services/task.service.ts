import { TaskRepository } from '../repositories/task.repository';
const taskRepository = new TaskRepository();

export class TaskService {
    async create(title: string, description: string, userId: string) {
        return await taskRepository.create({ title, description, userId });
    }
    async list(userId: string) {
        return await taskRepository.findAllByUserId(userId);
    }
    async delete(id: string, userId: string) {
        return await taskRepository.delete(id, userId);
    }
}