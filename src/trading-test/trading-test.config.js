const config = {
  use: {
    browserName: 'chromium',
    headless: true,
  },
  reporter: [ ['html', { open: 'never' }] ],
};

module.exports = config;
