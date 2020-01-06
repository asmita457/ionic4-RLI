import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'notifications', loadChildren: './notifications/notifications.module#NotificationsPageModule' },
  { path: 'aboutus', loadChildren: './aboutus/aboutus.module#AboutusPageModule' },
  { path: 'contactus', loadChildren: './contactus/contactus.module#ContactusPageModule' },
  { path: 'apptutorial', loadChildren: './apptutorial/apptutorial.module#ApptutorialPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'receipts', loadChildren: './receipts/receipts.module#ReceiptsPageModule' },
  { path: 'newreceipts', loadChildren: './newreceipts/newreceipts.module#NewreceiptsPageModule' },
  { path: 'tasklogslist', loadChildren: './tasklogslist/tasklogslist.module#TasklogslistPageModule' },
  { path: 'addtasklogs', loadChildren: './addtasklogs/addtasklogs.module#AddtasklogsPageModule' },
  { path: 'task-log-help', loadChildren: './task-log-help/task-log-help.module#TaskLogHelpPageModule' },
  { path: 'changepassword', loadChildren: './changepassword/changepassword.module#ChangepasswordPageModule' },
  { path: 'forgotpassword', loadChildren: './forgotpassword/forgotpassword.module#ForgotpasswordPageModule' },
  { path: 'declinetasklog', loadChildren: './declinetasklog/declinetasklog.module#DeclinetasklogPageModule' },
  { path: 'personalportal', loadChildren: './personalportal/personalportal.module#PersonalportalPageModule' },
  { path: 'declinedreceipt', loadChildren: './declinedreceipt/declinedreceipt.module#DeclinedreceiptPageModule' },
  { path: 'approved-receipt', loadChildren: './approved-receipt/approved-receipt.module#ApprovedReceiptPageModule' },
  { path: 'approved-tasklog', loadChildren: './approved-tasklog/approved-tasklog.module#ApprovedTasklogPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
