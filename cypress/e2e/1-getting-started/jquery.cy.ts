it('test jquery', () => {
    cy.visit('/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('*[id^="add-to-cart"]').then(($button) => {
        // do anything we want with <button>
        expect($button).to.contain('Add to cart')
        expect($button.hasClass('btn btn_primary btn_small btn_inventory')).to.be.exist
        expect($button).to.have.class('btn btn_primary btn_small btn_inventory')
            .not.to.be.disabled
        cy.log(JSON.stringify($button.css.name))

        //.and('match', /serif/)
    })

    cy.get('*[id^="add-to-cart"]')
        .then(($button) => {

            expect($button.last()).to.contain('Add')
            expect($button.first()).to.contain('Add')
            expect($button.first())

        })

    cy.get('*[id^="add-to-cart"]').should(($buttons) => {
        expect($buttons.eq(0)).not.to.be.disabled


    })
    cy.get('*[id^="add-to-cart"]').invoke('attr', 'id').should('match', /add/)


});