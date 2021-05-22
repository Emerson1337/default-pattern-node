import { Request, Response } from 'express';
import AuthService from '../services/AuthService';
import MachineService from '../services/MachineService';

class CreateMachineController {
  async create(request: Request, response: Response) {
    const { image, name, description, model, supervisor, status, health } = request.body;
    const createMachine = new MachineService();
    const authService = new AuthService();
    const id = response.locals.userId

    await authService.execute(id); //apenas verificando se o usuário existe
    const machine = await createMachine.execute({ image, name, description, model, supervisor, status, health });

    return response.json(machine);
  }

  async listingMachines(request: Request, response: Response) {
    const datas = request.body;
    const createMachine = new MachineService();
    const authService = new AuthService();
    const id = response.locals.userId

    await authService.execute(id); //apenas verificando se o usuário existe
    const machine = await createMachine.listing(datas);

    return response.json(machine);
  }

  async listingAllMachines(request: Request, response: Response) {
    const createMachine = new MachineService();
    const authService = new AuthService();
    const id = response.locals.userId

    await authService.execute(id); //apenas verificando se o usuário existe
    const machine = await createMachine.listingAllMachines();

    return response.json(machine);
  }

  async updateData(request: Request, response: Response) {
    const authService = new AuthService();
    const id = response.locals.userId

    await authService.execute(id); //apenas verificando se o usuário existe
    const { nome } = request.params;
    const { image, name, model, description, supervisor, status, health } = request.body;

    const machineService = new MachineService();

    const machine = await machineService.searchMachineByName(nome)

    if (!machine) {
      return response.status(404).json({
        error: "machine not found!"
      })
    }
    const machineUpdated = machineService.updateData({ nome, image, name, model, description, supervisor, status, health });

    return response.status(200).send(machine)
  }
}

export default CreateMachineController;