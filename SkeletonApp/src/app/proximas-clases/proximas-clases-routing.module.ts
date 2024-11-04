import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProximasClasesPage } from './proximas-clases.page';

const routes: Routes = [
  {
    path: '',
    component: ProximasClasesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProximasClasesPageRoutingModule {}
