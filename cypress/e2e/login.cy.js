const user = Cypress.env('user_name')
const password = Cypress.env('user_password')
let vivaraSessionCookie

describe('Login Test', () => {
  afterEach(() => {
    Cypress.env('vivaraSessionCookie', vivaraSessionCookie)
  })

  it('Login', () => {
    cy.visit(Cypress.env('url') + '/login')
    cy.login(user, password)
    cy.login_token()
  })

  it('Login token', () => {
    cy.visit(Cypress.env('url'))
    cy.login_token()
  })
})
