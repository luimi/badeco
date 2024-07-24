# Subscription

## Requerimientos

- Projecto angular

## Implementación

Necesitas crear un componente Service/Injectable que se pueda importar en cualquier otro componente

```
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service {

  private _listener: BehaviorSubject<string>;
  constructor() { 
    this._listener = new BehaviorSubject<string>("valor inicial");
  }

  get listener() {
    return this._listener.asObservable();
  }
  changeValue(valor: string){
    this._listener.next(valor)
  }
}

```

Implementar donde se quiera escuchar los cambios y escribir nuevo valor

```
valorListener: string = ""

constructor(private serviceCtrl: Service) {}

ngOnInit(){
    this.serviceCtrl.listener.subscribe(valorNuevo => this.valorListener = valorNuevo)
}

nuevoValor() {
    this.serviceCtrl.changeValue("nuevo valor")
}
```