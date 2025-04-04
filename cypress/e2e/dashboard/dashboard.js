import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../support/pageObjects/loginPage";
import DashboardPage from "../../support/pageObjects/dashboardPage";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

Given("I am logged in", () => {
  const { username, password } = Cypress.env();

  loginPage.visit();
  loginPage.enterUsername(username);
  loginPage.enterPassword(password);
  loginPage.clickLogin();
});

Then("I should see the dashboard content", () => {
  dashboardPage.validateDashboardLoaded();
});
