describe("Navigation links", () => {
  beforeEach("open website", () => {
    cy.visit("https://www.opencart.com/");
  });

  it.only("Login", () => {
    cy.get('[class="btn btn-link navbar-btn"]').contains("Login").click();
    cy.get("#input-email").type(Cypress.env("username"));
    cy.get("#input-password").type(Cypress.env("password"));
    cy.get('button[class="btn btn-primary btn-lg hidden-xs"]').click();

    cy.get('[placeholder="PIN"]').type(Cypress.env("pin"));
    cy.contains("Continue").click();
  });
});
