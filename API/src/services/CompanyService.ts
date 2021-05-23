import { getCustomRepository } from "typeorm";
import Company from "../models/Company";
import CompanyRepository from "../repositories/CompanyRepository";
import Unit01Repository from "../repositories/Unit01Repository";
import Unit02Repository from "../repositories/Unit02Repository";
import UsersRepository from "../repositories/UserRepository";

interface CompanyData {
  name: string;
  units?: [];
  users?: [];
}

class CompanyService {
  public async CreateCompany({ name, units, users }: CompanyData) {
    const companyRepository = getCustomRepository(CompanyRepository);

    const company = await companyRepository.findOne({ name });

    if (company) {
      return ({
        error: "This company already registered!"
      })
    }
    if (units) {
      const unit01Repository = getCustomRepository(Unit01Repository);
      const unit01Exists = await unit01Repository.findOne({ id: units })
      console.log(unit01Exists);
      const unit02Repository = getCustomRepository(Unit02Repository);
      const unit02Exists = await unit02Repository.findOne({ id: units });
      console.log(unit02Exists);

      // if (!unit01Exists && !unit02Exists) {
      //   return ({
      //     error: "Unit doesn't exists!"
      //   })
      // }
    }
    if (users) {
      const usersRepository = getCustomRepository(UsersRepository);
      const user = await usersRepository.findOne({ id: users });
      console.log(user);

      if (!user) {
        return ({
          error: "User doesn't exists!"
        })
      }
      const companyHasUser = await companyRepository.findOne({ users });
      if (companyHasUser) {
        return ({
          error: "This user already registered on this company!"
        })
      }
    }



    const companyDB = new Company();

    companyDB.name = name;
    companyDB.units = units;
    companyDB.users = users;

    companyRepository.save(companyDB);

    return companyDB;
  }

  public async listingCompanies() {
    const companyRepository = getCustomRepository(CompanyRepository);
    const companies = (await companyRepository.find())
    return companies;
  }

  // public async updateCompany({ nome, image, name, description, model, supervisor, status, health }: MachineData) {
  //   const machineRepository = getCustomRepository(CompanyRepository);
  //   const machineInDB = await machineRepository.findOne({ name: nome });

  //   if (machineInDB) {
  //     machineRepository.delete(machineInDB);
  //   }

  //   const machine = new Company();
  //   machine.image = image;
  //   machine.name = name;
  //   machine.description = description;
  //   machine.model = model;
  //   machine.status = status;
  //   machine.supervisor = supervisor;
  //   machine.health = health;

  //   await machineRepository.save(machine);

  //   return machine;
  // }
}

export default CompanyService;