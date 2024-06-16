import { Prisma, Schedule } from '@prisma/client';
import { prisma } from '../../lib/prisma';
import { ScheduleRepository } from '../scheduleRepository';

export class PrismaScheduleRepository implements ScheduleRepository {
  async create(data: Prisma.ScheduleUncheckedCreateInput) {
    const createdSchedule = await prisma.schedule.create({ data });
    return createdSchedule;
  }

  async findByDoctorAndDate(doctorId: number, date: Date): Promise<Schedule | null> {
    return prisma.schedule.findFirst({
      where: {
        doctorId,
        date,
      },
    });
  }
}


