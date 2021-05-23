import { Request, Response } from 'express';
import AuthService from '../services/AuthService';
import UnitManageService from '../services/UnitManageService';


class UnitManageController {

  async addMachineToUnit01(request: Request, response: Response) {
    const { machine } = request.body;
    const unitMaganeService = new UnitManageService();
    const authService = new AuthService();
    const id = response.locals.userId

    await authService.execute({ id }); //apenas verificando se o usuário existe
    const unitMachine = await unitMaganeService.addMachineUnit01({ machine })
    return response.json(unitMachine);
  }

  async addMachineToUnit02(request: Request, response: Response) {
    const { machine } = request.body;
    const unitMaganeService = new UnitManageService();
    const authService = new AuthService();
    const id = response.locals.userId

    await authService.execute(id); //apenas verificando se o usuário existe
    const unitMachine = await unitMaganeService.addMachineUnit02({ machine })
    return response.json(unitMachine);
  }


  async listingAllUnits(request: Request, response: Response) {
    const unitManageService = new UnitManageService();

    const authService = new AuthService();
    const id = response.locals.userId

    await authService.execute(id); //apenas verificando se o usuário existe

    return response.status(200).json(await unitManageService.listingAllUnits());
  }

}

export default UnitManageController;