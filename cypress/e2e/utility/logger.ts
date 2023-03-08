class Logger<T>{

    logWIthObjectInput(param: T): void {
        cy.log(JSON.stringify(param))
    }
}
const Log = new Logger()
module.exports = Log