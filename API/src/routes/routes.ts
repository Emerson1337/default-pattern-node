import { Router } from 'express';
import CreateUserController from '../controllers/CreateUserController';
import CreateUnitController from '../controllers/CreateUnitController';
import MachineController from '../controllers/MachineController';
import UnitManageController from '../controllers/UnitManageController';
import UserController from '../controllers/UserController';
import { AuthMiddleware } from '../middlewares/auth';
import CompanyController from '../controllers/CompanyController';


const createUserController = new CreateUserController();
const createUnitController = new CreateUnitController();
const machineController = new MachineController();
const unitManagerController = new UnitManageController();
const userController = new UserController();
const companyController = new CompanyController();


const router = Router();

//API ROUTES
//AUTH AND OTHER THINS ABOUT USER
router.post("/api/signup", createUserController.create);
router.post("/api/create-unit-01", AuthMiddleware, createUnitController.executeUni01);
router.post("/api/create-unit-02", AuthMiddleware, createUnitController.executeUni02);
router.post("/api/login", createUserController.login);
router.post("/api/list-all-employees", AuthMiddleware, userController.listAllEmployees);

//CONFIG COMPANY
router.post("/api/create-company", AuthMiddleware, companyController.create);
router.post("/api/listing-companies", AuthMiddleware, companyController.listingCompanies);


//CONFIG MACHINES
router.post("/api/create-machine", AuthMiddleware, machineController.create);
router.post("/api/listing-machines", AuthMiddleware, machineController.listingMachines);
router.post("/api/listing-all-machines", AuthMiddleware, machineController.listingAllMachines);
router.post("/api/update-machine/:id", AuthMiddleware, machineController.updateData);
router.post("/api/update-supervisor/:id", AuthMiddleware, machineController.updateSupervisor);


//CONFIG UNITS (ADD, REMOVE and LIST USERS/MACHINES)
router.post("/api/add-machine-on-unit-01", AuthMiddleware, unitManagerController.addMachineToUnit01);
router.post("/api/add-machine-on-unit-02", AuthMiddleware, unitManagerController.addMachineToUnit02);
router.post("/api/list-units", AuthMiddleware, unitManagerController.listingAllUnits);

export default router;