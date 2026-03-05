import GaragePage from "../../pom/pages/GaragePage";
import AddCarForm from "../../pom/forms/AddCarForm";
import EditCarForm from "../../pom/forms/EditCarForm";

describe("Garage - Add Car", () => {
  beforeEach(() => {
    cy.fixture("user").then(({ validUser }) => {
      cy.session(
        validUser.email,
        () => {
          cy.login(validUser.email, validUser.password);
        },
        {
          cacheAcrossSpecs: true,
        },
      );
    });

    cy.visit("/panel/garage", {
      auth: {
        username: Cypress.env("guestLogin"),
        password: Cypress.env("guestPassword"),
      },
    });

    cy.visit("/panel/garage", {
      auth: {
        username: Cypress.env("guestLogin"),
        password: Cypress.env("guestPassword"),
      },
    });
  });

  it('should open "Add a car" modal when clicking "Add car" button', () => {
    GaragePage.openAddCarModal();
    AddCarForm.modalTitle.should("be.visible").and("contain", "Add a car");
  });

  it('should display brand dropdown with default value "Audi"', () => {
    GaragePage.openAddCarModal();
    AddCarForm.selectedBrand.should("have.text", "Audi");
  });

  it('should display model dropdown with default value "TT"', () => {
    GaragePage.openAddCarModal();
    AddCarForm.modelSelect.find("option:selected").should("have.text", "TT");
  });

  it('should have "Add" button disabled when mileage is empty', () => {
    GaragePage.openAddCarModal();
    AddCarForm.addButton.should("be.disabled");
  });

  it('should enable "Add" button after filling mileage', () => {
    GaragePage.openAddCarModal();
    AddCarForm.setMileage(1000);
    AddCarForm.addButton.should("not.be.disabled");
  });

  it('should "Add" the car with mileage 0', () => {
    GaragePage.openAddCarModal();
    AddCarForm.mileageField.clear().type("0").blur();
    AddCarForm.addButton.should("not.be.disabled");
  });

  it("should show error when mileage is negative", () => {
    GaragePage.openAddCarModal();
    AddCarForm.mileageField.clear().type("-1").blur();
    AddCarForm.mileageError.should("be.visible");
  });

  it("should show error with empty mileage field", () => {
    GaragePage.openAddCarModal();
    AddCarForm.mileageField.clear().blur();
    AddCarForm.emptyClick();
    AddCarForm.emptyMileageError.should("be.visible").and("contain", "Mileage");
  });

  it("should successfully add a car and show success toast", () => {
    GaragePage.openAddCarModal();
    AddCarForm.selectBrand("Audi");
    AddCarForm.selectModel("TT");
    AddCarForm.setMileage(1000);
    AddCarForm.addButton.click();
    GaragePage.successToast.should("be.visible");
  });

  it('should close modal when clicking "Cancel" button', () => {
    GaragePage.openAddCarModal();
    AddCarForm.modal.should("be.visible");
    AddCarForm.cancelButton.click();
    AddCarForm.modal.should("not.exist");
  });

  it("should close modal when clicking close (X) button", () => {
    GaragePage.openAddCarModal();
    AddCarForm.modal.should("be.visible");
    AddCarForm.closeButton.click();
    AddCarForm.modal.should("not.exist");
  });

  it("should change brand dropdown and update model options", () => {
    GaragePage.openAddCarModal();
    AddCarForm.selectBrand("BMW");
    AddCarForm.modelSelect.should("exist");
  });

  it("should add car with brand BMW and model 3 Series", () => {
    GaragePage.openAddCarModal();
    AddCarForm.selectBrand("BMW");
    AddCarForm.selectModel("3");
    AddCarForm.setMileage(5000);
    AddCarForm.addButton.should("not.be.disabled");
    AddCarForm.addButton.click();
    GaragePage.successToast.should("be.visible");
  });

  it("should remove car from garage", () => {
    GaragePage.openAddCarModal();
    AddCarForm.fillAndSubmit("Audi", "TT", 1000);

    GaragePage.successToast.should("be.visible");

    GaragePage.openEditCarModal();

    EditCarForm.modal.should("be.visible");

    EditCarForm.clickRemoveCar();

    GaragePage.verifyCarRemoved();
  });

  it("should logout from garage", () => {
    GaragePage.logout();
    cy.url().should("include", "/");
    cy.get("h1").should("be.visible");
  });
});
