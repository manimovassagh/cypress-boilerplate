import { defineConfig } from 'cypress'
const { verifyDownloadTasks } = require('cy-verify-downloads');
const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mmmmmm",
  database: 'cypress'

});

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
      on('task', {
        async resetDatabase() {
          // Do Database reset
          console.log('Seed database is done');
          console.log('Seed database is done');

          return null;
        }
      });

    },
  },
})