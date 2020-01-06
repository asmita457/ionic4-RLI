import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ApprovedTasklogPage } from './approved-tasklog.page';

const routes: Routes = [
  {
    path: '',
    component: ApprovedTasklogPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ApprovedTasklogPage]
})
export class ApprovedTasklogPageModule {}
