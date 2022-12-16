# Observer

```javascript
function handleIntersection(entries) {
    const entry = entries[0];
}
const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.25,
});

observer.observe(view);

```