import { Request, Response } from 'express';
import User_id from '../models/User_idClass';
import CreateMachineService from '../services/CreateMachineService';

class CreateMachineController {
  async create(request: Request, response: Response) {
    const { image, name, description, model, supervisor, status, health } = request.body;
    const createMachine = new CreateMachineService();

    const machine = await createMachine.execute({ image, name, description, model, supervisor, status, health });

    return response.json(machine);
  }

  async listingMachines(request: Request, response: Response) {
    const datas = request.body;
    const createMachine = new CreateMachineService();

    const machine = await createMachine.listing(datas);

    return response.json(machine);
  }

  async listingAllMachines(request: Request, response: Response) {
    const createMachine = new CreateMachineService();

    const machine = await createMachine.listingAllMachines();

    return response.json(machine);
  }
}

export default CreateMachineController;