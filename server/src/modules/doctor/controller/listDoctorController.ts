import { FastifyReply, FastifyRequest } from 'fastify'
import { makeListDoctorsUseCase } from '../usecases/factories/make-list-doctor-case'

interface RequestParams {
  doctorId: string
}


export async function ListDoctorsController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const listDoctorsUseCase = makeListDoctorsUseCase()

  const { doctors } = await listDoctorsUseCase.execute()

  return reply.status(200).send({ doctors })
}

export async function GetDoctorByIdController(
  request: FastifyRequest<{ Params: RequestParams }>,
  reply: FastifyReply,
) {
  const { doctorId } = request.params;
  const getDoctorByIdUseCase = makeListDoctorsUseCase();

  const doctor = await getDoctorByIdUseCase.execute(doctorId);

  if (!doctor) {
    return reply.status(404).send({ message: 'Doctor not found' });
  }

  return reply.status(200).send({ doctor });
}
