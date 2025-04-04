/// <reference types="cypress" />
// ***********************************************************
import LoginPage from "../../support/PageObjects/loginPage";
import DashboardPage from "../../support/PageObjects/dashboardPage";



const loginPage = new LoginPage();

describe("Login Page Test - POM", () => {
  before(() => {
    loginPage.visit();
    loginPage.validateTitle();
  });

  it("should login with env credentials", () => {
    const username = Cypress.env("username");
    const password = Cypress.env("password");

    loginPage.enterUsername(username);
    loginPage.enterPassword(password);
    loginPage.clickLogin();

    cy.url().should("include", "/dashboard");
  });
});
