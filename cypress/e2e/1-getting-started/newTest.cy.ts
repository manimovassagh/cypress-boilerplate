const posts = require('../../fixtures/posts')
import { urlJson } from '../constants/routes/URL'
import { logger } from '../utility/Stringify';


it('test checker', () => {
    cy.visit('https://jsonplaceholder.typicode.com')
    
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

});

