'use strict';

const fullUrl = require('.');

it('should get the full URL from the request object', () => {
  const reqMock = {
    get: () => 'example.com',
    protocol: 'http',
    originalUrl: '/path/to/file',
  };

  expect(fullUrl(reqMock)).toBe('http://example.com/path/to/file');
});
