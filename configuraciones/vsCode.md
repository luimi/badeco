# Visual Studio Code

## Atajos

> Cambiar tabs

```
openEditorAtIndex - cmd+1,2,3,4,5,6,7,8,9
```

> Guardar todo

```
saveAll - cmd+s
```

> Clonar linea hacia abajo

```
copyLinesDownAction - cmd+d
```

## Snippets

### Global (global.code-snippets)

> Lorem Ipsum

```json
"Genera Lorem ipsum": {
  "prefix": "lorem",
  "body": [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  ],
  "description": "Genera Lorem ipsum"
}
```

### Markdown (markdown.json)

> Nueva entrada

```json
"newEntry": {
  "prefix": "new entry",
  "body": [
    "# Titulo",
    "",
    "## Requerimientos",
    "",
    "## Implementación"
  ],
  "description": "Genera nueva entrada"
}
```

### TypeScript React (typescriptreact.json)

> Nuevo componente

```json
"newComponent": {
    "prefix": "new component",
    "description": "Crea un componente nuevo en typescript para React",
    "body": [
        "import React, { FC } from 'react'",
        "",
        "interface ${TM_FILENAME_BASE}Props {",
        "  $1",
        "}",
        "",
        "const ${TM_FILENAME_BASE}: FC<${TM_FILENAME_BASE}Props> = ({ $2 }) => {",
        "  return (",
        "    <div>",
        "     ${3:$TM_FILENAME_BASE}",
        "    </div>",
        "  )",
        "}",
        "",
        "export default ${TM_FILENAME_BASE};"
    ],
}
```