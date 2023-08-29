const puppeteer = require('puppeteer');
const fs = require('fs').promises;

describe('BOM Information Display', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: 'new',
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('Displays required BOM information', async () => {
    const htmlContent = await fs.readFile('./t3/t3.html', 'utf-8');
    await page.setContent(htmlContent);

    const studentCode = await fs.readFile('./t3/t3.js', 'utf-8');
    await page.evaluate(studentCode);

    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };

    const expectedStrings = [
      await page.evaluate(() => navigator.userAgentData.platform),
      await page.evaluate(() => navigator.userAgentData.brands[2].brand),
      await page.evaluate(() => navigator.userAgentData.brands[2].version),
      await page.evaluate(() => window.screen.width.toString()),
      await page.evaluate(() => window.screen.height.toString()),
      await page.evaluate(() => window.innerWidth.toString()),
      await page.evaluate(() => window.innerHeight.toString()),
      new Date().toLocaleTimeString('fi-FI', options),
    ];

    // Get the actual HTML content from the page
    const actualHtml = await page.evaluate(() => document.body.innerHTML);

    // Check if each expected string is present in the actual HTML
    for (const expectedString of expectedStrings) {
      expect(actualHtml).toContain(expectedString);
    }
  });
});
