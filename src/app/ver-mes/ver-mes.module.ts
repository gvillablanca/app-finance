import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerMesPageRoutingModule } from './ver-mes-routing.module';

import { VerMesPage } from './ver-mes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerMesPageRoutingModule
  ],
  declarations: [VerMesPage]
})
export class VerMesPageModule {}
