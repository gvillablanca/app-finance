import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModGastoPageRoutingModule } from './mod-gasto-routing.module';

import { ModGastoPage } from './mod-gasto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModGastoPageRoutingModule
  ],
  declarations: [ModGastoPage]
})
export class ModGastoPageModule {}
