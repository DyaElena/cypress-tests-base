describe("Navigation links", () => {
  beforeEach("open website", () => {
    cy.visit("https://www.opencart.com/");
  });

  it.only("verify the length and the text of the nav manu", () => {
    const menuLinksTest = [
      "Features",
      "Demo",
      "Marketplace",
      "Blog",
      "Download",
      "Resources ",
      "Showcase",
      "Contact Us",
      "OpenCart Partners",
      "Community Forums",
      "Facebook Community",
      "OpenCart Documentation",
      "OpenCart Books",
      "Github Bug Tracker",
      "Developer",
      "Login",
      "Register",
    ];

    cy.get('[class="nav navbar-nav"] li').should("have.length", 17);
    cy.get('[class="nav navbar-nav"] li').each((link, index, list) => {
      cy.wrap(link).should("contain", menuLinksTest[index]);
      //expect(Cypress.$(link).text()).to.eq(menuLinksTest[index]); // the same as above
    });
  });
});
