import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeRegisterAppoitmentUseCase } from '../../usecases/factories/make-register-appoitment-case';
import { parseISO } from 'date-fns';
import { AppointmentAlreadyExistsError } from '../../errors/email-already-exists-error';
import { AppointmentHourError } from '../../errors/appointment-hour-error';

export async function RegisterAppointment(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const createAppointmentParamsSchema = z.object({
    scheduleId: z.number(),
    patientId: z.number(),
    date: z.string(),
  });

  const { scheduleId, patientId, date } = createAppointmentParamsSchema.parse(request.body);
  const parsedDate = parseISO(date);

  const appointmentUseCase = makeRegisterAppoitmentUseCase();

  try {
    const appointment = await appointmentUseCase.execute({
      scheduleId,
      patientId,
      date: parsedDate 
    });

    return reply.status(200).send({
      appointment,
    });
  } catch (err) {
    if (err instanceof AppointmentAlreadyExistsError) {
      return reply.status(400).send({ message: err.message });
    } else if (err instanceof AppointmentHourError) {
      return reply.status(400).send({ message: err.message });
    } else {   
    return reply.status(500).send({ error: 'Internal Server Error' });
    }
  }
}
