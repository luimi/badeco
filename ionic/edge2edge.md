# Aplicar Edge2edge

# Requerimientos
- Ionic App

# Proceso

> capacitor.config.ts

```
...
const config: CapacitorConfig = {
  ...
  android: {
    adjustMarginsForEdgeToEdge: 'force',
  }
};
```

```bash
npx cap sync
```