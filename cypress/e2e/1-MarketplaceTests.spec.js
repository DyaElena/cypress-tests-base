describe("Marketplace page", () => {
  beforeEach("open website", () => {
    cy.visit("https://www.opencart.com/");
    cy.contains("Marketplace").click();
  });

  it("Price links", () => {
    // Active link
    cy.get("[class='btn-group hidden-xs hidden-sm']>a")
      .filter(".active")
      .should("contain", "All");

    cy.get('[class="btn-group hidden-xs hidden-sm"]')
      .find("a")
      .should("have.length", 3);

    // Filter results
    // Commercial
    const commercialLink = cy
      .get("[class='btn-group hidden-xs hidden-sm']>a")
      .contains("Commercial");
    commercialLink.click();

    if (commercialLink) {
      cy.get(".extension-name")
        .find("span")
        .should("not.contain", "FREE")
        .and("contain", "$");
    }

    //Free
    const freeLink = cy
      .get("[class='btn-group hidden-xs hidden-sm']>a")
      .contains("Free");
    freeLink.click();

    if (freeLink) {
      cy.get(".extension-name").find("span").should("contain", "FREE");
    }
  });

  it("Category test - BUG", () => {
    cy.get("#extension-category ul")
      .children(".active")
      .should("contain", "All");

    const themes = cy
      .get("#extension-category ul li")
      .contains("Themes")
      .click();

    if (themes) {
      cy.get("#extension-list .row")
        .find(".extension-name")
        .nextUntil("hr")
        .should("contain", "Themes");
    }
  });

  it("Search test", () => {
    const searchWords = ["food", "toys", "language", "store", "seo"];

    searchWords.forEach((el) => {
      cy.get("[name=filter_search]").type(el);
      cy.get("#button-search").click();

      cy.get("#extension-list .extension-name").should("contain", el);
      cy.get("[name=filter_search]").clear();
    });
  });

  it("Pagination test", () => {
    cy.get("nav .pagination li").filter(".active").should("contain", "1");
    cy.contains(">").click();
    cy.get("nav .pagination li").filter(".active").should("contain", "2");
    cy.get("nav .pagination li").should("contain", "|<").and("contain", "<");

    cy.contains(">|").click();
    cy.get("nav .pagination li").filter(".active").should("contain", "1204");

    cy.contains("|<").click();
    cy.get("nav .pagination li").should("contain", ">|").and("contain", ">");
  });

  it.only("Ratings test", () => {
    cy.get("#extension-rating ul li").first().click();

    // How to make test for selecting all carts and check in each card for rating = 4 or 5 stars?

    // selects 2nd card's rating and checks that it's = 4 stars
    cy.get("section .col-xs-6 div")
      .eq(2)
      .within(() => {
        cy.get("[class='opencart-icon-star-light']").should("have.length", 4);
      });
  });
});
