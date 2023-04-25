it('dopple option', () => {

    //go to base url with /about page
cy.visit('https://testautomationpractice.blogspot.com/')

    //click on dopple option
    cy.get('#HTML9 > div.widget-content > select').select('Dopple')
    cy.log('checkpoint')

})

