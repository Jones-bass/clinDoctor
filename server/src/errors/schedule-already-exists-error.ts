export class ScheduleAlreadyExistsError extends Error {
  constructor() {
    super('Schedule unavailable for this date!')
  }
}
