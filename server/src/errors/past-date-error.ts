export class PasteDateError extends Error {
  constructor() {
    super('You cant create an appointment on a past date.')
  }
}
