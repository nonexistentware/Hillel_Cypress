class AddExpenseForm {
  get modal() {
    return cy.get(".modal-content");
  }

  get modalTitle() {
    return cy.get(".modal-title");
  }

  get vehicleSelect() {
    return cy.get("#addExpenseCar");
  }

  get dateField() {
    return cy.get("#addExpenseDate");
  }

  get mileageField() {
    return cy.get("#addExpenseMileage");
  }

  get litersField() {
    return cy.get("#addExpenseLiters");
  }

  get totalCostField() {
    return cy.get("#addExpenseTotalCost");
  }

  get addButton() {
    return cy.get(".modal-content button.btn-primary");
  }

  get cancelButton() {
    return cy.get(".modal-content button").contains("Cancel");
  }

  get closeButton() {
    return cy.get(
      '.modal-content button.close, .modal-content button[aria-label="Close"]',
    );
  }

  get litersError() {
    return cy
      .get("#addExpenseLiters")
      .closest(".form-group")
      .find(".invalid-feedback");
  }

  get costError() {
    return cy
      .get("#addExpenseTotalCost")
      .closest(".form-group")
      .find(".invalid-feedback");
  }

  get mileageError() {
    return cy
      .get("#addExpenseMileage")
      .closest(".form-group")
      .find(".invalid-feedback");
  }

  setMileage(mileage) {
    this.mileageField.clear().type(String(mileage));
  }

  setLiters(liters) {
    this.litersField.clear().type(String(liters));
  }

  setTotalCost(cost) {
    this.totalCostField.clear().type(String(cost));
  }

  submit() {
    this.addButton.click();
  }

  fillAndSubmit(mileage, liters, cost) {
    this.setMileage(mileage);
    this.setLiters(liters);
    this.setTotalCost(cost);
    this.submit();
  }
}

export default new AddExpenseForm();
