import { Request, Response } from 'express';
import CreateUnitService from '../services/CreateUnitService';
import CreateUserService from '../services/CreateUserService';

class CreateUserController {
  async executeUni01(request: Request, response: Response) {
    const { name, machine, supervisors } = request.body;
    const createUnitService = new CreateUnitService();

    const unit = await createUnitService.executeUni01({ name, machine, supervisors });

    return response.status(200).json(unit);
  }

  async executeUni02(request: Request, response: Response) {
    const { name, machine, supervisors } = request.body;
    const createUnitService = new CreateUnitService();

    const unit = await createUnitService.executeUni02({ name, machine, supervisors });

    return response.status(200).json(unit);
  }
}

export default CreateUserController;