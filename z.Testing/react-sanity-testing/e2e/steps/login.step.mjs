import {
  Given,
  When,
  Then,
  Before,
  After,
  setDefaultTimeout,
} from "@cucumber/cucumber";

import { chromium, expect } from "@playwright/test";

setDefaultTimeout(60 * 1000);

let page, browser;

Before(async function () {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
});

Given("I am on the login page", async function () {
  await page.goto("http://localhost:5173");
});

When("I enter {string} in the username field", async function (username) {
  await page.fill('input[name="username"]', username);
});

When("I enter {string} in the password field", async function (password) {
  await page.fill('input[name="password"]', password);
});

When("I click the login button", async function () {
  await page.click('button[type="submit"]');
});

Then("I should see a successful login message", async function () {
  await expect(page).toHaveURL(/.*success/);
});

After(async function () {
  await browser.close();
});
