import { test, expect } from '@playwright/test'

/** Every public route, with the heading that proves it rendered its own content. */
const ROUTES: [path: string, heading: RegExp][] = [
  ['/', /We build the business/i],
  ['/services', /Everything a product needs/i],
  ['/work', /Products in production/i],
  ['/blog', /Writing/i],
  ['/about', /senior technology partner/i],
  ['/contact', /Tell us what you.{0,3}re building/i],
  ['/chowk', /interactive version/i],
  ['/privacy', /What we collect/i],
  ['/styleguide', /Ink/i],
]

test.describe('routes load', () => {
  for (const [path, heading] of ROUTES) {
    test(`${path} returns 200 and renders its h1`, async ({ page }) => {
      const response = await page.goto(path)
      expect(response?.status(), `${path} HTTP status`).toBe(200)
      await expect(page.locator('h1').first()).toContainText(heading)
      const body = await page.locator('body').innerText()
      expect(body, `${path} shows an unfilled [PLACEHOLDER]`).not.toMatch(/\[[A-Z][^\]]{2,60}\]/)
    })
  }

  test('unknown route 404s but still renders the branded page', async ({ page }) => {
    const response = await page.goto('/definitely-not-a-page')
    expect(response?.status()).toBe(404)
    await expect(page.locator('h1')).toContainText(/doesn.{0,3}t exist/i)
  })

  test('metadata routes serve', async ({ request }) => {
    for (const [path, type] of [
      ['/robots.txt', /text\/plain/],
      ['/sitemap.xml', /xml/],
    ] as const) {
      const res = await request.get(path)
      expect(res.status(), path).toBe(200)
      expect(res.headers()['content-type'], path).toMatch(type)
    }
  })
})

test.describe('stylesheet actually applies', () => {
  // The CSS break that 500'd the site would have been caught here: the page
  // compiled, but the stylesheet failed to parse at request time.
  test('design tokens and utilities are live', async ({ page }) => {
    await page.goto('/')
    const paper = await page.evaluate(() =>
      getComputedStyle(document.documentElement).getPropertyValue('--paper').trim()
    )
    expect(paper, '--paper token').toMatch(/#(faf7f2|12110f)/i)

    const btn = page.locator('.btn-drop').first()
    await expect(btn).toBeVisible()
    expect(await btn.evaluate((el) => getComputedStyle(el).position)).toBe('relative')
  })
})

test.describe('interaction', () => {
  test('hover draws the brass rule and retracts it', async ({ page }) => {
    await page.goto('/')
    const row = page.locator('.rule-draw').first()
    await row.scrollIntoViewIfNeeded()
    // let the scroll-reveal finish before measuring the pseudo-element
    await expect(row).toBeVisible()
    await page.waitForTimeout(800)

    const scaleX = () =>
      row.evaluate((el) => {
        const t = getComputedStyle(el, '::after').transform
        return t === 'none' ? 1 : Number(t.match(/matrix\(([-\d.]+)/)?.[1] ?? NaN)
      })

    expect(await scaleX()).toBeLessThan(0.05)
    await row.hover()
    await expect.poll(scaleX, { timeout: 2000 }).toBeGreaterThan(0.95)
    await page.mouse.move(0, 0)
    await expect.poll(scaleX, { timeout: 2000 }).toBeLessThan(0.05)
  })

  test('theme toggle flips the dark class and persists', async ({ page }) => {
    await page.goto('/')
    const isDark = () => page.evaluate(() => document.documentElement.classList.contains('dark'))
    const before = await isDark()
    await page.getByRole('button', { name: /toggle light and dark/i }).click()
    await expect.poll(isDark, { timeout: 2000 }).toBe(!before)
    await page.reload()
    expect(await isDark(), 'theme survives reload').toBe(!before)
  })

  test('"Book a call" lands on the contact form', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'Book a call', exact: true }).click()
    await expect(page).toHaveURL(/\/contact#enquiry$/)
    await expect(page.locator('#enquiry form')).toBeInViewport()
  })

  test('mobile menu opens and exposes every nav link', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto('/')
    await page.getByRole('button', { name: /open menu/i }).click()
    const drawer = page.locator('dialog.nav-drawer')
    await expect(drawer).toBeVisible()
    for (const label of ['Services', 'Work', 'About', 'Writing']) {
      await expect(drawer.getByRole('link', { name: label, exact: true })).toBeVisible()
    }
  })
})

