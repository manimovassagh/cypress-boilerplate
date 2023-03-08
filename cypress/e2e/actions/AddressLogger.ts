import { FIRST } from "../constants/routes/URL"

export function addressLogger(address: string) {
    cy.log('The address is ', address)
}

export function VisitMyOwn() {
    cy.visit(FIRST)

}