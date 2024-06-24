export class NoAppointmentFoundError extends Error {
  constructor() {
    super('No appointment found for the given schedule and patient.')
  }
}
