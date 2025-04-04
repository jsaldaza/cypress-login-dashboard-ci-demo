class LoginPage {
  visit() {
    cy.visit('/web/index.php/auth/login');
    cy.get('.orangehrm-login-container', { timeout: 10000 }).should('be.visible');
  }

  validateTitle() {
    cy.title().should('eq', 'OrangeHRM');
  }

  enterUsername(username) {
    // Ensure username is defined before typing
    if (!username) {
      throw new Error('Username is required');
    }
    cy.get('input[name="username"]').clear().type(username);
  }

  enterPassword(password) {
    // Ensure password is defined before typing
    if (!password) {
      throw new Error('Password is required');
    }
    cy.get('input[name="password"]').clear().type(password);
  }

  clickLogin() {
    cy.get('button[type="submit"]').click();
  }
}

export default LoginPage;
