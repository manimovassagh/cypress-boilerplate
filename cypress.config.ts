import { defineConfig } from 'cypress'
const { verifyDownloadTasks } = require('cy-verify-downloads');

export default defineConfig({

  e2e: {
    baseUrl: 'http://localhost:5500/',
    //chromeWebSecurity: false,
    experimentalStudio: true,
    env: {
      api_url: 'working !!!!!'
    },


    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', verifyDownloadTasks);

    },
  },
})