export class ConnectionsScheduleAlreadyExistsError extends Error {
  constructor() {
    super('Connection unavailable for this date!')
  }
}
