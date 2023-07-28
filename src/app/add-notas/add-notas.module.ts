import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNotasPageRoutingModule } from './add-notas-routing.module';

import { AddNotasPage } from './add-notas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNotasPageRoutingModule
  ],
  declarations: [AddNotasPage]
})
export class AddNotasPageModule {}
