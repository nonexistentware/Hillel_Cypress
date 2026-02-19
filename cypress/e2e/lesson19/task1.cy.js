/// <reference types="cypress" />

describe("Search elements on the qauto page", () => {
  beforeEach(() => {
    cy.visit("https://qauto.forstudy.space", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
  });

  it("Sign up button exists", () => {
    cy.contains("button", "Sign up").should("be.visible");
  });

  it("Youtube widget is displayed", () => {
    cy.get('iframe[src*="youtube.com/embed"]')
      .should("exist")
      .and("be.visible");
  });

  it("SVG images are exist on the site", () => {
    cy.get("svg").should("be.visible");
  });

  it("IMG images are exist on the site", () => {
    cy.get('img[src="/assets/images/homepage/info_2.jpg"]').should(
      "be.visible",
    );
  });

  it("Cgheck that About is exist in the Header", () => {
    cy.get(".header").contains("About");
  });
});
