import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';
import { TaskController } from '../controllers/task.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();
const authController = new AuthController();
const taskController = new TaskController();

// Auth
router.post('/users', (req, res) => authController.register(req, res));
router.post('/auth/login', (req, res) => authController.login(req, res));

// Tasks - VERIFIQUE SE ESTAS LINHAS ESTÃO SALVAS
router.post('/tasks', authMiddleware, (req, res) => taskController.create(req, res));
router.get('/tasks', authMiddleware, (req, res) => taskController.list(req, res));
router.delete('/tasks/:id', authMiddleware, (req, res) => taskController.delete(req, res));

export { router };