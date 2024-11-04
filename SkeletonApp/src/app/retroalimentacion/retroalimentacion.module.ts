import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RetroalimentacionPageRoutingModule } from './retroalimentacion-routing.module';

import { RetroalimentacionPage } from './retroalimentacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RetroalimentacionPageRoutingModule
  ],
  declarations: [RetroalimentacionPage]
})
export class RetroalimentacionPageModule {}
