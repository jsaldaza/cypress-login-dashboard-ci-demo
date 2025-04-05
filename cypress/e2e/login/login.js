import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../support/pageObjects/loginPage";
import DashboardPage from "../../support/pageObjects/dashboardPage";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

Given("I open the login page", () => {
  loginPage.visit();
  loginPage.validateTitle();
});

When("I login with secret credentials", () => {
  const username = Cypress.env("username");
  const password = Cypress.env("password");

  // Debug en consola de Node para asegurarte que se está leyendo el .env
  // (NO se muestra en navegador, sino en la terminal)
  console.log("Loaded ENV username:", username);
  console.log("Loaded ENV password (masked):", password ? '*'.repeat(password.length) : '(not set)');
  console.log("Username from env:", Cypress.env("username"));
  console.log("Loaded credentials from Cypress.env():", Cypress.env("username"), Cypress.env("password"));


  if (!username || !password) {
    console.warn("Missing Cypress environment variables. Check your .env or GitHub Secrets.");
  }

  loginPage.enterUsername(username);
  loginPage.enterPassword(password);
  loginPage.clickLogin();
});

When("I login with {string} and {string}", (username, password) => {
  loginPage.enterUsername(username);
  loginPage.enterPassword(password);
  loginPage.clickLogin();
});

Then("I should see {string}", (expectedResult) => {
  if (expectedResult === "Dashboard") {
    cy.url().should("include", "/dashboard");
    cy.get(".oxd-topbar-header-title")
      .invoke("text")
      .should("match", /Dashboard|Pizarra de pendientes/);
  } else {
    cy.contains("Invalid credentials").should("be.visible");
  }
});
