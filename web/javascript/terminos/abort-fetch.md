# Abort Fetch

Abort esta para detener las peticiones en fetch

```javascript
const url =
        'https://images.pexels.com/photos/974470/nature-stars-milky-way-galaxy-974470.jpeg?q=100';
let controller = new AbortController();

try {
    const response = await fetch(url, { signal: controller.signal });
    const blob = await response.blob();
    const imgUrl = URL.createObjectURL(blob);
    img.src = imgUrl;
} catch (error) {
    console.log(error.message);
}
controller.abort();
```