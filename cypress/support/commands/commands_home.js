// cypress/support/commands.js
const homePage = require('../page_elements/home_page')
const homePg = new homePage()

Cypress.Commands.add('iconWhats', () => {
  cy.get(homePg.icon_whats).should('exist').should('be.visible').click()

  cy.get(homePg.open_chatbot_whats).should('exist').should('be.visible')

  cy.get(homePg.chat_bot_text).should(
    'have.text',
    'PRECISA DE AJUDA?Compre com uma vendedoraPERSONAL SHOPPERConsulte status de pedidos ou outras questõesSUPORTE VIVARAX',
  )
  cy.get(homePg.close_chatbot_whats).click()

  cy.get(homePg.fechaicon_whats).click()

  cy.get(homePg.chat_bot_whats).should('not.exist')
})

// Cypress.Commands.add('testResponsiveStyles', () => {
//   cy.get(homePg.label_title)
//     .should('exist')
//     .should('be.visible')
//     .should('have.attr', 'aria-label', 'vivara-logo-image')
//     .should('have.attr', 'title', 'Vivara')

//   cy.get(homePg.btn_search)
//     .should('exist')
//     .should('be.visible')
//     .should('have.text', 'title', 'Vivara')
// })

// Cypress.Commands.add('banner_home_vivara', () => {
//   cy.get(homePg.banner_home)
//     .should('exist')
//     .should('be.visible')
//     .find('video')
//     .as('videoElement')
//     .should(
//       'have.attr',
//       'src',
//       'https://images.vivara.com.br/Stores/vtex/videos/VIVGISELE_NATAL_Full.mp4',
//     )
//     .should('have.attr', 'autoplay')
// })

// Cypress.Commands.add('title_category', () => {
//   cy.get(homePg.title_category)
//     .should('exist')
//     .should('be.visible')
//     .should('contains.text', 'Escolha por categoria')
//     .should('have.css', 'text-transform', 'uppercase')
//     .should('have.css', 'text-align', 'center')
// })
