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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(PORT)
```