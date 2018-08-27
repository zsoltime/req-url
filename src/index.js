'use strict';

const url = require('url');

module.exports = req => url.format({
  host: req.get('host'),
  pathname: req.originalUrl,
  protocol: req.protocol,
});
