import { FastifyInstance } from 'fastify';
import { RegisterPatientController } from '../controller/registerPatientController';
import { RegisterDoctorController } from '../controller/registerDoctorController';

export async function eventRoutes(app: FastifyInstance) {
  app.post('/pacient', RegisterPatientController);

  app.post('/doctor', RegisterDoctorController);
}
