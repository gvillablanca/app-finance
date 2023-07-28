import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNotasPage } from './add-notas.page';

const routes: Routes = [
  {
    path: '',
    component: AddNotasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNotasPageRoutingModule {}
