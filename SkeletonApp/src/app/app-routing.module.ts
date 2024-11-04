import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'registro', loadChildren: () => import('./registro/registro.module').then(m => m.RegistroPageModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule) },
  { path: 'perfil-estudiante', loadChildren: () => import('./perfil-estudiante/perfil-estudiante.module').then(m => m.PerfilEstudiantePageModule) },
  { path: 'retroalimentacion', loadChildren: () => import('./retroalimentacion/retroalimentacion.module').then(m => m.RetroalimentacionPageModule) },
  { path: 'configuracion', loadChildren: () => import('./configuracion/configuracion.module').then(m => m.ConfiguracionPageModule) },
  {
    path: 'proximas-clases',
    loadChildren: () => import('./proximas-clases/proximas-clases.module').then( m => m.ProximasClasesPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }