class HomePage {
  get signInButton() {
    return cy.get("button.header_signin");
  }

  get signUpButton() {
    return cy.get("button.hero-descriptor_btn.btn.btn-primary");
  }

  openSignInForm() {
    this.signInButton.click();
  }

  openSignUpForm() {
    this.signUpButton.click();
  }
}

export default new HomePage();
