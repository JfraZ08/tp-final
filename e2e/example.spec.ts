import { test, expect } from '@playwright/test';

test('left deck', async ({ page }) => {
  await page.goto('http://localhost:5174/'); // arriver sur la calculatrice
  await page.getByRole('button', { name: '1' }).click();
  await page.getByRole('button', { name: 'sum' }).click();
  await page.getByRole('button', { name: '1' }).click();
  await page.getByRole('button', { name: 'sum' }).click();
  await page.getByRole('button', { name: '2' }).click();
  await page.getByRole('button', { name: '=' }).click();
  await expect(page.locator('#score')).toHaveValue('4')
  // le score s'affiche sur la partie concernée


  // Expect a title "to contain" a substring.
});

test('right deck', async ({ page }) => {
  await page.goto('http://localhost:5174/'); // arriver sur la calculatrice
  await page.getByRole('button', { name: '2' }).click();
  await page.getByRole('button', { name: 'sum' }).click();
  await page.getByRole('button', { name: '2' }).click();
  await page.getByRole('button', { name: 'sum' }).click();
  await page.getByRole('button', { name: '2' }).click();
  await page.getByRole('button', { name: 'soustraction' }).click();
  await page.getByRole('button', { name: '1' }).click();
  await page.getByRole('button', { name: 'soustraction' }).click();
  await page.getByRole('button', { name: '1' }).click();
  await page.getByRole('button', { name: '=' }).click();
  await expect(page.locator('#score')).toHaveValue('4')
  // same score 


})

