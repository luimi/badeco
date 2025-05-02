# Express

## Instalacion

```terminal
npm i express dotenv
```

```javascript
require('dotenv').config()
const express = require('express')
const path = require('path');
const app = express()

const { PORT } = process.env

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/page', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.listen(PORT, () => {
    console.log(`* Servidor escuchando en el puerto ${PORT}`)
    console.log(`* Abre http://localhost:${PORT} para ver la app`)
})
```