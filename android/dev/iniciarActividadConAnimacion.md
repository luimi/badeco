# Iniciar Actividad con animación

## Requerimientos
- Proyecto Android Studio

## Proceso

### Animación de abajo hacia arriba (sliding)

**res/anim/slide_in_up.xml**

```xml
<?xml version="1.0" encoding="utf-8"?>
<translate xmlns:android="http://schemas.android.com/apk/res/android"
    android:fromYDelta="100%p" android:toYDelta="0%p"
    android:duration="@android:integer/config_longAnimTime"/>
```

**res/anim/slide_out_up.xml**

```xml
<?xml version="1.0" encoding="utf-8"?>
<translate xmlns:android="http://schemas.android.com/apk/res/android"
    android:fromYDelta="0%p" android:toYDelta="-100%p"
    android:duration="@android:integer/config_longAnimTime"/>
```

**Agregar animación en el evento**

```kotlin
startActivity(intent)
overridePendingTransition(R.anim.slide_in_up, R.anim.slide_out_up)
```

### Animación de arriba hacia abajo (sliding)

**res/anim/slide_in_down.xml**

```xml
<?xml version="1.0" encoding="utf-8"?>
<translate xmlns:android="http://schemas.android.com/apk/res/android"
    android:duration="@android:integer/config_longAnimTime"
    android:fromYDelta="-100%p"
    android:toYDelta="0%p" />
```

**res/anim/slide_out_dow.xml**

```xml
<?xml version="1.0" encoding="utf-8"?>
<translate xmlns:android="http://schemas.android.com/apk/res/android"
    android:duration="@android:integer/config_longAnimTime"
    android:fromYDelta="0%p"
    android:toYDelta="100%p" />
```

**Agregar animación en el evento**

```kotlin
startActivity(intent)
overridePendingTransition(R.anim.slide_in_down, R.anim.slide_out_down)
```

### Animacion de derecha a izquierda (sliding)

**res/anim/slide_in_right.xml**

```xml
<?xml version="1.0" encoding="utf-8"?>
<translate xmlns:android="http://schemas.android.com/apk/res/android"
    android:fromXDelta="100%" android:toXDelta="0%"
    android:fromYDelta="0%" android:toYDelta="0%"
    android:duration="@android:integer/config_longAnimTime"/>
```

**res/anim/slide_out_right.xml**

```xml
<?xml version="1.0" encoding="utf-8"?>
<translate xmlns:android="http://schemas.android.com/apk/res/android"
    android:fromXDelta="0%" android:toXDelta="-100%"
    android:fromYDelta="0%" android:toYDelta="0%"
    android:duration="@android:integer/config_longAnimTime"/>
```

**Agregar animación en el evento**

```kotlin
startActivity(intent)
overridePendingTransition(R.anim.slide_in_right, R.anim.slide_out_right)
```

### Animacion de izquierda a derecha (sliding)

**res/anim/slide_in_left.xml**

```xml
<?xml version="1.0" encoding="utf-8"?>
<translate xmlns:android="http://schemas.android.com/apk/res/android"
    android:fromXDelta="-100%" android:toXDelta="0%"
    android:fromYDelta="0%" android:toYDelta="0%"
    android:duration="@android:integer/config_longAnimTime"/>
```

**res/anim/slide_out_left.xml**

```xml
<?xml version="1.0" encoding="utf-8"?>
<translate xmlns:android="http://schemas.android.com/apk/res/android"
    android:fromXDelta="0%" android:toXDelta="100%"
    android:fromYDelta="0%" android:toYDelta="0%"
    android:duration="@android:integer/config_longAnimTime"/>
```

**Agregar animación en el evento**

```kotlin
startActivity(intent)
overridePendingTransition(R.anim.slide_in_left, R.anim.slide_out_left)
```