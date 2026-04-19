import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { UserRepository } from '../repositories/user.repository';
import { CreateUserDTO } from '../dtos/user.dto';

const userRepository = new UserRepository();

export class AuthService {
    async register(data: CreateUserDTO) {
        const userExists = await userRepository.findByEmail(data.email);
        if (userExists) throw new Error('Usuário já existe');

        const hashedPassword = await bcrypt.hash(data.password, 10);

        return await userRepository.create({
            ...data,
            password: hashedPassword
        });
    }

    async login(email: string, pass: string) {
        const user = await userRepository.findByEmail(email);
        if (!user) throw new Error('Credenciais inválidas');

        const isPassValid = await bcrypt.compare(pass, user.password);
        if (!isPassValid) throw new Error('Credenciais inválidas');

        const token = jwt.sign({ sub: user.id }, process.env.JWT_SECRET!, { expiresIn: '1d' });

        return { token };
    }
}