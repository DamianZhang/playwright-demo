const { test, expect } = require('@playwright/test');
  
test.describe('Product Health:', () => {
  test('Liveness Should Be OK', async ({ request }) => {
    const _response = await request.get('/api/product/liveness');
    console.log("------------------------------");
    console.log(await _response.text());
    console.log("------------------------------");
    expect(_response.status()).toBe(200);
    expect(_response.ok()).toBeTruthy();
    expect(await _response.json()).toMatchObject({
      code: 200,
      msg: 'ok'
    });
  });

  test('Readiness Should Be OK', async ({ request }) => {
    const _response = await request.get('/api/product/readiness');
    expect(_response.status()).toBe(200);
    expect(_response.ok()).toBeTruthy();
    expect(await _response.json()).toMatchObject({
      code: 200,
      msg: 'ok'
    });
  });
})
