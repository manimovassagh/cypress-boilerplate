const posts = require('../../fixtures/posts')
import { urlJson } from '../constants/routes/URL'
import { logger } from '../utility/Stringify';


it('test checker', () => {
    cy.visit('https://jsonplaceholder.typicode.com')
    // cy.intercept('GET', urlJson, {
    //     body: posts
    // }).as('getPosts')

    // cy.request(urlJson).then((posts) => {
    //     logger(posts);

    // })
    cy.selector("some items to seleect")
    cy.api('https://jsonplaceholder.typicode.com/posts')
    // cy.get('.et_pb_widget_area [type="search"]').should('be.visible')
    // cy.url().should('contain', 'jsonplaceholder')
});
