describe('Interaction with DB', () => {

    it('reset Database', () => {
        // in test
        cy.task('resetDatabase')
    });
})