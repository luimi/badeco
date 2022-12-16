# Prototype

```javascript
function Hero(name) {
    this.name = name;
}

Hero.prototype.saludar = function() {
    console.log(`New: ${this.name}`);
};

const zelda = new Hero('Zelda');
zelda.saludar();

const link = new Hero('Link');
link.saludar();
```