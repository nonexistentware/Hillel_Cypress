class SignInForm {
  get emailField() {
    return cy.get("#signinEmail");
  }

  get passwordField() {
    return cy.get("#signinPassword");
  }

  get loginButton() {
    return cy.get(".modal-content .btn-primary");
  }

  get modalTitle() {
    return cy.get(".modal-title");
  }

  login(email, password) {
    this.emailField.type(email);
    this.passwordField.type(password, { log: false });
    this.loginButton.click();
  }
}

export default new SignInForm();
