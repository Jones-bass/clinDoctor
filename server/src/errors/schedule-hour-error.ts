export class ScheduleHourError extends Error {
  constructor() {
    super('You can only create schedule between 8am and 5pm.')
  }
}
