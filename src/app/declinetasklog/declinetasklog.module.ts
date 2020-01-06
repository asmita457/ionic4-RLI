import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DeclinetasklogPage } from './declinetasklog.page';

const routes: Routes = [
  {
    path: '',
    component: DeclinetasklogPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DeclinetasklogPage]
})
export class DeclinetasklogPageModule {}
