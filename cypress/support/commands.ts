
declare namespace Cypress {
    interface Chainable<Subject> {
        generateToken(secret: any): Cypress.Chainable<void>;
        some(): Cypress.Chainable<void>;
        login(): Cypress.Chainable<void>;
        selector(param: string): Cypress.Chainable<void>;
        xpath(xpath: string): Cypress.Chainable<void>;
    }
}

function generateToken(secret: any): void {
    // Generate token
}

Cypress.Commands.add('generateToken', generateToken);
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login' as any, (email, password) => {
    cy.log('Login is working')
})
Cypress.Commands.add('selector' as any, (email, password) => {
    cy.log('Login is working')
})

Cypress.Commands.add('some' as any, (email, password) => {
    cy.log('ltt is working')
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

