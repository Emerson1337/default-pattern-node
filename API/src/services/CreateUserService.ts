import { hash } from "bcrypt";
import { getCustomRepository, getMongoRepository } from "typeorm";
import UsersRepository from "../repositories/UserRepository";

interface UserData {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: UserData) {
    const userRepository = getCustomRepository(UsersRepository);

    const userAlreadyExists = await userRepository.findOne({ email });

    if (userAlreadyExists) {
      throw new Error("Email has already been registered!");
    }

    const passwordEncrypted = await hash(password, 8);

    const user = userRepository.create({
      name,
      email,
      password: passwordEncrypted,
    });

    await userRepository.save(user);

    return user;
  }
}

export default CreateUserService;