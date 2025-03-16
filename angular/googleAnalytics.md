# Implementar Google Analytics

## Requerimientos

- Angular app

## Implementación

index.html
```html
<head>
    <!-- Google Analitycs -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-########"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'G-#######');
  </script>
</head>
```

componente
```typescript
import ....
declare let gtag: any;

public gaEvent(name: string) {
    gtag('event', name, {});
}
```