import GaragePage from "../../pom/pages/GaragePage";
import AddCarForm from "../../pom/forms/AddCarForm";
import AddExpenseForm from "../../pom/forms/AddExpenseForm";
import ExpensesPage from "../../pom/pages/ExpensesPage";

describe("Fuel Expenses - Add Expense", () => {
  beforeEach(() => {
    cy.fixture("user").then(({ validUser }) => {
      cy.session(
        validUser.email,
        () => {
          cy.login(validUser.email, validUser.password);
        },
        { cacheAcrossSpecs: true },
      );
    });
    cy.visit("/panel/expenses");
  });

  // it("should add fuel expense", () => {});

  it("should add a new fuel expense", () => {
    cy.get("body").then(($body) => {
      if ($body.find(".car-name").length === 0) {
        ExpensesPage.openAddCarModal();
        AddCarForm.fillAndSubmit("Audi", "TT", 1000);
        cy.get(".alert-success, .toast-body").should("be.visible");
      }
    });
  });

  it('should open "Add an expense" modal when clicking "Add fuel expense"', () => {
    ExpensesPage.clickAddFuelExpense();
    AddExpenseForm.modalTitle
      .should("be.visible")
      .and("contain", "Add an expense");
  });

  it("should display correct vehicle name in vehicle dropdown", () => {
    ExpensesPage.clickAddFuelExpense();
    AddExpenseForm.vehicleSelect.should("be.visible");
  });

  it("should pre-fill mileage with car current mileage", () => {
    ExpensesPage.clickAddFuelExpense();
    AddExpenseForm.mileageField.should("not.have.value", "");
  });

  it("should pre-fill report date with today's date", () => {
    ExpensesPage.clickAddFuelExpense();
    AddExpenseForm.dateField.should("not.have.value", "");
  });

  it('should have "Add" button disabled when liters and cost are empty', () => {
    ExpensesPage.clickAddFuelExpense();
    AddExpenseForm.addButton.should("be.disabled");
  });

  it('should enable "Add" button when all required fields are filled', () => {
    ExpensesPage.clickAddFuelExpense();
    AddExpenseForm.setLiters(40);
    AddExpenseForm.setTotalCost(60);
    AddExpenseForm.addButton.should("not.be.disabled");
  });

  it("should show error for invalid liters value (0)", () => {
    ExpensesPage.clickAddFuelExpense();
    AddExpenseForm.litersField.type("0").blur();
    AddExpenseForm.litersError.should("be.visible");
  });

  // it.only("should show error for liters exceeding maximum", () => {
  //   ExpensesPage.clickAddFuelExpense();
  //   AddExpenseForm.litersField.type("1000").blur();
  //   AddExpenseForm.litersError.should("be.visible");
  // });

  it("should show error for liters exceeding maximum", () => {
    ExpensesPage.clickAddFuelExpense();

    AddExpenseForm.litersField.clear().type("1000").blur();

    AddExpenseForm.litersError.should("be.visible");
  });

  it("should show error for invalid total cost value (0)", () => {
    ExpensesPage.clickAddFuelExpense();
    AddExpenseForm.totalCostField.type("0").blur();
    AddExpenseForm.costError.should("be.visible");
  });

  // it.only("should show error when mileage is less than car mileage", () => {
  //   ExpensesPage.clickAddFuelExpense();
  //   AddExpenseForm.setMileage(1);
  //   AddExpenseForm.mileageField.blur();
  //   AddExpenseForm.mileageError.should("be.visible");
  // });

  it("should show error when mileage is less than car mileage", () => {
    ExpensesPage.clickAddFuelExpense();

    AddExpenseForm.mileageField.clear().type("1").blur();

    AddExpenseForm.mileageError.should("be.visible");
  });

  it('should close modal when clicking "Cancel"', () => {
    ExpensesPage.clickAddFuelExpense();
    AddExpenseForm.cancelButton.click();
    AddExpenseForm.modal.should("not.exist");
  });

  it('should close modal when clicking "Cancel"', () => {
    ExpensesPage.clickAddFuelExpense();

    AddExpenseForm.cancelButton.click();

    AddExpenseForm.modal.should("not.be.visible");
  });

  it('should close modal when clicking "X" button', () => {
    ExpensesPage.clickAddFuelExpense();
    AddExpenseForm.closeButton.click();
    AddExpenseForm.modal.should("not.exist");
  });

  it("should successfully add fuel expense with valid data", () => {
    ExpensesPage.clickAddFuelExpense();
    AddExpenseForm.fillAndSubmit(1500, 40, 60);
    cy.url().should("include", "/panel/expenses");
    ExpensesPage.expensesList.should("be.visible");
  });

  it("should display added expense in expenses list", () => {
    ExpensesPage.clickAddFuelExpense();
    AddExpenseForm.fillAndSubmit(2000, 35, 52);
    ExpensesPage.expensesList.should("contain", "35");
    ExpensesPage.expensesList.should("contain", "52");
  });
});
