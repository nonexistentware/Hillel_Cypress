import SignInForm from "../../pom/forms/SignInForm";
import GaragePage from "../../pom/pages/GaragePage";
import HomePage from "../../pom/pages/HomePage";

describe("Sign In", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it('should open sign in modal when clicking "Sign In" button', () => {
    HomePage.openSignInForm();
    SignInForm.modalTitle.should("be.visible").and("contain", "Log in");
  });

  it("should display email and password fields", () => {
    HomePage.openSignInForm();
    SignInForm.emailField.should("be.visible");
    SignInForm.passwordField.should("be.visible");
  });

  it("should show error when email is empty", () => {
    HomePage.openSignInForm();
    SignInForm.emailField.click().blur();

    cy.get(".invalid-feedback")
      .should("be.visible")
      .and("contain.text", "Email required");
  });

  it("should show error when password is empty", () => {
    HomePage.openSignInForm();
    SignInForm.passwordField.click().blur();
    SignInForm.passwordField
      .get(".invalid-feedback")
      .should("be.visible")
      .and("contain.text", "Password required");
  });

  it("should show error with invalid email format", () => {
    HomePage.openSignInForm();
    SignInForm.emailField.type("invalid-email").blur();
    SignInForm.emailField
      .get(".invalid-feedback")
      .should("be.visible")
      .and("contain", "Email is incorrect");
  });

  it("should show error with incorrect credentials", () => {
    HomePage.openSignInForm();
    SignInForm.emailField.type("wrong@email.com");
    SignInForm.passwordField.type("WrongPassword1", { log: false });
    SignInForm.loginButton.click();
    cy.get(".alert-danger")
      .should("be.visible")
      .and("contain", "Wrong email or password");
  });

  it.only("should login with registered user", () => {
    cy.fixture("user").then(({ validUser }) => {
      HomePage.openSignInForm();
      SignInForm.login(validUser.email, validUser.password);
    });

    cy.url().should("include", "/panel/garage");
  });

  it("should have login button disabled when fields are empty", () => {
    HomePage.openSignInForm();
    SignInForm.loginButton.should("be.disabled");
  });
});
