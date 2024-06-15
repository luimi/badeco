# Express

## Instalacion

```terminal
npm i express dotenv
```

```javascript
require('dotenv').config()
const express = require('express')
const app = express()

const { PORT } = process.env

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(PORT)
```