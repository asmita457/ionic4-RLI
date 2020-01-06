import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TaskLogHelpPage } from './task-log-help.page';

const routes: Routes = [
  {
    path: '',
    component: TaskLogHelpPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TaskLogHelpPage]
})
export class TaskLogHelpPageModule {}
