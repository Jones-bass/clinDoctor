import { FastifyInstance } from 'fastify'
import { RegisterPatientController } from '../modules/patientUser/controller/registerPatientController'
import { ListPatientController } from '../modules/patientUser/controller/listPatientController'
import { authenticateController } from '../modules/patientUser/controller/authenticateController'
import { GetDoctorByIdController, ListDoctorsController } from '../modules/doctor/controller/listDoctorController'
import { ListDoctorScheduleController } from '../modules/doctorSchedule/controller/listDoctorScheduleController'
import { ListPatientSchedulesController } from '../modules/patientUser/controller/ListPatientSchedulesController'

export async function PublicRoutes(app: FastifyInstance) {
  app.post('/patient', RegisterPatientController)
  app.get('/patients', ListPatientController)

  app.post('/sessions', authenticateController)
  app.get('/patients/:patientUserId/schedules', ListPatientSchedulesController);

  app.get('/list-appointment-doctors', ListDoctorScheduleController)

  app.get('/list-doctor', ListDoctorsController)
  app.get('/list-doctor/:doctorId', GetDoctorByIdController)
}
