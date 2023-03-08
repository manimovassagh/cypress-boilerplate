export function selector(value: string) {
    return cy.get(`[data-cy=${value}]`)
}

