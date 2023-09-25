# Django

## Requerimientos
- python 3+
- pip

## Notas

### Instalacion

```
brew install python
pip install django
```

### Verificar instalacion

```
django-admin --version
python -m django --version
```

### Nuevo proyecto

```
django-admin startproject {nombre} .
```

### Instalar dependencias

```
pip install -r {archivo}
python3 -m pip install -r {archivo}
```

### Ejecucion

```
python manage.py runserver
python3 manage.py runserver
python manage.py runserver 3000
```

### Crear apps

```
python manage.py startapp {nombre}
```

### Ejecutar migraciones

```
python manage.py migrate
```

### Crear migraciones

```
python manage.py makemigrations {nombreApp}
```





