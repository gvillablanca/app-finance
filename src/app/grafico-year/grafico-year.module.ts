import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraficoYearPageRoutingModule } from './grafico-year-routing.module';

import { GraficoYearPage } from './grafico-year.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GraficoYearPageRoutingModule
  ],
  declarations: [GraficoYearPage]
})
export class GraficoYearPageModule {}
