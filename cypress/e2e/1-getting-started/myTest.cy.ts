const example = require("../../fixtures/profile");

/**
 * check
 * @author Mani Movassagh
 * @description Regarding to test case No
 * @summary PS-TF-55165
 */

describe("Ultimate QA Automation Page", () => {
  beforeEach(() => cy.login());

  it.only("should have the correct title", () => {
    expect(2 + 2).to.be.equal(4);

    /* ==== Generated with Cypress Studio ==== */
    cy.visit("http://www.google.com");
    cy.get("#L2AGLb > .QS5gu").click();
    //  cy.get('.gLFyf').clear('m');
    // cy.get(".gLFyf").type("mani{enter}");


    cy.get(".aajZCb > .lJ9FBc > center > .gNO89b").click();
    cy.get(
      '[data-hveid="CCEQAA"] > .g > :nth-child(1) > [jscontroller="SC7lYd"] > .GLI8Bc > .jGGQ5e > .yuRUbf > a > .LC20lb',
    ).click();
    /* ==== End Cypress Studio ==== */
  });

  it("should have the correct header", () => {
    cy.visit("https://jsonplaceholder.typicode.com");
    // cy.get('.et_pb_text_inner h1').should('have.text', 'Automation Practice')
    cy.request("GET", "https://jsonplaceholder.typicode.com/todos").then(
      (response) => {
        cy.log(response.body);  
      
        expect(response.body).to.be.not.empty;
        response.body.forEach((element) => {
          expect(element).to.have.property("title");
          expect(element).to.be.not.empty;
          expect(element).to.be.not.undefined;
          expect(element).to.be.not.null;
        });
        expect(response.body).not.to.have.property("auth");
        expect(response.body).not.to.be.empty;
        expect(response.body).not.to.be.undefined;
        expect(response.body).not.to.be.NaN;
        expect(response.body).not.to.throw;
      },
    );
  });

  it("should have a visible search bar", () => {
    cy.visit("https://jsonplaceholder.typicode.com");
    const urlJson = "https://jsonplaceholder.typicode.com/posts";
    cy.intercept("GET", urlJson).as("getPosts");
    // cy.get('.et_pb_widget_area [type="search"]').should('be.visible')
    cy.url().should("contain", "jsonplaceholder");
  });

  it("should  have a working contact form", () => {
    cy.visit("https://jsonplaceholder.typicode.com");
    cy.log(example.email);

    cy.request("GET", "https://jsonplaceholder.typicode.com/todos/1").then(
      (response) => {
        // cy.log(response.body)
        expect(response.body.title).to.have.contain("delectus aut autem");
        expect(response.body).to.have.property("title");
        expect(response.body).not.to.have.property("auth");
        expect(response.body).not.to.be.empty;
        expect(response.body).not.to.be.undefined;
        expect(response.body).not.to.be.NaN;
        expect(response.body).not.to.throw;
      },
    );
  });
});
