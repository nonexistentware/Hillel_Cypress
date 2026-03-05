/// <reference types="cypress" />

describe("First name validation", () => {
  beforeEach(() => {
    cy.visit("https://qauto.forstudy.space", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
  });

  it("Empty name", () => {
    cy.contains("button", "Sign up").click();
    cy.get("#signupName").focus().blur();
    cy.get(".invalid-feedback")
      .should("be.visible")
      .and("contain.text", "Name required");
  });

  it("Name is invalid", () => {
    cy.contains("button", "Sign up").click();
    cy.get("#signupName").type("#%#@%").focus().blur();
    cy.get(".invalid-feedback")
      .should("be.visible")
      .and("contain.text", "Name is invalid");
  });

  it("Name is too short", () => {
    cy.contains("button", "Sign up").click();
    cy.get("#signupName").focus().blur();
    cy.get("#signupName").type("a");
    cy.get(".invalid-feedback")
      .should("be.visible")
      .and("contain.text", "Name has to be from 2 to 20 characters long");
  });

  it("Name is too long", () => {
    cy.contains("button", "Sign up").click();
    cy.get("#signupName").focus().blur();
    cy.get("#signupName").type("ayeryeryeryeryeryeryeryery");
    cy.get(".invalid-feedback")
      .should("be.visible")
      .and("contain.text", "Name has to be from 2 to 20 characters long");
  });

  it("Border color red", () => {
    cy.contains("button", "Sign up").click();
    cy.get("#signupName").focus().blur();
    cy.get(".invalid-feedback")
      .should("be.visible")
      .and("contain.text", "Name required")
      .and("have.css", "border-color", "rgb(220, 53, 69)");
  });
});

describe("Last name validation", () => {
  beforeEach(() => {
    cy.visit("https://qauto.forstudy.space", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
  });

  it("Empty last name", () => {
    cy.contains("button", "Sign up").click();
    cy.get("#signupLastName").focus().blur();
    cy.get(".invalid-feedback")
      .should("be.visible")
      .and("contain.text", "Last name required");
  });

  it("Last name is invalid", () => {
    cy.contains("button", "Sign up").click();
    cy.get("#signupLastName").type("#%#@%").focus().blur();
    cy.get(".invalid-feedback")
      .should("be.visible")
      .and("contain.text", "Last name is invalid");
  });

  it("Last name is too short", () => {
    cy.contains("button", "Sign up").click();
    cy.get("#signupLastName").type("q").focus().blur();
    cy.get(".invalid-feedback")
      .should("be.visible")
      .and("contain.text", "Last name has to be from 2 to 20 characters long");
  });

  it("Last name is too long", () => {
    cy.contains("button", "Sign up").click();
    cy.get("#signupLastName").type("ewtewtewttewtewtewtewtewt").focus().blur();
    cy.get(".invalid-feedback")
      .should("be.visible")
      .and("contain.text", "Last name has to be from 2 to 20 characters long");
  });

  it("Border color red", () => {
    cy.contains("button", "Sign up").click();
    cy.get("#signupLastName").focus().blur();
    cy.get(".invalid-feedback")
      .should("be.visible")
      .and("contain.text", "Last name required")
      .and("have.css", "border-color", "rgb(220, 53, 69)");
  });
});

describe("Email validation", () => {
  beforeEach(() => {
    cy.visit("https://qauto.forstudy.space", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
  });

  it("Email is incorrect", () => {
    cy.contains("button", "Sign up").click();
    cy.get("#signupEmail").type("test@gmailcom").focus().blur();
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
  beforeEach(() => {
    cy.visit("https://qauto.forstudy.space", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
  });

  it("Password - wrong data", () => {
    cy.contains("button", "Sign up").click();
    cy.get("#signupPassword").type("346tw").focus().blur();
    cy.get(".invalid-feedback")
      .should("be.visible")
      .and(
        "contain.text",
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
      );
  });

  it("Password reequired", () => {
    cy.contains("button", "Sign up").click();
    cy.get("#signupPassword").focus().blur();
    cy.get(".invalid-feedback")
      .should("be.visible")
      .and("contain.text", "Password required");
  });

  it("Password - colored red", () => {
    cy.contains("button", "Sign up").click();
    cy.get("#signupPassword").focus().blur();
    cy.get(".invalid-feedback")
      .should("be.visible")
      .and("contain.text", "Password required")
      .and("have.css", "border-color", "rgb(220, 53, 69)");
  });
});

describe("Password validation", () => {
  beforeEach(() => {
    cy.visit("https://qauto.forstudy.space", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
  });

  it("Password do not match", () => {
    cy.contains("button", "Sign up").click();
    cy.get("#signupPassword").type("Qwertyui123!").focus().blur();
    cy.get("#signupRepeatPassword").type("Qwertyui123!!!").focus().blur();
    cy.get(".invalid-feedback")
      .should("be.visible")
      .and("contain.text", "Passwords do not match");
  });

  it("Re-enter password required", () => {
    cy.contains("button", "Sign up").click();
    cy.get("#signupPassword").type("Qwertyui123!").focus().blur();
    cy.get("#signupRepeatPassword").focus().blur();
    cy.get(".invalid-feedback")
      .should("be.visible")
      .and("contain.text", "Re-enter password required");
  });

  it("Border colored red", () => {
    cy.contains("button", "Sign up").click();
    cy.get("#signupRepeatPassword").focus().blur();
    cy.get(".invalid-feedback")
      .should("be.visible")
      .and("contain.text", "Re-enter password required")
      .and("have.css", "border-color", "rgb(220, 53, 69)");
  });
});

describe("Button register", () => {
  beforeEach(() => {
    cy.visit("https://qauto.forstudy.space", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
  });
  it("Register new user", () => {
    cy.contains("button", "Sign up").click();
    cy.get("#signupName").type("Name").focus().blur();
    cy.get("#signupLastName").type("Last").focus().blur();
    cy.get("#signupEmail").type("igor.sinchuk+test1@gmai.lcom").focus().blur();
    cy.get("#signupPassword").type("Qwertyui123!").focus().blur();
    cy.get("#signupRepeatPassword").type("Qwertyui123!").focus().blur();
    cy.contains("Register").click();
  });

  it("Check that button register is disables in case all data are invalid", () => {
    cy.contains("button", "Sign up").click();
    cy.get("#signupName").type("#$^#$6").focus().blur();
    cy.get("#signupLastName").type("e34634#$^").focus().blur();
    cy.get("#signupEmail").type("346346i.lcom").focus().blur();
    cy.get("#signupPassword").type("Qwer4").focus().blur();
    cy.get("#signupRepeatPassword").type("ewtwet").focus().blur();
    cy.contains("Register").should("be.disabled");
  });

  it("Check that button register is disabled in case all fields are empty", () => {
    cy.contains("button", "Sign up").click();
    cy.get("#signupName").focus().blur();
    cy.get("#signupLastName").focus().blur();
    cy.get("#signupEmail").focus().blur();
    cy.get("#signupPassword").focus().blur();
    cy.get("#signupRepeatPassword").focus().blur();
    cy.contains("Register").should("be.disabled");
  });
});
