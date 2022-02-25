# Compilar y firmar APK desde la terminal

## Requerimientos
- Proyecto Android Studio

### build.gradle (app)

```

android {
    signingConfigs {
        release {
            storeFile file("../ruta/keystore")
            storePassword "clave"
            keyAlias "alias"
            keyPassword "clave"
        }
    }
    defaultConfig {
        ...
        applicationVariants.all { variant ->
            variant.outputs.all {
                outputFileName = "nombre-${variant.buildType.name}-${variant.versionName}.apk"
            }
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}


```

### Ejecutar
```bash
./gradlew assembleRelease
```

---

[Source](https://coderwall.com/p/zrdsmq/signing-configs-with-gradle-android)