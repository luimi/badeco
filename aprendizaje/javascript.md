# JavaScript

## Conceptos

*Proxy* - captura eventos de un objeto
*parametro* in variable - verifica que una variable tenga un parametro inicializado
*IntersectionObserver* - evento para ver en que tanto de una vista se esta viendo 
*call,bind y apply* - metodos heredados de function

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