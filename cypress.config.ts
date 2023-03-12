import { defineConfig } from 'cypress'
export default defineConfig({

  e2e: {
    baseUrl: 'https://demo.realworld.io/#/',
    setupNodeEvents(on, config) {
      on('task', {
        logger(message) {
          console.log(message);

          return null
        },
      })
      
    },
  },
})