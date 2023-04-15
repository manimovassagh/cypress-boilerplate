import { FIRST } from "../constants/routes/URL"

export function addressLogger(address: string) {
    cy.log('The address is ', address)
}

export function VisitMyOwn() {



   
     cy.get("test")  
  cy.visit(FIRST)
  cy.step("this is my step")

}
