class RegistrationForm {
  get modal() {
    return cy.get('.modal-content');
  }

  get modalTitle() {
    return cy.get('.modal-title');
  }

  get nameField() {
    return cy.get('#signupName');
  }

  get lastNameField() {
    return cy.get('#signupLastName');
  }

  get emailField() {
    return cy.get('#signupEmail');
  }

  get passwordField() {
    return cy.get('#signupPassword');
  }

  get repeatPasswordField() {
    return cy.get('#signupRepeatPassword');
  }

  get registerButton() {
    return cy.get('.modal-content button').contains('Register');
  }

  get closeButton() {
    return cy.get('.modal-content .close');
  }

  register(name, lastName, email, password) {
    this.nameField.type(name);
    this.lastNameField.type(lastName);
    this.emailField.type(email);
    this.passwordField.type(password, { log: false });
    this.repeatPasswordField.type(password, { log: false });
    this.registerButton.click();
  }
}

export default new RegistrationForm();