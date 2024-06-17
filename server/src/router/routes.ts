import { FastifyInstance } from 'fastify';
import { RegisterPatientController } from '../controller/patient/registerPatientController';
import { ListPatientController } from '../controller/patient/listPatientController';
import { ListDoctorsController } from '../controller/doctor/listDoctorController';
import { RegisterDoctorController } from '../controller/doctor/registerDoctorController';
import { RegisterScheduleController } from '../controller/schedule/registerScheduleController';

export async function eventRoutes(app: FastifyInstance) {
  app.post('/patient', RegisterPatientController);
  app.get('/patients', ListPatientController);

  app.post('/doctor', RegisterDoctorController);
  app.get('/doctors', ListDoctorsController);

  app.post('/schedule', RegisterScheduleController);

}
