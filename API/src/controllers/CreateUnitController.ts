import { Request, Response } from 'express';
import CreateUnitService from '../services/CreateUnitService';
import CreateUserService from '../services/CreateUserService';

class CreateUserController {
  async create(request: Request, response: Response) {
    const { name, machine, supervisors } = request.body;
    const createUnitService = new CreateUnitService();

    const unit = await createUnitService.execute({ name, machine, supervisors });

    return response.status(200).json(unit);
  }
}

export default CreateUserController;