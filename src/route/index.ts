import { Application, Router } from "express";
import { accountController } from "../controller/account";
import { patientController } from "../controller/patient";
import { staffController } from "../controller/staff";
import { userController } from "../controller/user";
import auth from "../middleware/auth.middleware";




const router = Router();
const initialRouter = (app: Application) => {
    router.get('/', (req, res) => {
        res.sendStatus(200);
    });

    //account
    router.post('/register', accountController.register);
    router.post('/login', accountController.login);
    router.get('/accounts',accountController.getAccounts);
    router.get('/me', auth, accountController.me);

    //user
    router.get('/users',auth ,userController.getUsers);
    router.post('/user', userController.createUser);
    router.put('/user/:id', auth,userController.updateUser);

    //staff
    router.get('/staffs', auth, staffController.getStaffs);
    router.post('/staff',auth,  staffController.createStaff);
    router.put('/staff/:id',auth, staffController.updateStaff);

    //patient
    router.get('/patients', auth,patientController.getPatients);
    router.post('/patient', auth,patientController.createPatient);
    router.put('/patient/:id', auth,patientController.updatePatient);




    router.get('/app');

    return app.use("/", router);


}

export default initialRouter;