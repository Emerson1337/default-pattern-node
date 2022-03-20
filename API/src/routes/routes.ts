import { Router } from 'express';
import { AuthMiddleware } from '../middlewares/auth';
import CreateUserController from '../useCases/Auth/CreateUserController';
import UserController from '../useCases/Users/UserController';


const createUserController = new CreateUserController();
const userController = new UserController();


const router = Router();

//API ROUTES
//AUTH AND OTHER THINS ABOUT USER
router.post("/api/signup", createUserController.create);
router.post("/api/login", createUserController.login);
router.post("/api/list-all-employees", AuthMiddleware, userController.listAllEmployees);

export default router;