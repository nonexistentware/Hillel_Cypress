const { defineConfig } = require("cypress");
const fs = require("fs");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://guest:welcome2qauto@qauto.forstudy.space",
    video: true,
    screenshotOnRunFailure: true,

    setupNodeEvents(on, config) {
      on("after:spec", (spec, results) => {
        if (results?.video && results.stats.failures === 0) {
          fs.unlinkSync(results.video);
        }
      });

      return config;
    },
  },
});
