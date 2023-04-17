import spok from 'cy-spok'

const props = ['firstName', 'lastName', 'Zip', 'Birthday', 'Points', 'Average', 'Amount']
it('confirms the a row', { baseUrl: 'https://tablepress.org/demo/' }, function () {
    cy.visit('/')
    cy.get('table tbody tr')
        .find('td')
        .map('innerText')
        .print()
        .partial(Cypress._.zipObject, props)
        .should(spok({
            firstName: 'Gloria',
            Zip: spok.test(/^\d{5}$/),
            Birthday: Cypress._.isString,
        }))
    // cy.contains('table tbody tr', 'Dave')
    //     .find('td')
    //     .map('innerText')
    //     .print()
    //     .partial(Cypress._.zipObject, props)
    //     .print()
    //     .update('age', Number)
    //     .should(
    //         spok({
    //             name: 'Dave',
    //             age: spok.range(10, 19),
    //             date: spok.test(/^\d\d\d\d-\d\d-\d\d$/),
    //         }),
    //     )
})
//test it
it.only('confirms the a row', { baseUrl: 'https://tablepress.org/demo/' }, function () {
    cy.step("use spoke")
    cy.visit('/')
    cy.get('table tbody tr')
        .find('td')
        .map('innerText')
        .print()
        .partial(Cypress._.zipObject, props)
        .should(spok({
            firstName: 'Gloria',
            Zip: spok.test(/^\d{5}$/),
            Birthday: Cypress._.isString,
        }))
    // cy.contains('table tbody tr', 'Dave')
    //     .find('td')
    //     .map('innerText')
    //     .print()
    //     .partial(Cypress._.zipObject, props)
    //     .print()
    //     .update('age', Number)
    //     .should(
    //         spok({
    //             name: 'Dave',
    //             age: spok.range(10, 19),
    //             date: spok.test(/^\d\d\d\d-\d\d-\d\d$/),
    //         }),
    //     )
})
