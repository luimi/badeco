# Splash

## Requerimientos
- Proyecto Android
- Kotlin

## Proceso

```kotlin
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(layout)
        Timer("Splash",false).schedule(4000){
            runOnUiThread {
                continueSplash()
            }
        }
    }

    fun continueSplash(){
        val intent = Intent(this,Activity::class.java)
        startActivity(intent)
        finish()
    }

    override fun onBackPressed() {}
```