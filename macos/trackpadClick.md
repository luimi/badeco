# Click con un tab suave

## Requerimientos

- MacOS

## Implementación

Abrir terminal e ingresar
```
defaults delete com.apple.AppleMultitouchTrackpad Clicking
defaults delete -currentHost NSGlobalDomain com.apple.mouse.tapBehavior
```

Reiniciar