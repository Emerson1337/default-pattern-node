import { Request, Response } from 'express';
import UnitManageService from '../services/UnitManageService';


class UnitManageController {

  async addMachineToUnit01(request: Request, response: Response) {
    const { machine } = request.body;
    const unitMaganeService = new UnitManageService();

    const unitMachine = await unitMaganeService.addMachineUnit01({ machine })
    return response.json(unitMachine);
  }

  async addMachineToUnit02(request: Request, response: Response) {
    const { machine } = request.body;
    const unitMaganeService = new UnitManageService();

    const unitMachine = await unitMaganeService.addMachineUnit02({ machine })
    return response.json(unitMachine);
  }

}

export default UnitManageController;