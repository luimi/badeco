# Vista Personalizada (Componente)

## Proceso

### Vista
view_sample.xml

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:orientation="vertical"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content">
    
</LinearLayout>
```
### Atributos
attrs.xml

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <declare-styleable name="SampleView">
        <attr name="image" format="reference"/>
        <attr name="text" format="string"/>
    </declare-styleable>
</resources>
```

### Clase
sampleView.kt

```kotlin
class sampleView(context: Context, attrs: AttributeSet): LinearLayout(context, attrs) {

    init {
        inflate(context, R.layout.view_sample, this)

        val imageView: ImageView = findViewById(R.id.image)
        val textView: TextView = findViewById(R.id.caption)

        val attributes = context.obtainStyledAttributes(attrs, R.styleable.SampleView)
        imageView.setImageDrawable(attributes.getDrawable(R.styleable.SampleView_image))
        textView.text = attributes.getString(R.styleable.SampleView_text)
        attributes.recycle()

    }
}
```