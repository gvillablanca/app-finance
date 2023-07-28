import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerMesPage } from './ver-mes.page';

const routes: Routes = [
  {
    path: '',
    component: VerMesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerMesPageRoutingModule {}
