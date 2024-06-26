import { FastifyInstance } from 'fastify'
import { RegisterDoctorController } from '../modules/doctor/controller/registerDoctorController'
import { RegisterDoctorScheduleController } from '../modules/doctorSchedule/controller/registerDoctorScheduleController'
import { ListConnectionsScheduleController } from '../modules/connection/controller/listConnectionsScheduleController'
import { RegisterConnectionsScheduleController } from '../modules/connection/controller/registerConnectionsSchedule'
import { verifyJwt } from '../middlewares/verify-jwt'

export async function AuthenticatedRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJwt)

  app.post('/doctor', RegisterDoctorController)

  app.post('/schedule', RegisterDoctorScheduleController)

  app.post('/connection', RegisterConnectionsScheduleController)
  app.get('/connection', ListConnectionsScheduleController)
}
