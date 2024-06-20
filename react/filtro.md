# Filtro

```javascript
const [filter, setFilter] = useState("")

//...

<input type="text" placeholder="Filtro..." aria-label="filtro" value={filter} onChange={(evt) => setFilter(evt.target.value)}/>

//...

array.filter((item) => item.value.toLowerCase().includes(filter.toLowerCase())).map...
```