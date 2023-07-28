import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'clima',
    loadChildren: () => import('./clima/clima.module').then( m => m.ClimaPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'notas',
    loadChildren: () => import('./notas/notas.module').then( m => m.NotasPageModule)
  },
  {
    path: 'add-notas',
    loadChildren: () => import('./add-notas/add-notas.module').then( m => m.AddNotasPageModule)
  },
  {
    path: 'mod-notas',
    loadChildren: () => import('./mod-notas/mod-notas.module').then( m => m.ModNotasPageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
  {
    path: 'market',
    loadChildren: () => import('./market/market.module').then( m => m.MarketPageModule)
  },
  {
    path: 'add-prod',
    loadChildren: () => import('./add-prod/add-prod.module').then( m => m.AddProdPageModule)
  },
  {
    path: 'ver-prod',
    loadChildren: () => import('./ver-prod/ver-prod.module').then( m => m.VerProdPageModule)
  },
  {
    path: 'cuentas',
    loadChildren: () => import('./cuentas/cuentas.module').then( m => m.CuentasPageModule)
  },
  {
    path: 'ver-mes',
    loadChildren: () => import('./ver-mes/ver-mes.module').then( m => m.VerMesPageModule)
  },
  {
    path: 'list-cuenta',
    loadChildren: () => import('./list-cuenta/list-cuenta.module').then( m => m.ListCuentaPageModule)
  },
  {
    path: 'add-gasto',
    loadChildren: () => import('./add-gasto/add-gasto.module').then( m => m.AddGastoPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'grafico',
    loadChildren: () => import('./grafico/grafico.module').then( m => m.GraficoPageModule)
  },
  {
    path: 'grafico-year',
    loadChildren: () => import('./grafico-year/grafico-year.module').then( m => m.GraficoYearPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
