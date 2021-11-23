import { Application, Router } from "express";
import { accountController } from "../controller/account";
import { patientController } from "../controller/patient";
import { staffController } from "../controller/staff";
import { userController } from "../controller/user";




const router = Router();
const initialRouter = (app: Application) => {
    router.get('/', (req, res) => {
        res.sendStatus(200);
    });

    //account
    router.post('/register', accountController.register);
    router.post('/login', accountController.login);

    //user
    router.get('/users', userController.getUsers);
    router.post('/user', userController.createUser);
    router.put('/user/:id', userController.updateUser);

    //staff
    router.get('/staffs', staffController.getStaffs);
    router.post('/staff', staffController.createStaff);
    router.put('/staff/:id', staffController.updateStaff);

    //patient
    router.get('/patients', patientController.getPatients);
    router.post('/patient', patientController.createPatient);
    router.put('/patient/:id', patientController.updatePatient);




    router.get('/app');

    return app.use("/api/v1", router);


}

export default initialRouter;