import { Prisma, Schedule } from '@prisma/client';

export interface ScheduleRepository {
  create(data: Prisma.ScheduleUncheckedCreateInput): Promise<Schedule>;
  findByDoctorAndDate(doctorId: number, date: Date): Promise<Schedule | null>;
}
