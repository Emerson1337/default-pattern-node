import { Router } from 'express';
import CreateUserController from '../controllers/CreateUserController';
import CreateUnitController from '../controllers/CreateUnitController';

const createUserController = new CreateUserController();
const createUnitController = new CreateUnitController();

const router = Router();

//API ROUTES
router.post("/api/signup", createUserController.create);
router.post("/api/create-unit", createUnitController.create);


export default router;