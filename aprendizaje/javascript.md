# JavaScript

## Conceptos

**Proxy** - captura eventos de un objeto

**parametro** in variable - verifica que una variable tenga un parametro inicializado

**IntersectionObserver** - evento para ver en que tanto de una vista se esta viendo 

**call,bind y apply** - metodos heredados de function

**‘use strict’;** - uso estricto de la sintaxis del lenguaje

**closure** - retornar una función dentro de una función, la ejecuta también, se puede llamar al closure simple como nombre() y tambien por las subfunciones nombre()() incluyendo valores

**hoisting** - asignación de functions antes del tiempo de ejecución


## Función auto ejecutable 

```javascript
(function(){
    //…
})();
```

## call - bind - apply

```javascript
// Ejecuta el metodo y los valores de objeto se acceden con this.parametro
metodo.call(objeto, parametros)

// Ejecuta el metodo y los valores de objeto se acceden con this.parametro
metodo.apply(objeto,[parametros])

// Devuelve una nueva funciona con los parametros ya agregados
val nuevoMetodo = metodo.bind(objeto)
```

## Crear objeto y prototype

```javascript
// Constructor
function Clase(parametro) {
   this.parametro = parametro
}
// Metodo
Clase.prototype.metodo = function() {}
// Inicializar
let objeto = new Clase(parametro)
```



## Leer elementos desde el dom

```javascript
document.getElementById(‘id’)
document.getElementsByClassName(‘class’)
document.getElementsByTagName(‘div’)
document.querySelector()
let nodeList = document.querySelectorAll()
```

## Crear elementos

```javascript
document.createElement("h1") // cualquier etiqueta
document.createTextNode("¡Hola, Mundo!") // solo texto
```

## Agregar elementos

```javascript
element.appendChild(anotherElement) // al final
element.append(texto,anotherElement) // al final
element.insertBefore(texto, anotherElement) /// al principio
element.insertAdjacentElement("beforebegin", anotherElement)
```

## Eliminar elementos

```javascript
padre.removeChild(nodoAEliminar) // elimina del padre el hijo
nodoAEliminar.remove() // eliminar
padre.replaceChild(nuevoNodo, aRemplazar) // reemplazar
```

## Otras formas para leer y escribir

```javascript
node.outerHTML leer
node.innerHTML escribir
```

## Atributos y propiedades

```javascript
atributos // son los que estan desde el inicio
propiedades // son los que se modifican
```

## convertir numero en moneda

```javascript
window.Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency: 'USD',
    }).format(price)
```

## Eventos en los elementos

```javascript
miElemento.addEventListener("evento", manejador)
button.removeEventListener("click", miFuncionManejadora)
```

## Detener propagacion de Eventos

```javascript
div3.addEventListener("click", event => {
    event.stopPropagation()
});
```
