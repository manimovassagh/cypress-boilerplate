

export class Auth {
    elements = {
        userInputField: () => cy.get('#loginPanel > form > div:nth-child(2) > input'),
        passInputField: () => cy.get('#loginPanel > form > div:nth-child(4) > input'),
        loginBtn: () => cy.get('#loginPanel > form > div:nth-child(5) > input'),
        registerLink: () => cy.get('#loginPanel > p:nth-child(3) > a')
    }

    enterUserName() {
        this.elements.userInputField().clear().type('mani.mgh')
    }
    enterPassword() {
        this.elements.passInputField().clear().type('123456')
    }

    login() {
        this.enterUserName()
        this.enterPassword()
        this.elements.loginBtn().click()
        cy.getCookie('JSESSIONID').should('not.be.undefined')
    }
    register() {
        cy.get('#loginPanel > :nth-child(3) > a').click()
        cy.get('tbody .input').first().type('mani')
        cy.get('tbody .input ').eq(1).type('movassagh');
        cy.get('tbody .input ').eq(2).type('movassagh');
        cy.get('tbody .input ').eq(3).type('movassagh');
        cy.get('tbody .input ').eq(4).type('movassagh');
        cy.get('tbody .input ').eq(5).type('movassagh');
        cy.get('tbody .input ').eq(6).type('movassagh');
        cy.get('tbody .input ').eq(7).type('2342342342342');
        cy.get('tbody .input ').eq(8).type('mani.mgh');
        cy.get('tbody .input ').eq(9).type('123456');
        cy.get('tbody .input ').eq(10).type('123456');
        cy.log('----------------check')
        cy.get('#customerForm > table > tbody > tr:nth-child(13) > td:nth-child(2) > input').click()

    }

}