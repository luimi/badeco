# PrestaShop

## requerimientos

- PHP >5.5 <=7.1
- MySQL
- Git
- NodeJS 14+ y NPM
- Composer
- Make

## Proceso

### Instalar los paquetes necesarios

```
sudo apt install -y apache2 libapache2-mod-php php php-common php-curl php-gd php-imagick php-mbstring php-mysql php-json php-xsl php-xml php-intl php-zip php-bcmath php-memcached mysql-server ca-certificates unzip nano
```

### Iniciar los servicios

```
service apache2 start
service mysql start
```

### Configurar base de datos

```
sudo mysql -u root
CREATE DATABASE {baseDeDatos};
USE {baseDeDatos};
CREATE USER '{usuario}'@'localhost' IDENTIFIED BY '{contraseña}';
GRANT ALL PRIVILEGES ON *.* TO '{usuario}'@'localhost';
FLUSH PRIVILEGES;
exit;
```

### Configurar php.ini

```
sudo nano /etc/php/{version}/apache2/php.ini
ctrl+w para buscar
max_input_vars = 5000
memory_limit = 256M
post_max_size = 128M
upload_max_filesize = 128M
sudo a2enmod rewrite
```

### Reiniciar Apache

```
service apache2 restart
```

### Configurar PrestaShop

```
cd /var/www/html
rm index.html
# Buscar el link y descargar la version deseada
# https://www.prestashop.com/en/versions
wget https://github.com/PrestaShop/PrestaShop/releases/download/8.0.3/prestashop_8.0.3.zip
unzip prestashop.zip
```

### Instalacion

Ingresa a la url del servidor y realiza la instalacion

## Posibles errores

> You need to grant write permissions for PHP on the following directory: /var/www/html

```
sudo chown -R www-data:www-data /var/www/html
```

‌

> E: Package 'mysql-server' has no installation candidate

```
sudo apt install mariadb-server
```

---

[Documentacion](https://docs.prestashop-project.org/v.8-documentation/v/english/getting-started/installing-prestashop "‌")