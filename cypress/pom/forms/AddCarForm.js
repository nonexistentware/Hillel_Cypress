class AddCarForm {
  get modal() {
    return cy.get(".modal-content");
  }

  get modalTitle() {
    return cy.get(".modal-title");
  }

  get brandSelect() {
    return cy.get("#addCarBrand");
  }

  get selectedBrand() {
    return this.brandSelect.find("option:selected");
  }

  get modelSelect() {
    return cy.get("#addCarModel");
  }

  get mileageField() {
    return cy.get("#addCarMileage");
  }

  // get mileageError() {
  //   return cy.get("#addCarMileage").parents(".mb-3").find(".invalid-feedback");
  // }

  get mileageError() {
    return cy.contains("Mileage has to be from 0 to 999999");
  }

  get emptyMileageError() {
    return cy.contains("Mileage cost required");
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

  get emptyClick() {
    return cy.get(".modal-content").click("topRight");
  }

  get successToast() {
    return cy.get(".alert-success, .toast-body").contains("Car added");
  }

  emptyClick() {
    cy.get(".modal-body").click("topLeft");
  }

  selectBrand(brand) {
    this.brandSelect.select(brand);
  }

  selectModel(model) {
    this.modelSelect.select(model);
  }

  setMileage(mileage) {
    this.mileageField.clear().type(String(mileage));
  }

  submit() {
    this.addButton.click();
  }

  get mileageField() {
    return cy.get("#addCarMileage");
  }

  get addButton() {
    return cy.get(".modal-content button.btn-primary");
  }

  selectBrand(brand) {
    cy.get("#addCarBrand").select(brand);
  }

  selectModel(model) {
    cy.get("#addCarModel")
      .should("not.be.disabled")
      .find("option")
      .contains(model)
      .should("exist");

    cy.get("#addCarModel").select(model);
  }

  setMileage(value) {
    this.mileageField.clear().type(value);
  }

  fillAndSubmit(brand, model, mileage) {
    this.selectBrand(brand);
    this.selectModel(model);
    this.setMileage(mileage);
    this.addButton.should("not.be.disabled").click();
  }

  emptyClick() {
    cy.get(".modal-body").click("topLeft");
  }

  get emptyMileageError() {
    return cy
      .get("#addCarMileage")
      .closest(".form-group")
      .find(".invalid-feedback");
  }
}

export default new AddCarForm();
