import { Request, Response } from 'express';
import AuthService from '../../useCases/Auth/services/AuthService';
import UserService from "./services/UserService";

class UserController {
  async listAllEmployees(request: Request, response: Response) {
    const userService = new UserService();
    const allEmployees = await userService.listingAllEmployees();
    const authService = new AuthService();
    const id = response.locals.userId

    authService.execute(id); //apenas verificando se o usuário existe
    return response.json(allEmployees);
  }
}

export default UserController;