import { response } from "express";
import { getCustomRepository, getMongoRepository } from "typeorm";
import Machine from "../models/Machines";
import Unit01 from "../models/Unit01";
import User from "../models/Users";
import Unit01Repository from "../repositories/Unit01Repository copy";

interface UnitData {
  name: string;
  machine: [];
  supervisors: [];
}

class CreateUnitService {
  public async execute({ name, machine, supervisors }: UnitData) {
    const unit01Repository = getCustomRepository(Unit01Repository);

    const unit01AlreadyExists = await unit01Repository.findOne({ name });

    if (unit01AlreadyExists) {
      return ({ error: "ja existe" })
    }
    const unit = new Unit01();
    unit.name = name;
    unit.machine = machine;
    unit.supervisors = supervisors;

    await unit01Repository.save(unit);

    return unit;
  }
}

export default CreateUnitService;