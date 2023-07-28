import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModNotasPageRoutingModule } from './mod-notas-routing.module';

import { ModNotasPage } from './mod-notas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModNotasPageRoutingModule
  ],
  declarations: [ModNotasPage]
})
export class ModNotasPageModule {}
