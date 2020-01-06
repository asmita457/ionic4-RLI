// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import {ReceiptsPage} from './receipts.page';
//
// const routes: Routes = [
//     {
//         path: 'receipts',
//         component: ReceiptsPage,
//         children: [
//             {
//                 path: 'receipt-approved',
//                 children: [
//                     {
//                         path: '',
//                         // loadChildren: './receipt-approved/receipt-approved.module#ReceiptApprovedPageModule'
//                     }
//                 ]
//             },
//             // {
//             //     path: 'receipt-audit',
//             //     children: [
//             //         {
//             //             path: '',
//             //             loadChildren: './receipt-audit/receipt-audit.module#ReceiptAuditPageModule'
//             //         }
//             //     ]
//             // },
//             // {
//             //     path: 'tab3',
//             //     children: [
//             //         {
//             //             path: '',
//             //             loadChildren: '../tab3/tab3.module#Tab3PageModule'
//             //         }
//             //     ]
//             // },
//             {
//                 path: '',
//                 redirectTo: '/receipts/receipt-approved',
//                 pathMatch: 'full'
//             }
//         ]
//     },
//     {
//         path: '',
//         redirectTo: '/receipts/receipt-approved',
//         pathMatch: 'full'
//     }
// ];
//
// @NgModule({
//     imports: [
//         RouterModule.forChild(routes)
//     ],
//     exports: [RouterModule]
// })
// export class ReceiptsRouterModules {}
