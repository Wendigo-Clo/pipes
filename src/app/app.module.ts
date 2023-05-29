import { NgModule, LOCALE_ID } from '@angular/core';//local_id es para la fecha personalizada
import { BrowserModule } from '@angular/platform-browser';

// Para fecha personalizadas siguientes 2 lineas
import { registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es';
import localFr from '@angular/common/locales/fr';

registerLocaleData (localEs);
registerLocaleData (localFr);

import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    ContrasenaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    //Esto se agrega para poder personalizar las fechas
    {
    provide: LOCALE_ID,
    useValue:'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
