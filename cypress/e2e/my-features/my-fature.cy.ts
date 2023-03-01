import { Home } from '../../../pages/Home';
/// <reference types="cypress" />



describe('example to-do app', () => {
    beforeEach(() => {

   const home = new Home()
   home.visitGoogle()
    })

    it('displays two todo items by default', () => {
        cy.get('#L2AGLb > .QS5gu').click()
        cy.get('.gLFyf') .should('be.visible').type('some items {enter} ')
        cy.get('#Rzn5id > div > a:nth-child(2)').should('be.visible').click()
      })


  })
  