Quick implementation of MUI core

Example with React Dom server

```javascript
import React from "https://cdn.skypack.dev/react@16.13.1";
import ReactDOMServer from "https://dev.jspm.io/react-dom@16.13.1/server.js";
import {
  Button,
} from "https://denopkg.com/soremwar/deno_npm/@material-ui/core/v4.9.10/core.js";

console.log(
  ReactDOMServer.renderToString(<Button>abc</Button>),
);
```