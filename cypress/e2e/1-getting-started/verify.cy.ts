


//verify download in test
it('verify download', () => {
    cy.verifyDownload('picture.png');

    Cypress.on('uncaught:exception', (err, runnable) => {
        cy.verifyDownload('picture.png');
        cy.log('test')
        return false;
    });
});