import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-declinedreceipt',
  templateUrl: './declinedreceipt.page.html',
  styleUrls: ['./declinedreceipt.page.scss'],
})
export class DeclinedreceiptPage implements OnInit {

  getValue: any = []
  mainArr: any = []
  date: any
  category: any
  amount: any
  transaction: any
  comments: any
  auditStatus: any
  receiptStatus: any
  reason: any
  IsRequired: any = false

  constructor(
    public activatedRouter: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getValue = this.activatedRouter.snapshot.paramMap.get("item")
    console.log('DATA GET:-', JSON.parse(this.getValue))
    this.mainArr = JSON.parse(this.getValue)
    this.date = this.mainArr.receiptDate
    this.category = this.mainArr.category_name
    this.amount = this.mainArr.amount
    this.transaction = this.mainArr.transaction_id  // Transaction_id use checking remaining
    // this.comments = this.mainArr.comments
    if(this.mainArr.comments == 'null'){
      this.comments = ' '
      }else{
      this.comments = this.mainArr.comments
      }
    this.auditStatus = this.mainArr.rliOfficeUpdateArray.audit_status
    this.receiptStatus = this.mainArr.rliOfficeUpdateArray.status
    this.reason = this.mainArr.rliOfficeUpdateArray.reason
    if (this.auditStatus == "Audit Completed") {
      this.IsRequired = true
    } else {
      this.IsRequired = false
    }
  }

  readonly() {
    return true;
  }

  newReceipt() {
    this.router.navigate(['/newreceipts']);
  }
}
