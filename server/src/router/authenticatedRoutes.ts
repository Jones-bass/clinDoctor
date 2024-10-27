import { FastifyInstance } from 'fastify'
import { RegisterDoctorController } from '../modules/doctor/controller/registerDoctorController'
import { RegisterDoctorScheduleController } from '../modules/doctorSchedule/controller/registerDoctorScheduleController'
import { verifyJwt } from '../middlewares/verify-jwt'

export async function AuthenticatedRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJwt)

  app.post('/doctor', RegisterDoctorController)

  app.post('/doctor-schedule', RegisterDoctorScheduleController)

}
