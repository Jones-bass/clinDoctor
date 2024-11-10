export class ScheduleAlreadyExistsError extends Error {
  constructor() {
    super('Horário indisponível para esta data!')
  }
}
