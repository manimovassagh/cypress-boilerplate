import { urlJson } from "../constants/routes/URL";

const posts = require('../../fixtures/posts')
//

it('test checker', () => {
    cy.visit('https://jsonplaceholder.typicode.com')

//check the time frame to be able to go for it 
    const obg = {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
    const obg2 = {
        userId: 13,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }

    cy.step('Check some new feauture')
    cy.log('**----------- Xpyth    **')
    cy.xpath("(//a[normalize-space()='Blog'])[1]").should("be.visible")
    cy.xpath("(//a[normalize-space()='Blog'])[1]").then($el => {
        const el = $el
        const origin = el[0].origin
        cy.log('******************')

        cy.log('** The origin is **', origin)
        console.log(el);
        cy.log('******************')
        cy.log(el[0].baseURI);

        //check it
    })
    cy.selector("some items to seleect")
    //log cypress "mani"

});
