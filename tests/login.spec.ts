import { test, expect } from '@playwright/test';

test('Valid login', async ({ page }) => {
  // ARRANGE
  await page.goto('https://raider-test-site.onrender.com/');
  await page.getByRole('link', { name: /login or register|login/i }).first().click();

  // ACT
  await page.getByLabel('Login name').fill('aguspe');
  await page.getByLabel('Password').fill('12341234');
  await page.getByRole('button', { name: /login$/i }).click();

  // ASSERT
  await expect(page).not.toHaveURL(/login/i);
});

test('Invalid password', async ({ page }) => {
  // ARRANGE
  await page.goto('https://raider-test-site.onrender.com/');
  await page.getByRole('link', { name: /login or register|login/i }).first().click();

  // ACT
  await page.getByLabel('Login name').fill('aguspe');
  await page.getByLabel('Password').fill('wrong');
  await page.getByRole('button', { name: /login$/i }).click();

  // ASSERT
  await expect(page.getByText(/incorrect|error/i)).toBeVisible();
});

test('Empty username', async ({ page }) => {
  // ARRANGE
  await page.goto('https://raider-test-site.onrender.com/');
  await page.getByRole('link', { name: /login or register|login/i }).first().click();

  // ACT
  await page.getByLabel('Password').fill('12341234');
  await page.getByRole('button', { name: /login$/i }).click();

  // ASSERT
  await expect(page.locator('#loginFrm_loginname')).toHaveValue('');
});

test('Navigate to Products page', async ({ page }) => {
  // ARRANGE
  await page.goto('https://raider-test-site.onrender.com/');

  // ACT
  await page.locator('a').filter({ hasText: /apparel|makeup|skincare|fragrance|men/i }).first().click();

  // ASSERT
  await expect(page).toHaveURL(/product|category/i);
});