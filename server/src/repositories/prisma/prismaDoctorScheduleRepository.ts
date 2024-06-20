import { Prisma, DoctorSchedule } from '@prisma/client';
import { prisma } from '../../lib/prisma';
import { DoctorScheduleRepository } from '../doctorScheduleRepository';

export class PrismaDoctorScheduleRepository implements DoctorScheduleRepository {
  async create(data: Prisma.DoctorScheduleUncheckedCreateInput) {
    const createdSchedule = await prisma.doctorSchedule.create({ data });
    return createdSchedule;
  }

  async findByDoctorAndDate(doctorId: number, date: Date): Promise<DoctorSchedule | null> {
    return prisma.doctorSchedule.findFirst({
      where: {
        doctorId,
        date,
      },
    });
  }
  async findAllDoctorSchedule(): Promise<DoctorSchedule[]> {
    const findDoctorSchedule = await prisma.doctorSchedule.findMany();
    return findDoctorSchedule;
  }
}


