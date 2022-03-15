# Identificador Único

## Requerimientos
- Proyecto AndroidStudio

## Proceso

### ID del dispositivo
```kotlin
import android.provider.Settings.Secure
val secure = Secure.getString(getContentResolver(), Secure.ANDROID_ID)
```

### ID aleatorio
```kotlin
val uuid = UUID.randomUUID().toString()
```