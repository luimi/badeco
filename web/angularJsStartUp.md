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

<body ng-controller="MainController">
    <h1>{{title}}</h1>
    <button ng-click="action()">ChangeTitle</button>
</body>

</html>
```

### app.js

```javascript
angular.module('angularApp', [])
    .controller('MainController', function ($scope) {
        $scope.title = "Title";
        $scope.action = function () {
            $scope.title = "Changed";
        }
    });
```