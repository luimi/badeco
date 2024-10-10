# Instalar aab

## Requerimientos

- archivo aab
- BundleTool ([Release](https://github.com/google/bundletool/releases))

## Script

```bash
java -jar "bundletool-all-1.17.0.jar" build-apks --bundle="app-release.aab" --output="app.apks"
java -jar "bundletool-all-1.17.0.jar" install-apks --apks=app.apks
```