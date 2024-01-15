// Your test file (e.g., template_spec.js)

describe('Deve validar o footer em vivara ', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('url'), {})
  })

  it('Pesquisar Rodapé da Loja', () => {
    cy.searchStoreFooter()
  })
  it('Menu da Seção de Rodapé', () => {
    cy.footerSectionMenu()
  })
  it('Verifica Contêiner de Rodapé', () => {
    cy.footer()
  })
  it('Validar ícones de redes sociais', () => {
    cy.validateSocialIconsVisibility()
  })
  it('Deve validar o Footer logado', () => {
    cy.login_token()
    cy.footerSectionMenu()
  })
})
it('Deve validar o Footer em Life', () => {
  cy.visit(`${Cypress.env('url')}${Cypress.env('life')}`)
  cy.footerSectionMenu()
})
it('Deve validar o Footer em Quiz', () => {
  cy.visit(`${Cypress.env('url')}${Cypress.env('quiz')}`)
  cy.footerSectionMenu()
})
it('Deve validar o Footer em Lili', () => {
  cy.visit(`${Cypress.env('url')}${Cypress.env('lili')}`)
  cy.footerSectionMenu()
})
