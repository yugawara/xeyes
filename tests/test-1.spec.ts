import { test, expect } from '@playwright/test';
import { execSync } from 'child_process';

test('test', async ({ page }) => {
  await page.goto('http://localhost/');
  //console output can be seen in VSCode Playwright Output tab
  // It's called 'Reveal test output' 
  try {
    const stdout = execSync("sudo docker stop hello-postgres");
    console.log(`stdout: ${stdout.toString()}`);
  } catch (error) {
    console.error('Error:', error);
  }
  await expect(page.getByRole('heading', { name: 'Hello from' })).toHaveCount(1)
  try {
    const stdout = execSync("sudo docker start hello-postgres");
    console.log(`stdout: ${stdout.toString()}`);
  } catch (error) {
    console.error('Error:', error);
  }
});