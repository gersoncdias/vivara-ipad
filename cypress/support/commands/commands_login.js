const loginPage = require('../page_elements/login_page')
const loginPg = new loginPage()

Cypress.Commands.add('login', (user, password) => {
  const login = () => {
    cy.get(loginPg.campo_login).should('exist').should('be.visible').type(user)

    cy.get(loginPg.campo_senha)
      .should('exist')
      .should('be.visible')
      .type(password, { log: false })

    cy.get(loginPg.btn_login).should('exist').should('be.visible').click()
    cy.get(loginPg.btn_use_icon).should('exist').should('be.visible').click()
    cy.get(loginPg.user_info)
      .should('exist')
      .should('be.visible')
      .should('have.text', 'Olá,GERSON!')
  }

  login()
})

Cypress.Commands.add('readCookieToFile', () => {
  const pathFile = Cypress.config('fileServerFolder') + '/tokenFile.txt'

  return cy.readFile(pathFile).then((fileContent) => {
    const parsedContent = JSON.parse(fileContent)
    return parsedContent['VtexIdclientAutCookie_lojavivara']
  })
})

Cypress.Commands.add('writeCookieToFile', (cookieName, fileName) => {
  cy.getCookie(cookieName).then((cookie) => {
    if (cookie) {
      const cookieValue = cookie.value
      cy.writeFile(fileName, JSON.stringify({ [cookieName]: cookieValue }))
    }
  })
})

Cypress.Commands.add('login_token', () => {
  const cookieName = 'VtexIdclientAutCookie_lojavivara'
  const filePath = Cypress.config('fileServerFolder') + '/tokenFile.txt'

  cy.readFile(filePath, { log: false }).then((fileContent) => {
    const tokenValue = fileContent.trim()
    cy.setCookie(cookieName, tokenValue, { log: false }).then(() => {
      cy.visit(Cypress.env('url'))
    })
  })
})
