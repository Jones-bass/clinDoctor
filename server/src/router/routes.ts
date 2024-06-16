import { FastifyInstance } from 'fastify';
import { RegisterPatientController } from '../controller/registerPatientController';
import { RegisterDoctorController } from '../controller/registerDoctorController';
import { RegisterScheduleController } from '../controller/registerScheduleController';

export async function eventRoutes(app: FastifyInstance) {
  app.post('/pacient', RegisterPatientController);

  app.post('/doctor', RegisterDoctorController);

  app.post('/schedule', RegisterScheduleController);

}
