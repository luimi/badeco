# EmptyState

# Requerimientos
- IONIC
- Angular

# Proceso

empty-state.html

``` html
<div class="parent" [ngStyle]="{'height': height}">
  <div class="child">
    <ion-icon *ngIf="icon" [name]="icon" [ngStyle]="{'color': color}"></ion-icon>
    <h3 [ngStyle]="{'color': color}">{{message}}</h3>
  </div>
</div>
```

empty-state.css

```css
.parent {
    position: relative;
    width: 100%;
}

.child {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

ion-icon {
    font-size: 120px;
}
```

empty-state.ts

```typescript
export class EmptyStateComponent implements OnInit {
  @Input() icon = '';
  @Input() message = '';
  @Input() height = '200px';
  @Input() color = '#BBBBBB';
  constructor() { }

  ngOnInit() {}

}
``` 