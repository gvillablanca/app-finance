import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModProdPageRoutingModule } from './mod-prod-routing.module';

import { ModProdPage } from './mod-prod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModProdPageRoutingModule
  ],
  declarations: [ModProdPage]
})
export class ModProdPageModule {}
