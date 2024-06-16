import { FastifyInstance } from 'fastify';
import { RegisterPatientController } from '../controller/patient/registerPatientController';
import { RegisterDoctorController } from '../controller/doctor/registerDoctorController';
import { RegisterScheduleController } from '../controller/schedule/registerScheduleController';

export async function eventRoutes(app: FastifyInstance) {
  app.post('/patient', RegisterPatientController);

  app.post('/doctor', RegisterDoctorController);

  app.post('/schedule', RegisterScheduleController);

}
