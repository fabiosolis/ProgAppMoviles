import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetroalimentacionPage } from './retroalimentacion.page';

const routes: Routes = [
  {
    path: '',
    component: RetroalimentacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RetroalimentacionPageRoutingModule {}
