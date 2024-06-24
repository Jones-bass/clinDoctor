export class AppointmentAlreadyExistsError extends Error {
  constructor() {
    super('Appointment already exists!')
  }
}
