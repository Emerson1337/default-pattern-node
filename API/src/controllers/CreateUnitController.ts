import { Request, Response } from 'express';
import AuthService from '../services/AuthService';
import CreateUnitService from '../services/CreateUnitService';

class CreateUserController {
  async executeUni01(request: Request, response: Response) {
    const { name, machine } = request.body;
    const createUnitService = new CreateUnitService();

    const authService = new AuthService();
    const id = response.locals.userId

    authService.execute(id); //apenas verificando se o usuário existe
    const unit = await createUnitService.executeUni01({ name, machine });

    return response.status(200).json(unit);
  }

  async executeUni02(request: Request, response: Response) {
    const { name, machine } = request.body;
    const createUnitService = new CreateUnitService();

    const authService = new AuthService();
    const id = response.locals.userId

    authService.execute(id); //apenas verificando se o usuário existe
    const unit = await createUnitService.executeUni02({ name, machine });

    return response.status(200).json(unit);
  }
}

export default CreateUserController;