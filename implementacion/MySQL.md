# MySQL

### Instalar mysql (mariadb)

```
sudo apt-get install mariadb-server
# o
sudo apt install mysql-server
```

### Configurar base de datos

```
sudo mysql_secure_installation
```

### Crear base de datos y usuario admin

```
sudo mysql -u root
CREATE DATABASE {nombredb};
USE {nombredb};
CREATE USER '{usuario}'@'localhost' IDENTIFIED BY '{clave}';
GRANT ALL PRIVILEGES ON *.* TO '{usuario}'@'localhost';
FLUSH PRIVILEGES;
exit;
```