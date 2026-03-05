class EditCarForm {
  get modal() {
    return cy.get(".modal-content");
  }

  get modalTitle() {
    return cy.get(".modal-title");
  }

  get brandSelect() {
    return cy.get("#addCarBrand");
  }

  get modelSelect() {
    return cy.get("#addCarModel");
  }

  get mileageField() {
    return cy.get("#addCarMileage");
  }

  get removeCarButton() {
    return cy.contains("button", "Remove car");
  }

  get saveButton() {
    return cy.get(".modal-content .btn-primary").contains("Save");
  }

  get cancelButton() {
    return cy.get(".modal-content").contains("button", "Cancel");
  }

  clickRemoveCar() {
    this.removeCarButton.click();
  }
}

export default new EditCarForm();
