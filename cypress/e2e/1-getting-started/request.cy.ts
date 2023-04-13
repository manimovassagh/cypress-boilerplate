it('check request', () => {

    cy.request('GET', 'https://jsonplaceholder.typicode.com/todos/1')
        .its('body')
        .should('have.a.property', 'completed')

    //just a chekc
    cy.request('GET', 'https://jsonplaceholder.typicode.com/todos')
        .its("body").each($el => {
            expect($el).to.have.property('completed').and.not.to.be.undefined.and.not.to.be.null
            assert.equal([1, 2, 3].indexOf(4), -1);
        })
    cy.log('<h1>check some markdown</h1>')


})