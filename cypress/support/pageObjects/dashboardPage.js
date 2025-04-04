class DashboardPage {
  validateDashboardLoaded() {
    // Ensure the current URL ends with /dashboard or /dashboard/index
    cy.url().should('match', /\/dashboard(\/index)?$/);
    
    // Verify dashboard title supports both English and Spanish
    cy.get('.oxd-topbar-header-title')
      .invoke('text')
      .should('match', /Dashboard|Pizarra de pendientes/);

    // Check for key dashboard content
    cy.contains('Time at Work').should('be.visible');
    cy.contains('My Actions').should('exist');
  }
}

export default DashboardPage;
