# StartUp AngularJs

## Archivos

### index.html

```html
<!doctype html>
<html ng-app="angularApp">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
    <script src="app.js"></script>
</head>

<body ng-controller="MainController as ctrl">
    <h1>{{ctrl.title}}</h1>
    <button ng-click="ctrl.action()">ChangeTitle</button>
</body>

</html>
```

### app.js

```javascript
angular.module('angularApp', [])
    .controller('MainController', function () {
        this.title = "Title";
        this.action = function () {
            this.title = "Changed";
        }
    });
```