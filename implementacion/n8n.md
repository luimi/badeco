# n8n

## Requerimientos

- Docker

## Implementación

Ejecutar para modo de pruebas
```terminal
docker run -it --rm \
 --name n8n \
 -p 5678:5678 \
 -e N8N_SECURE_COOKIE=false \
 -v n8n_data:/home/node/.n8n \
 docker.n8n.io/n8nio/n8n
```