import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ApprovedReceiptPage } from './approved-receipt.page';

const routes: Routes = [
  {
    path: '',
    component: ApprovedReceiptPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ApprovedReceiptPage]
})
export class ApprovedReceiptPageModule {}
