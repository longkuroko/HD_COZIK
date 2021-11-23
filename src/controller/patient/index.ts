import { createPatient } from "./createPatient";
import { getPatients } from "./getPatients";
import { updatePatient } from "./updatePatient";


export const patientController = {
    createPatient: createPatient,
    getPatients: getPatients,
    updatePatient: updatePatient

}