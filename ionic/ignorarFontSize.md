# Ignorar tamaño de letra de Android

## Requerimientos
- Proyecto en capacitor

## Proceso
### Instalar

```bash
npm install phonegap-plugin-mobile-accessibility
npm install @ionic-native/mobile-accessibility
npm install cordova-plugin-device
npm install @ionic-native/device
npm install cordova-plugin-network-information
npm install @ionic-native/network
ionic cap sync
```
### app.module.ts

```typescript
import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';

@NgModule({
  ...
  providers: [
    ...
    MobileAccessibility],
  ...
})
```
### app.component.ts

```typescript
import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';

constructor(private platform: Platform, private mobileAccesibility: MobileAccessibility) {
    platform.ready().then(()=> {
      if(mobileAccesibility){
        mobileAccesibility.usePreferredTextZoom(false);
      }
    });
  }
```
---
[github](https://github.com/ionic-team/capacitor/discussions/3706?sort=old)
[ionicframework](https://forum.ionicframework.com/t/strange-resolution-issue-with-samsung-s20/201469/2)