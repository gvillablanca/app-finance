import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModProdPage } from './mod-prod.page';

const routes: Routes = [
  {
    path: '',
    component: ModProdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModProdPageRoutingModule {}
