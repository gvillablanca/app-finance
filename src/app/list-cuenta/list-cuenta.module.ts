import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCuentaPageRoutingModule } from './list-cuenta-routing.module';

import { ListCuentaPage } from './list-cuenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCuentaPageRoutingModule
  ],
  declarations: [ListCuentaPage]
})
export class ListCuentaPageModule {}
