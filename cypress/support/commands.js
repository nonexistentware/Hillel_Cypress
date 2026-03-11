// Custom command: логін існуючого юзера через UI
Cypress.Commands.add("login", (email, password) => {
  cy.visit("/");
  cy.get("button.header_signin").click();
  cy.get("#signinEmail").type(email);
  cy.get("#signinPassword").type(password, { log: false });
  cy.get(".modal-content .btn-primary").click();
  cy.url().should("include", "/panel/garage");
});
