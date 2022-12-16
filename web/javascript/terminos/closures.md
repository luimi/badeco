# Closures


## IIFE

```javascript
(function() {
let color = 'green';

function printColor() {
    console.log(color);
}

printColor();
})();
```

## Funciones que regresan funciones

```javascript

function makeCounter(n) {
    let count = n;

    return {
        increase: function() {
        count = count + 1;
        },
        decrease: function() {
        count = count - 1;
        },
        getCount: function() {
        return count;
        },
    };
}

let counter = makeCounter(7);
```