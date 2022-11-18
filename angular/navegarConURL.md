# Navegar desde la URL

## Requerimientos

- Proyecto Angular

## Proceso

En el archivo app.module.ts

```typescript
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { ..., useHash: true})
  ],
  exports: [RouterModule]
})
```