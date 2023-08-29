const puppeteer = require('puppeteer');
const fs = require('fs').promises;

describe('Todo List HTML Generation', () => {
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

  test('Generated HTML matches expected structure', async () => {
    // Include the initial HTML content from the separate file
    const initialHtml = await fs.readFile('./t1/t1.html', 'utf-8');
    await page.setContent(initialHtml);

    // Include the student's JavaScript code from the separate file
    const studentCode = await fs.readFile('./t1/t1.js', 'utf-8');
    await page.evaluate(studentCode);

    // Get the generated HTML content
    const generatedHtml = await page.evaluate(
      () => document.querySelector('ul').innerHTML
    );

    // Include the expected HTML content from the separate file
    const expectedHtml = await fs.readFile(
      './tests/expectedHTML/t1.html',
      'utf-8'
    );

    // Compare the sanitized generated HTML structure with the sanitized expected HTML structure
    const sanitizedGeneratedHtml = sanitizeHtmlStructure(generatedHtml);
    const sanitizedExpectedHtml = sanitizeHtmlStructure(expectedHtml);

    expect(sanitizedGeneratedHtml.trim()).toEqual(sanitizedExpectedHtml.trim());
  });
});

// Function to sanitize HTML by removing specific attribute values and whitespace
function sanitizeHtmlStructure(html) {
  return html.replace(/<input[^>]*>/g, '').replace(/<!--[\s\S]*?-->|\s/g, '');
}
