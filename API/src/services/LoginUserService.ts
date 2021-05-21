import '../env/.env';
import { getCustomRepository, getMongoRepository } from "typeorm";
import UsersRepository from "../repositories/UserRepository";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

interface UserData {
  email: string;
  password: string;
}

class LoginUserService {
  public async execute({ email, password }: UserData) {
    const userRepository = getCustomRepository(UsersRepository);

    const userFromDB = await userRepository.findOne({ email });

    function generateToken(params = {}) {
      return jwt.sign(params, 'bananas', {
        expiresIn: 86400
      })
    }

    if (!userFromDB) {
      return ({
        message: 'user is not found!'
      })
    }

    if (!await bcrypt.compare(password, userFromDB.password)) {
      return ({
        message: 'wrong credentials'
      })
    }

    const token = generateToken({ id: userFromDB.id });

    return token;
  }
}

export default LoginUserService;