const posts = require('../../fixtures/posts')
import { urlJson } from '../constants/routes/URL'
import { logger } from '../utility/Stringify';


it('test checker', () => {
    cy.visit('https://jsonplaceholder.typicode.com')
    
    // cy.intercept('GET', urlJson, {
    //     body: posts
    // }).as('getPosts')
    // cy.log(spok)
    //     const object = {}
    //     cy.wrap(object, { timeout: 2000 }).should(
    //         spok({
    //             $topic: 'spok-example', // optional
    //             one: spok.ge(1),
    //             two: 2,
    //             three: spok.range(2, 6),
    //             four: spok.lt(5),
    //             helloWorld: spok.startsWith('hello'),
    //             anyNum: spok.type('number'),
    //             anotherNum: spok.number,
    //             anArray: spok.array,
    //             anObject: spok.ne(undefined),
    //             // test a string using regular expression
    //             id: spok.test(/^abc\d{3}$/),
    //             // array with 3 elements
    //             list: spok.arrayElements(3),
    //         }),
    //     )

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
        //@ts-nocheck
        cy.log('** The origin is **', origin)
        console.log(el);
        cy.log('******************')
        cy.log(el[0].baseURI);


    })
    cy.xpath("(//img[@src='mockend.svg'])[1]").should("be.visible")
    cy.log('**xpath without slash**')
    cy.xpath("(//img[@src='mockend.svg'])[1]").should("be.visible")
    cy.xpath("(//button[normalize-space()='Run script'])[1]").should("be.visible").and("have.class", "bg-green-500")
    cy.api(urlJson).then((res) => {
        cy.log("Response is \n", res.body)
        res.body.forEach(element => {
            if(element.id===36){
                expect(element.title).to.contain("fuga nam accusamus voluptas reiciendis itaque")
            }
        });
    })
    cy.selector("some items to seleect")
    //cy.api('https://jsonplaceholder.typicode.com/posts')
    // cy.get('.et_pb_widget_area [type="search"]').should('be.visible')
    // cy.url().should('contain', 'jsonplaceholder')
});