test.describe('contact form', () => {
  // This is the test that would have caught the `"use server"` export bug,
  // which 500'd every submission while the build passed.
  test('rejects invalid input without claiming success', async ({ page }) => {
    await page.goto('/contact')
    // Deliberately submitted instantly — validation must still win over the
    // timing guard, so a fast human sees field errors, not a generic failure.
    await page.fill('input[name="name"]', 'T')
    await page.fill('input[name="email"]', 'not-an-email')
    await page.fill('textarea[name="message"]', 'short')
    await page.click('button[type="submit"]')

    await expect(page.getByRole('alert').first()).toBeVisible({ timeout: 10_000 })
    await expect(page.getByText(/valid email address/i)).toBeVisible()
    await expect(page.getByRole('status')).toHaveCount(0)
  })

  test('a valid submission reaches the server action and resolves', async ({ page }) => {
    await page.goto('/contact')
    // The timing guard rejects anything submitted within 1.5s of mount.
    await page.waitForTimeout(2000)
    await page.fill('input[name="name"]', 'Smoke Test')
    await page.fill('input[name="email"]', 'smoke@example.com')
    await page.fill(
      'textarea[name="message"]',
      'Automated smoke test verifying the contact form reaches the server action end to end.'
    )

    const [response] = await Promise.all([
      page.waitForResponse((r) => r.url().includes('/contact') && r.request().method() === 'POST'),
      page.click('button[type="submit"]'),
    ])
    // A 500 here is the `"use server"` class of bug.
    expect(response.status(), 'server action HTTP status').toBe(200)

    // Either it sent, or it reported an honest delivery error — never silence.
    await expect(page.getByRole('status').or(page.getByRole('alert')).first()).toBeVisible({
      timeout: 15_000,
    })
  })
})

test.describe('CMS', () => {
  test('/studio boots the Sanity Studio and is not indexable', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))
    const response = await page.goto('/studio')
    expect(response?.status()).toBe(200)
    // Unauthenticated visitors land on Sanity's login screen — proof it mounted.
    await expect(page.getByText(/choose login provider/i)).toBeVisible({ timeout: 30_000 })
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/)
    expect(errors, 'Studio runtime errors').toEqual([])
  })

  test('site CSS does not leak into the Studio', async ({ page }) => {
    await page.goto('/studio')
    await expect(page.getByText(/choose login provider/i)).toBeVisible({ timeout: 30_000 })
    const token = await page.evaluate(() =>
      getComputedStyle(document.documentElement).getPropertyValue('--paper').trim()
    )
    expect(token, 'Ink & Brass tokens must not be present inside /studio').toBe('')
  })

  test('homepage content is served from Sanity', async ({ page }) => {
    await page.goto('/')
    for (const title of [
      'Technology consulting & architecture',
      'AI engineering',
      'Cloud, DevOps & infrastructure',
      'Launching something new',
      'Trial sprint',
      'Who owns the code?',
      'KundaliPro',
      'Bumpp',
    ]) {
      await expect(page.getByText(title, { exact: true }).first(), title).toBeAttached()
    }
  })

  test('publishing gates hold — no unapproved testimonials, no placeholders', async ({ page }) => {
    await page.goto('/')
    // No testimonial has permissionGranted, so the whole section must be absent.
    await expect(page.getByRole('heading', { name: /what clients say/i })).toHaveCount(0)
    const body = await page.locator('body').innerText()
    for (const placeholder of ['[CLIENT NAME]', '[COMPANY]', '[WHERE THIS CAME FROM]']) {
      expect(body, `${placeholder} leaked onto the page`).not.toContain(placeholder)
    }
  })
})
