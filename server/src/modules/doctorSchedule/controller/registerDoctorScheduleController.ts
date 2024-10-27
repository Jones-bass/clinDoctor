import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { parseISO } from 'date-fns'
import { makeRegisterDoctorScheduleUseCase } from '../usecases/factories/make-register-schedule-case'
import { PasteDateError } from '../../../errors/past-date-error'
import { ScheduleHourError } from '../../../errors/schedule-hour-error'
import { InvalidScheduleTimeError } from '../../../errors/schedule-hour-invalid-error'

export async function RegisterDoctorScheduleController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const ScheduleSchema = z.object({
    doctorId: z.string(),
    patientUserId: z.string(),
    time: z.string(),
  })

  const { doctorId, patientUserId, time } = ScheduleSchema.parse(request.body)
  const parsedDate = parseISO(time)

  try {
    const scheduleUseCase = makeRegisterDoctorScheduleUseCase()

    const { doctorSchedule } = await scheduleUseCase.execute({
      doctorId,
      patientUserId,
      time: parsedDate,
    })

    return reply.status(200).send({ doctorSchedule })
  } catch (err) {
    if (err instanceof PasteDateError) {
      return reply.status(400).send({ message: err.message })
    } else if (err instanceof ScheduleHourError) {
      return reply.status(400).send({ message: err.message })
    } else if (err instanceof InvalidScheduleTimeError) {
      return reply.status(400).send({ message: err.message })
      } else {
      return reply.status(500).send({ message: 'Internal Server Error' })
    }
  }
}
