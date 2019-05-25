import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SpeiseplanPage } from './speiseplan.page';

import {MatInputModule, MatDatepickerModule} from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: SpeiseplanPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatInputModule,
    MatDatepickerModule
  ],
  declarations: [SpeiseplanPage]
})
export class SpeiseplanPageModule {}