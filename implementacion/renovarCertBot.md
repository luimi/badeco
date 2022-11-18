# Renovar certificado Certbot

## Requerimientos
- Certificado creado
- Linux

## Proceso

Detener el servicio que este usando el puerto 443 y ejecutar.

```bash
sudo certbot certonly --standalone -d {dominio}
sudo certbot renew --dry-run
sudo openssl x509 -enddate -noout -in /etc/letsencrypt/live/{dominio}/fullchain.pem
```

---
[Documentación](https://certbot.eff.org/)