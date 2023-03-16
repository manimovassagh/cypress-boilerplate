it('test jquery', () => {
    cy.visit('/')
    cy.get('[data-test="username"]').realHover()

    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="password"]')
    Cypress._.isArray()
    cy.get('[data-test="login-button"]').click()
    cy.get('button').should('have.length', 8).filter((fn, el) => {
        return (
            el.classList.contains('btn')
        )


    }).should('have.length', 6)
    // cy.get('*[id^="add-to-cart"]').then(($button) => {
    //     // do anything we want with <button>
    //     expect($button).to.contain('Add to cart')
    //     expect($button.hasClass('btn btn_primary btn_small btn_inventory')).to.be.exist
    //     expect($button).to.have.class('btn btn_primary btn_small btn_inventory')
    //         .not.to.be.disabled
    //     cy.log(JSON.stringify($button.css.name))

    //     //.and('match', /serif/)
    // })

    // cy.get('*[id^="add-to-cart"]')
    //     .then(($button) => {

    //         expect($button.last()).to.contain('Add')
    //         expect($button.first()).to.contain('Add')
    //         expect($button.first())

    //     })

    // cy.get('*[id^="add-to-cart"]').should(($buttons) => {
    //     expect($buttons.eq(0)).not.to.be.disabled


    // })
    // cy.get('*[id^="add-to-cart"]').invoke('attr', 'id').should('match', /add/)

    // cy.get('*[id^="add-to-cart"]').its('length').should('eq', 6)
    // cy.get('*[id^="add-to-cart"]')
    //     .first()
    //     .should('have.text', 'Add to cart')
    //     .prevAll({ log: true })

    // cy.get('*[id^="add-to-cart"]').siblings()
    // const url = Cypress.config().baseUrl
    // cy.log(url as string)
    // cy.window()
    // cy.window().then((win) => {
    //     cy.log(win.location.href)
    // })
    // cy.get('*[id^="add-to-cart"]').each($el => {
    //     expect($el).to.have.class('btn')
    // })


});


