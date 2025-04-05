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
    setupNodeEvents(on, config) {
      require("dotenv").config(); // Asegura que .env se cargue si no está ya

      // 🔐 Compatibilidad con local y GitHub Actions
      config.env.username = process.env.CYPRESS_USERNAME || process.env.CYPRESS_username;
      config.env.password = process.env.CYPRESS_PASSWORD || process.env.CYPRESS_password;

      preprocessor.addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", createBundler({ plugins: [createEsbuildPlugin(config)] }));
      allureWriter(on, config);

      return config;
    },
  },
});
