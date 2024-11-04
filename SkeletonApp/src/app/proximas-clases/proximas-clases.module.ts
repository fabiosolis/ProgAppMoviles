import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProximasClasesPageRoutingModule } from './proximas-clases-routing.module';

import { ProximasClasesPage } from './proximas-clases.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProximasClasesPageRoutingModule
  ],
  declarations: [ProximasClasesPage]
})
export class ProximasClasesPageModule {}
