// @ts-check
import { test, expect } from '@playwright/test'

const LOCAL_HOST_URL = 'http://localhost:5173'

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCAL_HOST_URL)

  // Expect a title "to contain" a substring.
  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc).toBeTruthy()
})

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/')

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click()

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible()
// })
