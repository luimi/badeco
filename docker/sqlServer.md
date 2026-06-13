# Instancia SQLServer (mssql)

## Requerimientos

- Docker
- GIT

## Proceso

### Descargar proyecto

```terminal
git clone https://github.com/Kennethguerra3/SqlServer2022Docker.git
cd SqlServer2022Docker
```
### Crear imagen

```terminal
docker buildx build --build-arg MSSQL_SA_PASSWORD="MiClave@2024*" -t sqlserver .
``` 

### Iniciar imagen

```terminal
docker run -d -p 1433:1433 -e MSSQL_SA_PASSWORD="MiClave@2024*" sqlserver
```