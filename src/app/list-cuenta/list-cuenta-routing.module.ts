import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCuentaPage } from './list-cuenta.page';

const routes: Routes = [
  {
    path: '',
    component: ListCuentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCuentaPageRoutingModule {}
