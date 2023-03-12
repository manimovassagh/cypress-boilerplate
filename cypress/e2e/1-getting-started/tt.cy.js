/// <reference types="cypress" />

it('check js', () => {
   
    cy.visit("/")
    cy.intercept('/', (req) => {
        req.continue(res => {
         cy.log(res.body)
         cy.log('**Test**')
         cy.step('check it ')
        })
      })

   });