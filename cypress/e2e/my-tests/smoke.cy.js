describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/todo");
  });

  it("should display todo app header", () => {
    cy.contains("tos").should("be.visible");
  });
});
