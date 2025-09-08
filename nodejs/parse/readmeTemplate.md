# Name

## Instalation

```bash
cd  name
npm  i
```

## Configure

.env file

```enviroment
PORT=4000
PARSE_MONGODB_URI="mongodb+srv://user:password@main.abc123.mongodb.net/Main?retryWrites=true&w=majority&appName=Main"
PARSE_APPID="abcedfghijklmnopqrstuvwxyz"
PARSE_MASTERKEY="abcedfghijklmnopqrstuvwxyz"
PARSE_RESTKEY="abcedfghijklmnopqrstuvwxyz"
PARSE_SERVER_URL="http://localhost:4000/parse"
```

## Run

```bash
npm run start
```

## Dashboard

```bash
npm run dashboard
```

## Config variables
```
| Name | Type | Default | MasterKey | 
|--|--|--|--|--|
| name | Boolean |true| true|
```

## Role

Insert new role "Admin"

## User

> CLP - Authenticated: Read

| Name | Type | Class | Default | Required | 
|--|--|--|--|--|
| name | Boolean || true| true|

## Classes

### Class

> CLP - Authenticated: Read

| Name | Type | Class | Default | Required | 
|--|--|--|--|--|
| name | Boolean || true| true|
