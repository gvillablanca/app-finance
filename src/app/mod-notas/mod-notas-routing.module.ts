import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModNotasPage } from './mod-notas.page';

const routes: Routes = [
  {
    path: '',
    component: ModNotasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModNotasPageRoutingModule {}
