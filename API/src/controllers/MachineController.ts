import { Request, Response } from 'express';
import AuthService from '../services/AuthService';
import MachineService from '../services/MachineService';

class MachineController {
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
    const identification = response.locals.userId

    await authService.execute(identification); //apenas verificando se o usuário existe
    const { id } = request.params;
    const { image, name, model, description, supervisor, status, health } = request.body;

    const machineService = new MachineService();

    const machine = await machineService.searchMachineByName(id)

    if (!machine) {
      return response.status(404).json({
        error: "machine not found!"
      })
    }
    const machineUpdated = machineService.updateData({ id, image, name, model, description, supervisor, status, health });

    return response.status(200).send({ machine, machineUpdated })
  }

  async updateSupervisor(request: Request, response: Response) {
    const authService = new AuthService();
    const identification = response.locals.userId

    await authService.execute(identification); //apenas verificando se o usuário existe
    const { id } = request.params;
    const { supervisor } = request.body;
    const machineService = new MachineService();
    const machine = await machineService.updateSupervisor({ id, supervisor })
    return response.status(200).json(machine);
  }
}

export default MachineController;