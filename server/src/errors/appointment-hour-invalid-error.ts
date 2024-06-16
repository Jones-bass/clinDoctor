export class InvalidAppointmentTimeError extends Error {
  constructor() {
    super('The appointment time must be made for the next time.')
  }
}
