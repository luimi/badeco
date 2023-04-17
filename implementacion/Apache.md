# Apache

### Instalar php

```
sudo apt install libapache2-mod-php php php-common php-curl php-gd php-imagick php-mbstring php-mysql php-json php-xsl php-intl php-zip
```

### Instalar Apache

```
sudo apt install apache2
sudo service apache2 start
```

## Extensiones

### MySQLi Extension

```
sudo apt-get install php-mysql
```

## memory\_limit, post\_max\_size, upload\_max_filesize

```
sudo nano /etc/php/{version}/cli/php.ini
# o
sudo nano /etc/php/{version}/apache2/php.ini
# ------------
memory_limit = 128M
post_max_size = 16M
upload_max_filesize = 4M
# -------------
sudo service apache2 restart
```

### Client URL Library (Curl)

```
sudo apt-get install php-curl
```

### Image Processing and GD

```
sudo apt-get install php-gd
```

### Internationalization Functions (Intl)

```
sudo apt-get install php-intl
```

### Multibyte String (Mbstring)

```
sudo apt-get install php-mbstring
```

### SimpleXML, PHP-DOM and PHP-XML

```
sudo apt-get install php-xml
```

### Zip

```
sudo apt-get install php-zip
```

### Memcached

```
sudo apt-get install php-memcached
```

### Image Processing (ImageMagick)

```
sudo apt-get install imagemagick
sudo apt-get install php-imagick
```

### BCMath Arbitrary Precision Mathematics

```
sudo apt-get install php-bcmath
```

### Activar Apache Modules

```
sudo a2enmod headers
sudo a2enmod rewrite
```