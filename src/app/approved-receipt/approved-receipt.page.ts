import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-approved-receipt',
  templateUrl: './approved-receipt.page.html',
  styleUrls: ['./approved-receipt.page.scss'],
})
export class ApprovedReceiptPage implements OnInit {

  isPayout = true
  eventName = ''
  yardName = ''
  date = ''
  category = ''
  amount = ''
  transaction = ''
  comments = ''

  constructor(public activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    let type = this.activatedRouter.snapshot.paramMap.get("type")
    if (type == 'receipt') {
      this.isPayout = true
      let getValue = this.activatedRouter.snapshot.paramMap.get("item")
      console.log('DATA GET:-', JSON.parse(getValue))
      let mainArr = JSON.parse(getValue)
      this.eventName = mainArr.event_name
      this.yardName = mainArr.yard_name
      this.date = mainArr.date
      this.category = mainArr.category_name
      this.amount = mainArr.amount
      this.transaction = mainArr.transaction_id
      this.comments = mainArr.comments
    } else {
      this.isPayout = false
      let getValue = this.activatedRouter.snapshot.paramMap.get("item")
      console.log('DATA GET:-', JSON.parse(getValue))
      let mainArr = JSON.parse(getValue)
      // this.eventName = mainArr.event_name
      // this.yardName = mainArr.yard_name
      this.date = mainArr.date
      this.category = mainArr.category
      this.amount = mainArr.amount
      this.transaction = mainArr.transaction_id
      this.comments = mainArr.comments
    }
  }

  readonly() {
    return true;
  }
}
