import { defineConfig, devices } from '@playwright/test'

/**
 * Smoke tests. These exist because two bugs shipped past a green `next build`
 * in one session: a `"use server"` file exporting an object (every form submit
 * 500'd) and an invalid `@custom-variant` (every route 500'd). Both had the
 * same shape — the code compiled, it just did not load.
 *
 * `hasTouch: false` plus the Chromium hover flags matter: headless Chrome
 * otherwise reports no hover-capable pointer, `@media (any-hover: hover)`
 * never matches, and every hover assertion passes against a disabled rule.
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? 'github' : [['list']],
  use: {
    baseURL: process.env.BASE_URL ?? 'http://localhost:3000',
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'desktop-chromium',
      use: {
        ...devices['Desktop Chrome'],
        hasTouch: false,
        launchOptions: {
          args: [
            '--blink-settings=primaryHoverType=2,availableHoverTypes=2,primaryPointerType=4,availablePointerTypes=4',
          ],
        },
      },
    },
  ],
  webServer: {
    // Production build, not `next dev`: dev compiles each route on first
    // request, which races the test runner and produces ERR_ABORTED on
    // cold routes. This also means we test what actually ships.
    command: 'npm run build && npm run start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
})
