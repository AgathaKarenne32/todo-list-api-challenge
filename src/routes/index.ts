import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';

const router = Router();
const authController = new AuthController();

// Rotas de Autenticação
router.post('/users', (req, res) => authController.register(req, res));
router.post('/auth/login', (req, res) => authController.login(req, res));

export { router }; 