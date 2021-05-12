import { Router } from 'express';
import CreateUserController from '../controllers/CreateUserController';


const createUserController = new CreateUserController();

const router = Router();

//API ROUTES
router.post("/api/signup", createUserController.create);

export default router;