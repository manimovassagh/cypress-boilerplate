import { defineConfig } from 'cypress'
export default defineConfig({

  e2e: {
    experimentalStudio: true,
    baseUrl: 'https://demo.realworld.io/#/',
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