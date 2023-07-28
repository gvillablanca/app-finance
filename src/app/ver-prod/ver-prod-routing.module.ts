import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerProdPage } from './ver-prod.page';

const routes: Routes = [
  {
    path: '',
    component: VerProdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerProdPageRoutingModule {}
