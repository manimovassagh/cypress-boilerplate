import { names } from "../../fixtures/names";

describe("unhappy", () => {
  it("chcck reporter", () => {
    const name = names.nameOne;
    expect(name).to.be.equal(name);
  });
  // The test checks if the value of the variable 'name' is not equal to 'john'

  it("chcck reporter with different name", () => {
    const name = names.nameThree;
    expect(name).to.not.be.equal(names.nameOne);
  });
  // The test checks if the value of the variable 'name' is not empty

  it("chcck reporter with non-empty name", () => {
    const name = names.nameOne;
    expect(name).to.not.be.empty;
  });
  // Testing string equality with case-insensitivity

  it("chcck reporter with case-insensitive string equality", () => {
    const name1 = names.nameOne;
    const name2 = names.nameThree;
    expect(name1.toLowerCase()).to.be.equal(name2.toLowerCase());
  });
});
