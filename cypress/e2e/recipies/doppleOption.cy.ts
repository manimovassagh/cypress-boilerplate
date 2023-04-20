it('dopple option', () => {
    //selector
    cy.get('#states + .select2')
        .contains('.select2-selection__choice', 'Connecticut')
        .find('.select2-selection__choice__remove').click()

    cy.get('a').screenshot()
});