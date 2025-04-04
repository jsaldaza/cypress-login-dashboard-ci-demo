const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");

module.exports = defineConfig({
  e2e: {
    // Base URL for all tests
    baseUrl: "https://opensource-demo.orangehrmlive.com",

    // Look for .feature files inside the e2e folder
    specPattern: "cypress/e2e/**/*.feature",

    // Cypress event hooks
    async setupNodeEvents(on, config) {
      // Enable Cucumber preprocessor
      await preprocessor.addCucumberPreprocessorPlugin(on, config);

      // Use esbuild as bundler for faster builds
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});
