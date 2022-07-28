import { test, expect } from "@playwright/test";

test("assert on plain web-component", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("plain-component")).toHaveClass("findme");
  await expect(page.locator("plain-component")).toHaveText(/Hello world/);
});

test("assert on div in web-component", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("div-component")).toHaveClass("findme");
  await expect(page.locator("div-component >> div")).toHaveText(/Hello world/);
});
