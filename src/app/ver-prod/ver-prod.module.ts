import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerProdPageRoutingModule } from './ver-prod-routing.module';

import { VerProdPage } from './ver-prod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerProdPageRoutingModule
  ],
  declarations: [VerProdPage]
})
export class VerProdPageModule {}
