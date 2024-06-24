export class ConnectionsScheduleHourError extends Error {
  constructor() {
    super('You can only create connections between 8am and 5pm.')
  }
}
