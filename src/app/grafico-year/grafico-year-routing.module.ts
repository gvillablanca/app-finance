import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GraficoYearPage } from './grafico-year.page';

const routes: Routes = [
  {
    path: '',
    component: GraficoYearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GraficoYearPageRoutingModule {}
