describe("Test page", () => {
  beforeEach("open website", () => {
    cy.visit("https://ultimateqa.com/complicated-page");
  });

  it.only("Each button in the container is green", () => {
    cy.get('[class="et_pb_row et_pb_row_2 et_pb_row_4col"]').then(
      (container) => {
        cy.wrap(container)
          .contains("Button")
          .each((btn) => {
            expect(btn)
              .to.have.css("background-color", "rgb(128, 203, 121)")
              .to.be.visible();
          });
      }
    );
  });

  it("Enter data into a form", () => {
    cy.get(".et_pb_contact_form_0").then((form) => {
      cy.wrap(form).find('[placeholder="Name"]').type("hello");
      cy.wrap(form)
        .find('[placeholder="Email Address"]')
        .type("hello@example.com");
      cy.wrap(form).find('[placeholder="Message"]').type("Test");
      cy.wrap(form).find('[class="clearfix"]').find("input").type("4");
      cy.wrap(form).find("button").click();
    });
  });

  it("Toggle", () => {
    cy.get("#A_toggle").click();
    cy.get('[class="et_pb_toggle_content clearfix"]').should(
      "have.css",
      "display",
      "block"
    );
  });
});
