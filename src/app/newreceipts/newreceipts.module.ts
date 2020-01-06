import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewreceiptsPage } from './newreceipts.page';

const routes: Routes = [
  {
    path: '',
    component: NewreceiptsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewreceiptsPage]
})
export class NewreceiptsPageModule {}
