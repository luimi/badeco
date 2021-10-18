# Modal centrado con auto altura

## Requerimientos
- Proyecto IONIC

## Proceso

### global.scsss
```scss
.modal {
  --height: auto;
  .modal-wrapper{
    width: 90vw;
    .ion-page {
      position: relative;
      contain: content;
      max-height: 90vh;
      .modal-content {
        overflow: auto;
      }
    }
  }
}
```
---
[fuente](https://forum.ionicframework.com/t/dynamic-modal-height-based-on-content-in-ionic-v4/139595/11)