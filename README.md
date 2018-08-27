# Full Request URL [![Build Status](https://img.shields.io/travis/zsoltime/req-url.svg?style=flat-square)](https://travis-ci.org/zsoltime/req-url)

> Get the full request URL in Express applications

## Install

```bash
npm install req-url
```

## Import

### Node

```javascript
const fullUrl = require('req-url');
```

### ES6 import

```javascript
import fullUrl from 'req-url';
```

## Usage

```javascript
const express = require('express');
const fullUrl = reqiure('req-url');

cosnt app = express();

app.get('/posts/by/:userId', (req, res) => {
  console.log(fullUrl(req));
  // => https://example.com/posts/by/70122?h=true

  // ...
  // ...
});
```

## API

### fullUrl(req)

#### req

Type: `object`

Express request object representing the HTTP request.

### return

Type: `string`

The full request URL including the protocol, host, port, path, and query string.

## Test

```bash
npm install
npm test
```

## License

MIT © Zsolt Meszaros
