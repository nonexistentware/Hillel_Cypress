/// <reference types="cypress" />

describe("Signup form validation", () => {
  beforeEach(() => {
    cy.visit("https://qauto.forstudy.space", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
  });

  describe("First name validation", () => {
    it("Empty name", () => {
      cy.contains("button", "Sign up").click();
      cy.get("#signupName").focus().blur();
      cy.get(".invalid-feedback")
        .should("be.visible")
        .and("contain.text", "Name required");
    });

    it("Name is invalid", () => {
      cy.contains("button", "Sign up").click();
      cy.get("#signupName").type("#%#@%").blur();
      cy.get(".invalid-feedback")
        .should("be.visible")
        .and("contain.text", "Name is invalid");
    });

    it("Name is too short", () => {
      cy.contains("button", "Sign up").click();
      cy.get("#signupName").type("a").blur();
      cy.get(".invalid-feedback")
        .should("be.visible")
        .and("contain.text", "Name has to be from 2 to 20 characters long");
    });

    it("Name is too long", () => {
      cy.contains("button", "Sign up").click();
      cy.get("#signupName").type("ayeryeryeryeryeryeryeryery").blur();
      cy.get(".invalid-feedback")
        .should("be.visible")
        .and("contain.text", "Name has to be from 2 to 20 characters long");
    });

    it("Name border color red", () => {
      cy.contains("button", "Sign up").click();
      cy.get("#signupName").focus().blur();
      cy.get(".invalid-feedback")
        .should("be.visible")
        .and("contain.text", "Name required")
        .and("have.css", "border-color", "rgb(220, 53, 69)");
    });
  });

  describe("Last name validation", () => {
    it("Empty last name", () => {
      cy.contains("button", "Sign up").click();
      cy.get("#signupLastName").focus().blur();
      cy.get(".invalid-feedback")
        .should("be.visible")
        .and("contain.text", "Last name required");
    });

    it("Last name is invalid", () => {
      cy.contains("button", "Sign up").click();
      cy.get("#signupLastName").type("#%#@%").blur();
      cy.get(".invalid-feedback")
        .should("be.visible")
        .and("contain.text", "Last name is invalid");
    });

    it("Last name is too short", () => {
      cy.contains("button", "Sign up").click();
      cy.get("#signupLastName").type("q").blur();
      cy.get(".invalid-feedback")
        .should("be.visible")
        .and(
          "contain.text",
          "Last name has to be from 2 to 20 characters long",
        );
    });

    it("Last name is too long", () => {
      cy.contains("button", "Sign up").click();
      cy.get("#signupLastName").type("ewtewtewttewtewtewtewtewt").blur();
      cy.get(".invalid-feedback")
        .should("be.visible")
        .and(
          "contain.text",
          "Last name has to be from 2 to 20 characters long",
        );
    });

    it("Last name border color red", () => {
      cy.contains("button", "Sign up").click();
      cy.get("#signupLastName").focus().blur();
      cy.get(".invalid-feedback")
        .should("be.visible")
        .and("contain.text", "Last name required")
        .and("have.css", "border-color", "rgb(220, 53, 69)");
    });
  });

  describe("Email validation", () => {
    it("Email is incorrect", () => {
      cy.contains("button", "Sign up").click();
      cy.get("#signupEmail").type("test@gmailcom").blur();
      cy.get(".invalid-feedback")
        .should("be.visible")
        .and("contain.text", "Email is incorrect");
    });

    it("Email required", () => {
      cy.contains("button", "Sign up").click();
      cy.get("#signupEmail").focus().blur();
      cy.get(".invalid-feedback")
        .should("be.visible")
        .and("contain.text", "Email required");
    });

    it("Email border color red", () => {
      cy.contains("button", "Sign up").click();
      cy.get("#signupEmail").focus().blur();
      cy.get(".invalid-feedback")
        .should("be.visible")
        .and("contain.text", "Email required")
        .and("have.css", "border-color", "rgb(220, 53, 69)");
    });
  });

  describe("Password validation", () => {
    it("Password - wrong data", () => {
      cy.contains("button", "Sign up").click();
      cy.get("#signupPassword").type("346tw").blur();
      cy.get(".invalid-feedback")
        .should("be.visible")
        .and(
          "contain.text",
          "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
        );
    });

    it("Password required", () => {
      cy.contains("button", "Sign up").click();
      cy.get("#signupPassword").focus().blur();
      cy.get(".invalid-feedback")
        .should("be.visible")
        .and("contain.text", "Password required");
    });
  });

  describe("Repeat password validation", () => {
    it("Password do not match", () => {
      cy.contains("button", "Sign up").click();
      cy.get("#signupPassword").type("Qwertyui123!").blur();
      cy.get("#signupRepeatPassword").type("Qwertyui123!!!").blur();
      cy.get(".invalid-feedback")
        .should("be.visible")
        .and("contain.text", "Passwords do not match");
    });

    it("Re-enter password required", () => {
      cy.contains("button", "Sign up").click();
      cy.get("#signupPassword").type("Qwertyui123!").blur();
      cy.get("#signupRepeatPassword").focus().blur();
      cy.get(".invalid-feedback")
        .should("be.visible")
        .and("contain.text", "Re-enter password required");
    });
  });

  describe("Register button", () => {
    it("Register new user", () => {
      const email = `testuser_${Date.now()}@gmail.com`;
      console.log(email);

      cy.contains("button", "Sign up").click();
      cy.get("#signupName").type("Name");
      cy.get("#signupLastName").type("Last");
      cy.get("#signupEmail").type(email);
      cy.get("#signupPassword").type("Qwertyui123!");
      cy.get("#signupRepeatPassword").type("Qwertyui123!");
      cy.contains("Register").click();
    });

    it("Register disabled when data invalid", () => {
      cy.contains("button", "Sign up").click();
      cy.get("#signupName").type("#$^#$6").blur();
      cy.get("#signupLastName").type("e34634#$^").blur();
      cy.get("#signupEmail").type("346346i.lcom").blur();
      cy.get("#signupPassword").type("Qwer4").blur();
      cy.get("#signupRepeatPassword").type("ewtwet").blur();
      cy.contains("Register").should("be.disabled");
    });

    it("Register disabled when fields empty", () => {
      cy.contains("button", "Sign up").click();
      cy.get("#signupName").focus().blur();
      cy.get("#signupLastName").focus().blur();
      cy.get("#signupEmail").focus().blur();
      cy.get("#signupPassword").focus().blur();
      cy.get("#signupRepeatPassword").focus().blur();
      cy.contains("Register").should("be.disabled");
    });
  });
});
