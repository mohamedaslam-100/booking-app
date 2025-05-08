import { Router } from 'express';
import { UserUseCase } from '../../Application/usecases/userusecase';

const router = Router();

router.post('/register', async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    const response = await UserUseCase.registerUser(name, email, phone, password);
    res.status(201).json(response);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await UserUseCase.loginUser(email, password);
    res.json(result);
  } catch (err) {
    res.status(401).json({ message: (err as Error).message });
  }
});

export default router;
