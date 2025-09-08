# Parse

## Requerimientos

- npm
- node
- express
- parse-server
- parse-dashboard global
- dotenv
- mongodbURI

## Implementación

### package.json

```json
...
"scripts": {
    "start": "node index.js",
    "dashboard": "source .env && parse-dashboard --dev --appId $PARSE_APPID --masterKey $PARSE_MASTERKEY --serverURL $PARSE_SERVER_URL --appName GeocodeCache"
  },
...
```

### index.js

```javascript
require('dotenv').config()
const express = require('express');
const ParseServer = require('parse-server').ParseServer;
const app = express();

const { PORT, PARSE_MONGODB_URI, PARSE_APPID, PARSE_MASTERKEY, PARSE_SERVER_URL } = process.env;

const server = new ParseServer({
    databaseURI: PARSE_MONGODB_URI,
    cloud: './cloud/main.js',
    appId: PARSE_APPID,
    masterKey: PARSE_MASTERKEY,
    serverURL: PARSE_SERVER_URL
});

const init = async () => {
    await server.start();
    app.use('/parse', server.app);
    app.listen(PORT || 1337, function () {
        console.log(`GeocodeCache running ${PORT || 1337}`);
    });
}

init();
```

### .env

```
PORT=1337
PARSE_MONGODB_URI="mongodb+srv://username:password@data.abcdefg.mongodb.net/cluster?retryWrites=true&w=majority&appName=cluster"
PARSE_APPID="abcdefghojklmnopqrstuvwxyz"
PARSE_MASTERKEY="abcdefghojklmnopqrstuvwxyz"
PARSE_SERVER_URL="http://localhost:1337/parse"
```