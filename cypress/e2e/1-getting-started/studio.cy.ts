describe("test", () => {
  it("test", () => {
    cy.log(Cypress.env("api_url"));
    cy.log(Cypress.env("api_url"));
  });
//check
  // The test checks if the value of the variable 'name' is not equal to 'john'
  // Checking if the name is a string

  it("chcck reporter with string name", () => {
    const name = "mani";
    expect(name).to.be.a("string");
    expect(name).to.be.a("string");
    expect(name).to.be.a("string");
  });
  it("chcck reporter with different name", () => {
    const name = "john";
    expect(name).to.not.be.equal("mani");
  });
  // The test checks if the value of the variable 'name' is not equal to 'john'

  it("chcck reporter with different name", () => {
    const name = "john";
    expect(name).to.not.be.equal("mani");
  });
  describe("unhappy", () => {
    it.only("chcck reporter with different name", () => {
      const name = "john";
      expect(name).to.not.be.equal("mani");
    });

    it(
      "check reporter with non-empty name",
      {
        retries: {
          experimentalStrategy: "detect-flake-and-pass-on-threshold",
          experimentalOptions: {
            maxRetries: 2,
            passesRequired: 2,
          },
          openMode:true,
          runMode:true,
        },
      },
      () => {
        const name = "mani";
       
      }
    );

    it("check reporter with non-null name", () => {
      const { expect } = require("chai");
      const name = "mani";
      expect(name).to.not.be.null;
    });

    it("chcck reporter with string name", () => {
      const name = "mani";
      expect(name).to.be.a("string");
    });
  });
});
