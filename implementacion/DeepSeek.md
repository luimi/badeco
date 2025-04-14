# DeepSeek Docker

## Requerimientos

- Docker
- + 5GB Disco
- + 4GB Ram 

## Implementación

Usar este Dockerfile

```Dockerfile
FROM ollama/ollama
EXPOSE 11434
RUN ollama serve & sleep 5 && ollama pull deepseek-r1:1.5b
```

Compilar usando
docker build -t deepseek . && docker run -p 11434:11434 -d deepseek
```

## Usar en NodeJs

```javascript
import { Ollama } from 'ollama'

const ollama = new Ollama({ host: 'http://localhost:11434' })

const ask = async () => {
    const response = await ollama.chat({
        model: 'deepseek-r1:1.5b',
        messages: [{ role: 'user', content: 'prompt' }],
    })
    console.log(response)
}

ask()
```