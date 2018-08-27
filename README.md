# Full Request URL [![Build Status](https://img.shields.io/travis/zsoltime/requested-url.svg?style=flat-square)](https://travis-ci.org/zsoltime/requested-url)

> Get the full request URL in Express applications

## Install

```bash
npm install requested-url
```

## Import

### Node

```javascript
const fullUrl = require('requested-url');
```

### ES6 import

```javascript
import fullUrl from 'requested-url';
```

## Usage

```javascript
const express = require('express');
const fullUrl = reqiure('requested-url');

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
