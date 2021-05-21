import { json, Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import Unit01Repository from '../repositories/Unit01Repository copy';
import Unit02Repository from '../repositories/Unit02Repository';


class UnitManageController {

  async addMachineToUnit01(request: Request, response: Response) {

    const { machine } = request.body;

    const unit01Repository = getCustomRepository(Unit01Repository);
    const unit02Repository = getCustomRepository(Unit02Repository);


    const machineAlreadyInUnit = await unit02Repository.findOne({
      machine
    })

    if (machineAlreadyInUnit) {
      return ({
        error: "machine already registered on another unit"
      })
    }

    const machineAlreadyRegistered = await unit01Repository.findOne({
      machine
    })

    // if (machineAlreadyRegistered) {
    //   return ({
    //     message: "machine already registered on this unit"
    //   })
    // }

    const unitMachineField = await unit01Repository.findOne({
      name: "UNIDADE 01"
    });

    await unit01Repository.remove(unitMachineField);

    unitMachineField.machine.push({ machine_id: machine });

    await unit01Repository.save(unitMachineField);

    return response.json(unitMachineField);
  }

}

export default UnitManageController;