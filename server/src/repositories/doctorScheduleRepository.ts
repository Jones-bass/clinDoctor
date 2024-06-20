import { Prisma, DoctorSchedule } from '@prisma/client';

export interface DoctorScheduleRepository {
  create(data: Prisma.DoctorScheduleUncheckedCreateInput): Promise<DoctorSchedule>;
  findByDoctorAndDate(doctorId: number, date: Date): Promise<DoctorSchedule | null>;
  findAllDoctorSchedule(): Promise<DoctorSchedule[]>;
}
