import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../support/pageObjects/loginPage";

const loginPage = new LoginPage();

Given("I open the login page", () => {
  loginPage.visit();
  loginPage.validateTitle();
});

When("I login with secret credentials", () => {
  const username = Cypress.env("username");
  const password = Cypress.env("password");

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
