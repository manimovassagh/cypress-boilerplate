import { defineConfig } from 'cypress'
export default defineConfig({

  e2e: {
    baseUrl: 'https://ainize.ai/saucelabs/the-internet',
    //chromeWebSecurity: false,
    experimentalStudio: true,
    env: {
      api_url: 'working !!!!!'
    },


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