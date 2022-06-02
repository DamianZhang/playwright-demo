const config = {
  use: {
    baseURL: 'https://testnet10.hash.green',
    browserName: 'chromium',
    headless: true,
  },
  reporter: [ ['html', { open: 'never' }] ],
};

module.exports = config;
