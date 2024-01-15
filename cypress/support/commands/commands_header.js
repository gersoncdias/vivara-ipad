// cypress/support/commands.js
const headerPage = require('../page_elements/header_page')
const headerPg = new headerPage()

Cypress.Commands.add('header_vivara', () => {
  cy.get(headerPg.div_header).should('exist').should('be.visible')

  cy.get(headerPg.menu_mobile).should('exist').should('be.visible')

  cy.get(headerPg.logo_vivara)
    .should('exist')
    .should('have.attr', 'title', 'Vivara')
    .should('have.class', 'logoTop')

  cy.get(headerPg.logo_btn_life)
    .should('exist')
    .should('be.visible')
    .should('have.css', 'background-color')
    .then((backgroundColor) => {
      const rgbColor = backgroundColor.replace(/\s/g, '')
      expect(rgbColor).to.equal('rgb(240,240,240)')
    })

  cy.get(headerPg.search)
    .should('exist')
    .should('be.visible')
    .should('contain.text', 'Buscar')

  cy.get(headerPg.cart_toggle).should('exist').should('be.visible')

  cy.get(headerPg.regionalize)
    .should('exist')
    .should('be.visible')
    .should('have.text', 'Informar meu CEP')
    .trigger('mouseover')

  cy.get(headerPg.modal_regionalize).should('exist').should('be.visible')
  cy.get(headerPg.close_modal_regionalize).click()
})

Cypress.Commands.add('topbar_vivara', () => {
  cy.get(headerPg.topbar_vivara)
    .should('exist')
    .should('be.visible')
    .should('have.css', 'background-color', 'rgb(240, 156, 117)')

  cy.get(headerPg.close_topbar_vivara).click()

  cy.get(headerPg.topbar_vivara).should('not.be.visible')
})
