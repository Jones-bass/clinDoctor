export class AppointmentAlreadyExistsError extends Error {
  constructor() {
    super('Appointment unavailable for this date!')
  }
}
