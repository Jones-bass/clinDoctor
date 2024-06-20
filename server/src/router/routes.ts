import { FastifyInstance } from 'fastify';
import { RegisterPatientController } from '../controller/patient/registerPatientController';
import { ListPatientController } from '../controller/patient/listPatientController';
import { ListDoctorsController } from '../controller/doctor/listDoctorController';
import { RegisterDoctorController } from '../controller/doctor/registerDoctorController';
import { RegisterDoctorScheduleController } from '../controller/doctorSchedule/registerDoctorScheduleController';
import { RegisterAppointmentController } from '../controller/appoitment/registerAppoitment';
import { ListAppointmentsController } from '../controller/appoitment/listAppointmentsController';
import { ListDoctorScheduleController } from '../controller/doctorSchedule/listDoctorScheduleController';

export async function eventRoutes(app: FastifyInstance) {
  app.post('/patient', RegisterPatientController);
  app.get('/patients', ListPatientController);

  app.post('/doctor', RegisterDoctorController);
  app.get('/doctors', ListDoctorsController);

  app.post('/schedule', RegisterDoctorScheduleController);
  app.get('/schedule', ListDoctorScheduleController);

  app.post('/appointment', RegisterAppointmentController);
  app.get('/appointment', ListAppointmentsController);
}
