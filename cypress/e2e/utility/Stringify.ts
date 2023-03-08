export function logger(params: any) {
    return cy.log(JSON.stringify(params))
}

