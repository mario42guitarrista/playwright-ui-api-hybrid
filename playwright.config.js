// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    trace: 'on-first-retry',
    headless: process.env.CI ? true : false,
    launchOptions: {
      slowMo: process.env.CI ? 0 : 1000
    }
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ],

  webServer: {
    command: 'npx http-server ./app -p 3000',
    url: 'http://127.0.0.1:3000',
    reuseExistingServer: !process.env.CI
  }
});