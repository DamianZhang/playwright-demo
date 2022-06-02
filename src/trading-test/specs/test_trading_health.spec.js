const { test, expect } = require('@playwright/test');
const baseURL = 'https://testnet10.hash.green/api';

test.describe('Trading Health:', () => {
  test('Liveness Should Be OK', async ({ request }) => {
    const _response = await request.get(`${baseURL}/trading/liveness`);
    expect(_response.status()).toBe(200);
    expect(_response.ok()).toBeTruthy();
    expect(await _response.json()).toMatchObject({
      code: 200,
      msg: 'ok'
    });
  });

  test('Readiness Should Be OK', async ({ request }) => {
    const _response = await request.get(`${baseURL}/trading/readiness`);
    expect(_response.status()).toBe(200);
    expect(_response.ok()).toBeTruthy();
    expect(await _response.json()).toMatchObject({
      code: 200,
      msg: 'ok'
    });
  });
})
