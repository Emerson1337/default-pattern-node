import { Router } from 'express';
import CreateUserController from '../controllers/CreateUserController';
import CreateUnitController from '../controllers/CreateUnitController';
import CreateMachineController from '../controllers/CreateMachineController';
import UnitManageController from '../controllers/UnitManageController';

const createUserController = new CreateUserController();
const createUnitController = new CreateUnitController();
const createMachineController = new CreateMachineController();
const unitManagerController = new UnitManageController();

const router = Router();

//API ROUTES
//AUTH AND OTHER THINS ABOUT USER
router.post("/api/signup", createUserController.create);
router.post("/api/create-unit", createUnitController.executeUni01);
router.post("/api/create-unit2", createUnitController.executeUni02);
router.post("/api/login", createUserController.login);

//CONFIG MACHINES
router.post("/api/create-machine", createMachineController.create);
router.post("/api/listing-machines", createMachineController.listingMachines);
router.post("/api/listing-all-machines", createMachineController.listingAllMachines);

//CONFIG UNITS (ADD, REMOVE and LIST USERS/MACHINES)
router.post("/api/add-machine-on-unit", unitManagerController.addMachineToUnit01);
export default router;