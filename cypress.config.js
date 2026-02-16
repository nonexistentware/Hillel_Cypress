const { defineConfig } = require("cypress");
const fs = require("fs");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    video: true,
    screenshotOnRunFailure: true,

    setupNodeEvents(on, config) {
      on("after:spec", (spec, results) => {
        // delete video if test passed
        if (results?.video && results.stats.failures === 0) {
          fs.unlinkSync(results.video);
        }
      });

      return config;
    },
  },
});
