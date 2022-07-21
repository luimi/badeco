# Iniciar App Con El Sistema

## Requerimientos
- Proyecto AndroidStudio

## Proceso

### AndroidManifest.xml
```xml
<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />
<application ...>
<receiver
    android:name=".receiver.StartMyServiceAtBootReceiver"
    android:label="StartMyServiceAtBootReceiver">
    <intent-filter>
        <action android:name="android.intent.action.BOOT_COMPLETED" />
    </intent-filter>
</receiver>
</application>
```

### ClassBroadcastReceiver
```kotlin
class ClassBroadcastReceiver: BroadcastReceiver() {
    override fun onReceive(p0: Context?, p1: Intent?) {
        if (Intent.ACTION_BOOT_COMPLETED == p1?.getAction()) {
            //Event
        }
    }
}
```