const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    experimentalRunAllSpecs: true,
  },
  hideXhr: false,
  chromeWebSecurity: false,
  modifyObstructiveCode: false,
  viewportWidth: 867,
  viewportHeight: 1017,
  video: true,
})
