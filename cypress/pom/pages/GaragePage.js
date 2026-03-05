class GaragePage {
  visit() {
    cy.visit("/panel/garage");
  }

  get addCarButton() {
    return cy.get("button.btn-primary").contains("Add car");
  }

  get carTitle() {
    return cy.get(".car-name h2");
  }

  get addFuelExpenseButton() {
    return cy.get("button.btn-success").contains("Add fuel expense");
  }

  get successToast() {
    return cy.get(".alert-success, .toast-body");
  }

  get emptyGarageMessage() {
    return cy.get(".panel-empty_message");
  }

  get editCarButton() {
    return cy.get(".icon.icon-edit");
  }

  get modal() {
    return cy.get("app-edit-car-modal");
  }

  get removeCarButton() {
    return cy.get(".btn-danger");
  }

  openEditCarModal() {
    this.editCarButton.first().click();
  }

  clickRemoveCar() {
    this.removeCarButton.click();
  }

  openAddCarModal() {
    this.addCarButton.click();
  }

  clickAddFuelExpense() {
    this.addFuelExpenseButton.first().click();
  }

  verifyCarAdded(brand, model) {
    this.carTitle.should("contain", `${brand} ${model}`);
  }

  verifyCarRemoved(brand, model) {
    cy.contains(".car-name h2", `${brand} ${model}`).should("not.exist");
  }

  get logoutButton() {
    return cy.get("a").contains("Log out");
  }

  logout() {
    this.logoutButton.click();
  }
}
export default new GaragePage();
