# Implementar ZXING en tu proyecto

### build.gradle (app)
```xml
implementation 'com.journeyapps:zxing-android-embedded:4.2.0'
```
### AndroidManifes.xml
```xml
    <application android:hardwareAccelerated="true" ... >
```

### Activity (java)
```java
// Iniciar escaneo
new IntentIntegrator(this).initiateScan(); 


// Capturar resultado
@Override
protected void onActivityResult(int requestCode, int resultCode, Intent data) {
    IntentResult result = IntentIntegrator.parseActivityResult(requestCode, resultCode, data);
    if(result != null && result.getContents() != null) {
            //result.getContents() tiene el resultado
    } else {
        super.onActivityResult(requestCode, resultCode, data);
    }
}
```

### Activity (Kotlin)

```kotlin
// Iniciar escaneo
IntentIntegrator(this).initiateScan()


// Capturar resultado
override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        val result = IntentIntegrator.parseActivityResult(requestCode, resultCode, data)
        if (result != null && result.contents != null) {
            //result.contents tiene el resultado
        } else {
            super.onActivityResult(requestCode, resultCode, data)
        }
    }
```

---

[Documentación](https://github.com/journeyapps/zxing-android-embedded)