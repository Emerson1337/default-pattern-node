import { Router } from 'express';
import CreateUserController from '../controllers/CreateUserController';
import CreateUnitController from '../controllers/CreateUnitController';
import CreateMachineController from '../controllers/CreateMachineController';

const createUserController = new CreateUserController();
const createUnitController = new CreateUnitController();
const createMachineController = new CreateMachineController();

const router = Router();

//API ROUTES
router.post("/api/signup", createUserController.create);
router.post("/api/create-unit", createUnitController.executeUni01);
router.post("/api/create-unit2", createUnitController.executeUni02);

router.post("/api/create-machine", createMachineController.create);
router.post("/api/listing-machines", createMachineController.listingMachines);
router.post("/api/listing-all-machines", createMachineController.listingAllMachines);






export default router;