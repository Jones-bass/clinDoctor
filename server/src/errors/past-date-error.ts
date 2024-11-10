export class PasteDateError extends Error {
  constructor() {
    super('Você não pode criar um compromisso em uma data anterior.')
  }
}
