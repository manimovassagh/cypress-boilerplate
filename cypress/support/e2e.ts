import 'cypress-plugin-api'
require('./commands')
require('@cypress/xpath');
import 'cypress-plugin-steps'
require('cy-spok')
import 'cypress-mochawesome-reporter/register';
import "cypress-real-events";
import 'cypress-map'
import 'cy-spok'
require('cy-verify-downloads').addCustomCommand();

// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
//import './commands'

// Alternatively you can use CommonJS syntax:
