describe('check register route', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/register')
    cy.get('[data-cy="button-signup"]').click()

  })
})
describe('check login route', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/login')

  })
})
describe('fetch container', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/login')

  })
})
describe('check homepage route', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')

  })
})
describe('check form daisi route', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/form-daisi')

  })
})
