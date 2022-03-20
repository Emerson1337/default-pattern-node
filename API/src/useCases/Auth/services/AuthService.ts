import { getCustomRepository } from "typeorm";
import UsersRepository from "../../../repositories/UserRepository";

class AuthService {
  async execute({ id }) {
    const userRepository = getCustomRepository(UsersRepository);

    const user = await userRepository.findOne(id)

    if (!user) {
      throw new Error("User doesn't exists!")
    }
  }

}

export default AuthService;