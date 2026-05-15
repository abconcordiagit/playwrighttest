import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  timeout: 5000,

  use: {
    baseURL: 'https://ecommerce-playground.lambdatest.io/',
    browserName: 'chromium',
    headless: true,
    viewport: null,   // IMPORTANT
    launchOptions: {
      args: ['--start-maximized']
    },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure'
  },

  reporter: [
    ['html'],
    ['list']
  ]
});