import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http'

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

import { LOCALE_ID } from '@angular/core';

registerLocaleData(localeEs);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }, // Establece el locale por defecto a español
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy } // Mantiene la configuración de IonicRouteStrategy
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
