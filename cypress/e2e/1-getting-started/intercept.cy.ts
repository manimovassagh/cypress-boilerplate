import { expect } from "chai";

const article = require('../../fixtures/article')
it('Test intercept the jsonplaceholder website', () => {


    cy.visit('/')
    cy.intercept('GET'
        , "https://api.realworld.io/api/articles?limit=10&offset=0",
        {
            body: article
        }
        ,

    ).as('home')

    


    //cy.get('div[class="col-md-3"] a:nth-child(1)').click()



    // cy.intercept('GET', '/users', {

    //     body: 
    //     [


    //     {
    //         id: 1,
    //         name: "Leanne Graham",
    //         username: "Bret",
    //         email: "Sincere@april.biz",
    //         address: {
    //             street: "Kulas Light",
    //             suite: "Apt. 556",
    //             city: "Gwenborough",
    //             zipcode: "92998-3874",
    //             geo: {
    //                 lat: "-37.3159",
    //                 lng: "81.1496"
    //             }
    //         },
    //         phone: "1-770-736-8031 x56442",
    //     website: "hildegard.org",
    //         company: {
    //             name: "Romaguera-Crona",
    //             catchPhrase: "Multi-layered client-server neural-net",
    //             bs: "harness real-time e-markets"
    //         }
    //     }
    // ]
    //     ,
    // }).as('getUsers')

    //cy.get(':nth-child(6) > :nth-child(1) > a').click()

    // cy.wait('@getUsers')


    //    cy.wait('@getUsers')
    //    .its('request.body')
    //    .should("deep.include", 'id')

});