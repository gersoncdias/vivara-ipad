describe('Deve validar o Header Vivara', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('url'), {})
  })
  it('Em Vivara', () => {
    cy.header_vivara()
    cy.topbar_vivara()
  })
  it('Em Vivara Logado', () => {
    cy.login_token()
    cy.header_vivara()
    cy.topbar_vivara()
  })
})
it('Em Quiz', () => {
  cy.visit(`${Cypress.env('url')}${Cypress.env('quiz')}`)
  cy.header_vivara()
  cy.topbar_vivara()
})
it('Em Relogio', () => {
  cy.visit(`${Cypress.env('url')}${Cypress.env('relogio')}`)
  cy.header_vivara()
  cy.topbar_vivara()
})
