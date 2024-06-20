import { Appointment, Prisma } from '@prisma/client';
import { prisma } from '../../lib/prisma';
import { AppointmentRepository } from '../appoitment-repository';

export class PrismaAppointmentRepository implements AppointmentRepository {
    async createAppointment(data: Prisma.AppointmentCreateInput): Promise<Appointment> {
        const createdAppointment = await prisma.appointment.create({ data });
        return createdAppointment;
    }

    async findByPatientId(patientId: number): Promise<Appointment | null> {
        const appointment = await prisma.appointment.findFirst({
            where: {
                patientId: patientId,
            },
        });
        return appointment;
    }

    async findAllAppointments(): Promise<Appointment[]> {
        const findAppointment = await prisma.appointment.findMany();
        return findAppointment;
      }
}
