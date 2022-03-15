# Multiples lenguajes

## Requerimientos
- Proyecto IONIC angular

## Proceso
En un proyecto ya creado:

Instalar

```bash
npm i @ngx-translate/core @ngx-translate/http-loader
ionic generate service utils/language
```
Crear carpeta llamada i18n dentro de assets y agregar los json que seran donde estén los textos a traducir, los nombres de los archivos deberán ser "es.json" para el idioma español, "en.json" para el idioma ingles.

### app.module.ts
```typescript

...
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { LanguageService } from './utils/language.service';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export function LanguageLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
...
imports: [...,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (LanguageLoader),
        deps: [HttpClient]
      }
    })],
...
providers: [LanguageService],

```
### app.component.ts
```typescript
constructor(private languageCtrl: LanguageService) {
    languageCtrl.getDefaultLanguage();
  }
```
### LanguageService

```
import { TranslateService } from '@ngx-translate/core';

constructor(private translate: TranslateService) { }
  getDefaultLanguage() {
    let language = this.translate.getBrowserLang();
    this.translate.setDefaultLang(language);
    return language;
  }
  setLanguage(setLang) {
    this.translate.use(setLang);
  }

```

### En cualquier pagina que tenga module.ts

```
import { TranslateModule } from '@ngx-translate/core';

imports: [
    ...
    TranslateModule
  ],
```