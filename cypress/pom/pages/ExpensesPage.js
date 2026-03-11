class ExpensesPage {
  visit() {
    cy.visit("/panel/expenses", {
      auth: {
        username: Cypress.env("guestLogin"),
        password: Cypress.env("guestPassword"),
      },
    });
  }

  get expensesList() {
    return cy.get("table tbody, .expenses-list");
  }

  get pageTitle() {
    return cy.get("h1");
  }

  get addCarButton() {
    return cy.get("[qa='add-car-btn'], button.btn-primary").contains("Add car");
  }

  openAddCarModal() {
        cy.visit("/panel/garage");
            cy.get("button").contains("Add car").click();
  }

  get addFuelExpenseButton() {
        return cy.get("button.btn-primary").contains("Add an expense");
  }

  clickAddFuelExpense() {
    this.addFuelExpenseButton.first().click();
  }
}

export default new ExpensesPage();
