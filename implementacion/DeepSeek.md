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