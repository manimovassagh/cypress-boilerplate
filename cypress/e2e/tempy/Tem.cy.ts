



describe('My First Test', () => {
    it.only('finds the content "type"', () => {
        cy.visit('https://example.cypress.io')

        cy.contains('type')
        cy.get('body').should('not.contain', 'hype')
        cy.contains('type').click()
        cy.url().should('contains', '/commands/actions')
        cy.url().should('include', '/commands/actions')

    })
})