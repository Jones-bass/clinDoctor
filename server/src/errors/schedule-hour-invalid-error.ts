export class InvalidScheduleTimeError extends Error {
  constructor() {
    super('The schedule time must be made for the next time.')
  }
}
