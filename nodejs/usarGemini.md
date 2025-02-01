# Gemini

## Requerimientos

- Proyecto NodeJs
- ApiKey (aistudio.google.com)

## Implementación

### Instalar paquete

```terminal
npm i @google/generative-ai
```

### Utilizar

```javascript
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(apikey);

exports.gemini = async (request) => {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(request.params.prompt);
    return result.response.text()
}

```