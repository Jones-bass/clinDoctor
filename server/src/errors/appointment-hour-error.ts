export class AppointmentHourError extends Error {
  constructor() {
    super('You can only create appointments between 8am and 5pm.')
  }
}
