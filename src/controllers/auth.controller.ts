import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';

const authService = new AuthService();

export class AuthController {
    async register(req: Request, res: Response) {
        try {
            const user = await authService.register(req.body);
            // Removemos a senha do retorno por segurança
            const { password, ...userWithoutPassword } = user;
            return res.status(201).json(userWithoutPassword);
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }

    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            const result = await authService.login(email, password);
            return res.json(result);
        } catch (error: any) {
            return res.status(401).json({ message: error.message });
        }
    }
}