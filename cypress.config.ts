import { defineConfig } from 'cypress'
export default defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    baseUrl: "https://www.saucedemo.com/",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {
        logger(message) {
          console.log(message);

          return null
        },
      })

    },
  },
})