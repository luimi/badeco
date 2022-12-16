# Scope

## Global Scope

```javascript
var message = 'Hello, Platzi!';
var $ = function(message) {
    console.log('Say: ' + message);
};
```

## Function Scope

```javascript
function printNumbers() {
    var i;
    for (i = 0; i < 10; i++) {
        function eventuallyPrintNumber(n) {
        setTimeout(function() {
            console.log(n);
        }, 100);
        }

        eventuallyPrintNumber(i);
    }
}

printNumbers();
```

## Block Scope

```javascript
function printNumbers2() {
    for (let i = 0; i < 10; i++) {
        setTimeout(function() {
        console.log(i);
        }, 100);
    }
}

printNumbers2();
```