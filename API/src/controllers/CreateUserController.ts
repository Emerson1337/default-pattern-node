import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';
import LoginUserService from '../services/LoginUserService';

class CreateUserController {
  async create(request: Request, response: Response) {
    const { name, email, password } = request.body;
    const createUser = new CreateUserService();

    const user = await createUser.execute({ name, email, password });

    return response.json(user);
  }

  async login(request: Request, response: Response) {

    const { email, password } = request.body;

    const loginService = new LoginUserService();

    const token = await loginService.execute({ email, password });

    return response.status(200).json(token);
  }
}

export default CreateUserController;