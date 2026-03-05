const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://guest:welcome2qauto@qauto2.forstudy.space/",
    specPattern: "cypress/e2e/**/*.cy.js",
    excludeSpecPattern: ["cypress/pom/**"],
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
  },
  env: {
    userEmail: "testuser.qauto2@gmail.com",
    userPassword: "Password1",
    guestLogin: "guest",
    guestPassword: "welcome2qauto",
  },
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "QAuto2 Bug Tests",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    autoOpen: true,
  },
});
