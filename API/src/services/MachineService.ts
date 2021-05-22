import { getCustomRepository } from "typeorm";
import { isConstructorDeclaration } from "typescript";
import Machine from "../models/Machines";
import MachinesRepository from "../repositories/MachineRepository";
import UsersRepository from "../repositories/UserRepository";

interface MachineData {
  nome?: string,
  image: string,
  name: string,
  description: string,
  model: string,
  supervisor: string,
  status: string;
  health: number,
}

class MachineService {
  public async execute({ image, name, description, model, supervisor, status, health }: MachineData) {
    const machineRepository = getCustomRepository(MachinesRepository);
    const userRepository = getCustomRepository(UsersRepository);
    const id = supervisor;
    const userExists = await userRepository.findOne(id)

    //algumas regras de negócio a respeito do input do usuário
    if (status != "Em Alerta") {
      if (status != "Em Parada") {
        if (status != "Em Operação") {
          status = "Em Parada";
        }
      }
    }

    if (health < 0 || health > 100) {
      return ({ error: "Health level invalid!" })
    }

    if (!userExists) {
      return ({ error: "This user doesn't exists!" })
    }

    const machineWithSameName = await machineRepository.findOne({ name });

    if (machineWithSameName) {
      return ({ error: "This machine name already registered on database" });
    }

    const machine = new Machine();
    machine.image = image;
    machine.name = name;
    machine.description = description;
    machine.model = model;
    machine.status = status;
    machine.supervisor = supervisor;
    machine.health = health;

    await machineRepository.save(machine);

    return machine;
  }

  public async listing({ name, model }: MachineData) {
    const machineRepository = getCustomRepository(MachinesRepository);
    const machineExists = await machineRepository.findOne({ where: { name, model } })
    if (!machineExists) {
      return ({ error: "Esta máquina não foi cadastrada!" })
    }

    return machineExists;
  }

  public async listingAllMachines() {
    const machineRepository = getCustomRepository(MachinesRepository);
    const machineExists = await machineRepository.find();

    if (!machineExists) {
      return ({ error: "Nenhuma máquina cadastrada!" })
    }

    return machineExists;
  }

  public async updateData({ nome, image, name, description, model, supervisor, status, health }: MachineData) {
    const machineRepository = getCustomRepository(MachinesRepository);
    const machineInDB = await machineRepository.findOne({ name: nome });

    if (machineInDB) {
      machineRepository.delete(machineInDB);
    }

    const machine = new Machine();
    machine.image = image;
    machine.name = name;
    machine.description = description;
    machine.model = model;
    machine.status = status;
    machine.supervisor = supervisor;
    machine.health = health;

    await machineRepository.save(machine);

    return machine;
  }

  public async searchMachineByName(name: string) {
    const machineRepository = getCustomRepository(MachinesRepository);
    const machineInDB = await machineRepository.findOne({ name: name });

    return machineInDB;
  }
}

export default MachineService;