const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');

test.describe('Hybrid UI + API Tests', () => {
  test('should display user from API in UI', async ({ page, request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users/1');
    expect(response.status()).toBe(200);

    const user = await response.json();
    const userName = user.name;

    const home = new HomePage(page);

    await home.open();
    await home.fillUser(userName);
    await home.submit();

    await expect(home.getResult()).toHaveText(`User loaded: ${userName}`);
  });

  test('should handle empty user input', async ({ page }) => {
    const home = new HomePage(page);

    await home.open();
    await home.fillUser('');
    await home.submit();

    await expect(home.getResult()).toHaveText('User loaded: ');
  });
});