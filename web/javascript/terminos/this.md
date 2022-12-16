# This

## this en el scope global

```javascript
console.log(`this: ${this}`);
```

## this en el scope de una función

```javascript
function whoIsThis() {
    return this;
}

console.log(`whoIsThis(): ${whoIsThis()}`);
```

## this en el scope de una función en strict mode

```javascript
function whoIsThisStrict() {
    'use strict';
    return this;
}

console.log(`whoIsThisStrict(): ${whoIsThisStrict()}`);
```

## this en el contexto de un objeto

```javascript
const person = {
    name: 'Gabriel',
    saludar: function() {
        console.log(`Hola soy ${this.name}`);
    },
};

person.saludar();
```

## this cuando sacamos a una función de un objeto

```javascript
const accion = person.saludar;
accion();
```

## this en el contexto de una "clase"

```javascript
function Person(name) {
    this.name = name;
}

Person.prototype.saludar = function() {
    console.log(`Me llamo ${this.name}`);
};

const angela = new Person('Angela');
angela.saludar();
```