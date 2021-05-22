import { response } from "express";
import { getCustomRepository } from "typeorm";
import Unit01Repository from "../repositories/Unit01Repository";
import Unit02Repository from "../repositories/Unit02Repository";

class UnitManageService {

  async addMachineUnit01({ machine }) {
    const unit01Repository = getCustomRepository(Unit01Repository);
    const unit02Repository = getCustomRepository(Unit02Repository);

    const machineAlreadyInUnit = await unit02Repository.findOne({
      machines: [{
        machine_id: machine
      }]
    })

    if (machineAlreadyInUnit) {
      return ({
        message: "machine already registered on another unit"
      })
    }

    const machineAlreadyRegistered = await unit01Repository.findOne({
      machines: [{
        machine_id: machine
      }]
    })

    if (machineAlreadyRegistered) {
      return ({
        message: "machine already registered on this unit"
      })
    }

    const unitMachineField = await unit01Repository.findOne({
      name: "UNIDADE 01"
    });

    if (!unitMachineField) {
      return ({ message: "Unit isn't registered!" });
    }

    if (unitMachineField.machines) {
      const vector = [...unitMachineField.machines, { machine_id: machine }]
      unitMachineField.machines = vector;
    } else {
      unitMachineField.machines = [{ machine_id: machine }];
    }

    await unit01Repository.delete(unitMachineField);
    await unit01Repository.save(unitMachineField);

    return unitMachineField;
  }

  async addMachineUnit02({ machine }) {
    const unit01Repository = getCustomRepository(Unit01Repository);
    const unit02Repository = getCustomRepository(Unit02Repository);

    const machineAlreadyInUnit = await unit01Repository.findOne({
      machines: [{
        machine_id: machine
      }]
    })

    if (machineAlreadyInUnit) {
      return ({
        message: "machine already registered on another unit"
      })
    }

    const machineAlreadyRegistered = await unit02Repository.findOne({
      machines: [{
        machine_id: machine
      }]
    })

    if (machineAlreadyRegistered) {
      return ({
        message: "machine already registered on this unit"
      })
    }

    const unitMachineField = await unit02Repository.findOne({
      name: "UNIDADE 02"
    });

    if (!unitMachineField) {
      return ({ message: "Unit isn't registered!" });
    }

    if (unitMachineField.machines) {
      const vector = [...unitMachineField.machines, { machine_id: machine }]
      unitMachineField.machines = vector;
    } else {
      unitMachineField.machines = [{ machine_id: machine }];
    }

    await unit02Repository.delete(unitMachineField);
    await unit02Repository.save(unitMachineField);

    return unitMachineField;
  }
}

export default UnitManageService;