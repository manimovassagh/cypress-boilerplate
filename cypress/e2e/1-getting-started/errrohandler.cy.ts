Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("check some new test", () => {
  it("test it", () => {
    cy.log("test is ok ");
  });
});
