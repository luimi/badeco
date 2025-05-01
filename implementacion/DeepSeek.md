
# DeepSeek Docker

## Requerimientos
- Docker
- 5GB Disco
- 4GB Ram

## Implementación

**Usar este Dockerfile**

```Dockerfile
FROM ollama/ollama
EXPOSE 11434
RUN ollama serve & sleep 5 && ollama pull deepseek-r1:1.5b
```
Compilar usando
```bash
docker build -t deepseek . && docker run -p 11434:11434 -d deepseek
```

**Desde terminal**

```bash
# Iniciar el contenedor de ollama
docker run -d -v ollama:/root/.ollama -p 11434:11434 --name deepseek ollama/ollama
# Descargar el modelo de Deepseek
docker exec -it deepseek ollama pull deepseek-r1:1.5b
# En caso de querer interactuar con la terminal (Opcional)
docker exec -it deepseek ollama run deepseek-r1:1.5b
```

## Usar en NodeJs

```javascript
import { Ollama } from  'ollama'
const  ollama = new  Ollama({ host:  'http://localhost:11434' })
const  ask = async () => {
	const  response = await  ollama.generate({
        model:  'deepseek-r1:1.5b',
        prompt: 'genera un corto cuento sobre un sapo que toca violin',
	})
    console.log(response)
}
ask()
```
---
[Documentación](https://ollama.com/blog/ollama-is-now-available-as-an-official-docker-image)