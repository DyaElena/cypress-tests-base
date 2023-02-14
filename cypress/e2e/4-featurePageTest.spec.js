describe("Feature page", () => {
  beforeEach("open website", () => {
    cy.visit("https://www.opencart.com/");
    cy.contains("Features").click();
  });

  it.only("verify the length and the text of feature links", () => {
    const links = [
      "Admin",
      "Unlimited everything",
      "Customer",
      "Shipping, Payments and Reports",
      "Extensions",
      "Mobile & SEO",
      "Developer",
    ];

    const bottomLinks = [
      "#tab-unlimited",
      "#tab-customer",
      "#tab-shipping",
      "#tab-extension",
      "#tab-mobile",
      "#tab-developer",
      "#tab-admin",
    ];

    //cy.get('[class="nav nav-tabs"]').find("li").should("have.length", 7);

    cy.get(".container ul.nav.nav-tabs")
      .find("li")
      .each(($el, index) => {
        // Bottom link
        cy.get(`${bottomLinks[index]} .bottom-link > a`)
          .invoke("text")
          .then((text) => {
            expect(text.trim()).to.equal($el.text());
          });

        $el.click();
        cy.wrap($el).should("contain", links[index]);
      });
  });
});
