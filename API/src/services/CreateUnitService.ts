import { getCustomRepository } from "typeorm";
import Unit01 from "../models/Unit01";
import Unit02 from "../models/Unit02";
import Unit01Repository from "../repositories/Unit01Repository copy";
import Unit02Repository from "../repositories/Unit02Repository";

interface UnitData {
  name: string;
  machine: [];
  supervisors: [];
}

class CreateUnitService {
  public async executeUni01({ name, machine }: UnitData) {
    const unit01Repository = getCustomRepository(Unit01Repository);

    const unit01AlreadyExists = await unit01Repository.findOne({ name });

    if (unit01AlreadyExists) {
      return ({ error: "Esta unidade já foi cadastrada!" })
    }
    const unit = new Unit01();
    unit.name = name;
    unit.machine = machine;

    await unit01Repository.save(unit);

    return unit;
  }

  public async executeUni02({ name, machine }: UnitData) {
    const unit02Repository = getCustomRepository(Unit02Repository);

    const unit02AlreadyExists = await unit02Repository.findOne({ name });

    if (unit02AlreadyExists) {
      return ({ error: "Esta unidade já foi cadastrada!" })
    }
    const unit = new Unit02();
    unit.name = name;
    unit.machine = machine;

    await unit02Repository.save(unit);

    return unit;
  }
}

export default CreateUnitService;