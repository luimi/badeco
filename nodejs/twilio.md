# Twilio

## Requerimientos
- Proyecto NodeJs
- Twilio

## Proceso

### Instalacion
```bash
npm i twilio
```

### Importacion
```javascript
const twilio = require('twilio');
const client = new twilio('{accountSid}', '{authToken}');
```

### Enviar sms
```javascript
client.messages
    .create({
    to: '{TelefonoDestino}',
    from: '{TelefonoAsignado}',
    body: '{Mensaje}',
    })
    .then((message) => console.log(message.sid));
```

### Llamada con reproducción de sonido
```javascript
 client.calls
    .create({
        url: 'http://demo.twilio.com/docs/voice.xml',
        to: '{TelefonoDestino}',
        from: '{TelefonoAsignado}'
    })
    .then(call => console.log(call.sid));
```