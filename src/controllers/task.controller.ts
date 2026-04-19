import { Request, Response } from 'express';
import { TaskService } from '../services/task.service';

const taskService = new TaskService();

export class TaskController {
    async create(req: Request, res: Response) {
        const { title, description } = req.body;
        const userId = req.user?.id;
        if (!userId) return res.status(401).json({ message: 'Unauthorized' });
        const task = await taskService.create(title, description, userId);
        return res.status(201).json(task);
    }

    async list(req: Request, res: Response) {
        const userId = req.user?.id;
        if (!userId) return res.status(401).json({ message: 'Unauthorized' });
        const tasks = await taskService.list(userId);
        return res.json(tasks);
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        const userId = req.user?.id;
        if (!userId) return res.status(401).json({ message: 'Unauthorized' });
        await taskService.delete(id, userId);
        return res.status(204).send();
    }
}