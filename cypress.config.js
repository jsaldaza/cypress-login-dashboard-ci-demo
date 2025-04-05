require("dotenv").config(); // Carga variables desde .env

const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    specPattern: ["cypress/e2e/**/*.feature", "cypress/e2e/**/*.cy.js"],
    supportFile: "cypress/support/e2e.js", // Asegura que el plugin de Allure se cargue desde el support
    setupNodeEvents(on, config) {
      require("dotenv").config();

      // Compatibilidad con local y GitHub Actions
      config.env.username = process.env.CYPRESS_USERNAME;
      config.env.password = process.env.CYPRESS_PASSWORD;

      // Setup Cucumber
      preprocessor.addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", createBundler({ plugins: [createEsbuildPlugin(config)] }));

      // Setup Allure
      allureWriter(on, config);

      return config;
    },
  },
});
