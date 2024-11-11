import { Prisma, DoctorSchedule } from '@prisma/client'

export interface ScheduleWithDoctor {
  id: string;
  doctorId: string;
  time: Date;
  createdAt: Date;
  patientUserId: string;
  doctor: {
    id: string;
    name: string;
    speciality: string;
    price: number;
    city: string;
    state: string;
    description: string;
    experience: string;
    createdAt: Date;
  };
}

export interface DoctorScheduleAvailability {
  doctorId: string;
  day: string;
  month: string;
  year: string;
}

export interface DoctorScheduleRepository {
  create(data: Prisma.DoctorScheduleUncheckedCreateInput): Promise<DoctorSchedule>
  findByDoctorAndDate(doctorId: string, time: Date, patientUserId: string ): Promise<DoctorSchedule | null>
  findAllDoctorSchedule(): Promise<DoctorSchedule[]>
  updateAvailability( scheduleId: string ): Promise<DoctorSchedule>
  findSchedulesByPatientUserId(patientUserId: string): Promise<ScheduleWithDoctor[]>
  findByPatientUserIdAndTime(patientUserId: string, time: Date): Promise<DoctorSchedule | null>
  findAllInDayFromDoctor({ doctorId, month, day, year }: DoctorScheduleAvailability): Promise<DoctorSchedule[]> 
}
