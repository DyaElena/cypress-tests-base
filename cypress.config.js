const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalStudio: true,
    setupNodeEvents(on, config) {},
    specPattern: "cypress/**/*.spec.{js,jsx,ts,tsx}",
  },
  defaultCommandTimeout: 10000,
});
