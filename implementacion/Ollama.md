# Ollama

# Requerimientos

*Minimos*
- 8gb - RAM
- 10gb - Libre

*Recomendados*
- 16~32gb - RAM
- 64gb - Libre
- 8~12gb - GPU


# Instalar

´´´bash
curl -fsSL https://ollama.com/install.sh | sh
´´´

## Exponer en la red

´´´bash
sudo nano /etc/systemd/system/ollama.service 

[Service]
...
Environment="OLLAMA_HOST=0.0.0.0:11434"
´´´

