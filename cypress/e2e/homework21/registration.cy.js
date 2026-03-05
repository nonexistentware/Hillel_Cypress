import RegistrationForm from "../../pom/forms/RegistrationForm";
import GaragePage from "../../pom/pages/GaragePage";
import HomePage from "../../pom/pages/HomePage";

describe("Registration", () => {
  const password = "Password1";

  beforeEach(() => {
    cy.visit("/");
    HomePage.openSignUpForm();
  });

  it("should open Registration modal with correct title", () => {
    RegistrationForm.modalTitle
      .should("be.visible")
      .and("contain", "Registration");
  });

  it('should successfully register a new user and show "Registration complete" toast', () => {
    const email = `testuser_${Date.now()}@gmail.com`;
    const password = "Test12345!";

    RegistrationForm.register("Test", "User", email, password);

    cy.contains("Registration complete").should("be.visible");

    cy.writeFile("cypress/fixtures/user.json", {
      validUser: {
        email,
        password,
      },
    });
  });

  it("should redirect to /panel/garage after successful registration", () => {
    RegistrationForm.register(
      "Test",
      "User",
      `testuser_${Date.now()}@gmail.com`,
      password,
    );

    cy.url().should("include", "/panel/garage");
  });

  it("should show empty garage message for a newly registered user", () => {
    RegistrationForm.register(
      "Test",
      "User",
      `testuser_${Date.now()}@gmail.com`,
      password,
    );

    GaragePage.emptyGarageMessage
      .should("be.visible")
      .and("contain.text", "You don’t have any cars in your garage");
  });

  it("should show error when Name field is empty", () => {
    RegistrationForm.nameField.click().blur();
    RegistrationForm.nameField
      .get(".invalid-feedback")
      .should("be.visible")
      .and("contain.text", "Name required");
  });

  it("should show error when Last name field is empty", () => {
    RegistrationForm.lastNameField.click().blur();
    RegistrationForm.lastNameField
      .get(".invalid-feedback")
      .should("be.visible")
      .and("contain.text", "Last name required");
  });

  it("should show error when Email field is empty", () => {
    RegistrationForm.emailField.click().blur();
    RegistrationForm.emailField
      .get(".invalid-feedback")
      .should("be.visible")
      .and("contain.text", "Email required");
  });

  it("should show error when Password field is empty", () => {
    RegistrationForm.passwordField.click().blur();
    RegistrationForm.passwordField
      .get(".invalid-feedback")
      .should("be.visible")
      .and("contain.text", "Password required");
  });

  it("should have Register button disabled when form is empty", () => {
    RegistrationForm.registerButton.should("be.disabled");
  });

  it("should close modal when clicking close button", () => {
    RegistrationForm.modal.should("be.visible");
    RegistrationForm.closeButton.click();
    RegistrationForm.modal.should("not.exist");
  });
});
