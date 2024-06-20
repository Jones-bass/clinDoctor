import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { parseISO } from 'date-fns';
import { makeRegisterDoctorScheduleUseCase } from '../../usecases/factories/make-register-schedule-case';
import { AppointmentHourError } from '../../errors/appointment-hour-error';
import { PasteDateError } from '../../errors/past-date-error';
import { InvalidAppointmentTimeError } from '../../errors/appointment-hour-invalid-error';

export async function RegisterDoctorScheduleController(request: FastifyRequest, reply: FastifyReply) {
  const ScheduleSchema = z.object({
    doctorId: z.number(),
    date: z.string(),
  });

  const { doctorId, date } = ScheduleSchema.parse(request.body);
  const parsedDate = parseISO(date);

  try {
    const scheduleUseCase = makeRegisterDoctorScheduleUseCase();

    const { doctorSchedule } = await scheduleUseCase.execute({ 
      doctorId, 
      date: parsedDate 
    });

    return reply.status(200).send({ doctorSchedule });
  } catch (err) {
    if (err instanceof PasteDateError) {
      return reply.status(400).send({ message: err.message });
    } else if (err instanceof AppointmentHourError) {
      return reply.status(400).send({ message: err.message });
    } else if (err instanceof InvalidAppointmentTimeError) {
      return reply.status(400).send({ message: err.message });
    } else {
      return reply.status(500).send({ message: 'Internal Server Error' });
    }
  }
}
