const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

     baseUrl: 'https://www.demoblaze.com/',
     viewportWidth: 1920,
     viewportHeight: 1080,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
