import { Request, Response } from 'express';
import AuthService from '../services/AuthService';
import CompanyService from '../services/CompanyService';

class CompanyController {
  async create(request: Request, response: Response) {
    const { name, units, users } = request.body;

    const authService = new AuthService();
    const id = response.locals.userId
    await authService.execute(id); //apenas verificando se o usuário existe

    const companyService = new CompanyService();
    const company = await companyService.CreateCompany({ name, units, users });

    return response.status(200).json(company);
  }

  async listingCompanies(request: Request, response: Response) {
    const companyService = new CompanyService();

    const authService = new AuthService();
    const id = response.locals.userId
    await authService.execute(id); //apenas verificando se o usuário existe

    const companies = await companyService.listingCompanies();

    return response.status(200).send(companies);
  }

  // public async updateCompany({ nome, image, name, description, model, supervisor, status, health }: MachineData) {
  //   const machineRepository = getCustomRepository(MachinesRepository);
  //   const machineInDB = await machineRepository.findOne({ name: nome });

  //   if (machineInDB) {
  //     machineRepository.delete(machineInDB);
  //   }

  //   const machine = new Machine();
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

export default CompanyController;