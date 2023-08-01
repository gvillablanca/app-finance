import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModGastoPage } from './mod-gasto.page';

const routes: Routes = [
  {
    path: '',
    component: ModGastoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModGastoPageRoutingModule {}
