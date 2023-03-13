import { defineConfig } from 'cypress'
export default defineConfig({

  e2e: {
    experimentalStudio: true,
    baseUrl: 'https://www.saucedemo.com/',
    //chromeWebSecurity: false,

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