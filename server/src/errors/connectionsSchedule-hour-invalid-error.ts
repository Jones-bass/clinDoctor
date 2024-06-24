export class InvalidConnectionsScheduleTimeError extends Error {
  constructor() {
    super('The connection time must be made for the next time.')
  }
}
