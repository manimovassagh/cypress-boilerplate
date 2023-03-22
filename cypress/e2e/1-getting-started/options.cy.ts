it('test options', () => {
    cy.log('options is working')
    cy.visit('/')
    let index;

    cy.get('select').find('option').then(($option) => {
        index = Cypress._.findIndex(
            $option,
            (el) => el.getAttribute('value') === 'saab'
        )
        cy.log(index)
        cy.get('select').select(index)
    })


    //cy.get('select').select(index)
});