
it("local", () => {
  cy.visit("http://127.0.0.1:5500/cypress/dist/index.html");
  cy.get("a");
});
