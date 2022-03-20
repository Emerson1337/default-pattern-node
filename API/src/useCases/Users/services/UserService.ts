import { getCustomRepository } from "typeorm";
import UsersRepository from "../../../repositories/UserRepository";

class UserService {
  async listingAllEmployees() {
    const usersRepository = getCustomRepository(UsersRepository);
    const users = await usersRepository.find();

    if (!users) {
      return ({ message: "We don't have any employees registereds!" })
    }

    users.map(users => users.password = undefined);
    return users;
  }

}

export default UserService;