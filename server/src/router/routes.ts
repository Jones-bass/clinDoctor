import { FastifyInstance } from 'fastify';
import { RegisterPatientController } from '../controller/registerPatientController';

export async function eventRoutes(app: FastifyInstance) {
  app.post('/pacient', RegisterPatientController);
}
