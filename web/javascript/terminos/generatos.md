# Generatos

Los generators permiten crear funciones que se pueden detener en algun momento y continuar luego

```javascript
function* simpleGenerator() {
    console.log('GENERATOR START');
    yield 1;
    yield 2;
    yield 3;
    console.log('GENERATOR END');
}

const gen = simpleGenerator();
let status = gen.next();
```
## Podemos hacer generadores infinitos.

```javascript
function* idMaker() {
    let id = 1;
    while (true) {
        yield id;
        id = id + 1;
    }
}
const gen = idMaker();
let status = gen.next();
```
## Cuando llamamos next también podemos pasar valores que la función recibe.

```javascript
function* idMakerWithReset() {
    let id = 1;
    let reset;
    while (true) {
        reset = yield id;
        if (reset) {
            id = 1;
        } else {
            id = id + 1;
        }
    }
}
const gen = idMakerWithReset();
let status = gen.next();
let status = gen.next(true);

```

## Ahora hagamos un ejemplo un poco más complejo: la secuencia fibonacci

```javascript
function* fibonacci() {
    let a = 1;
    let b = 1;
    while (true) {
        const nextNumber = a + b;
        a = b;
        b = nextNumber;
        yield nextNumber;
    }
}
const gen = fibonacci();
let status = gen.next();
```