import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-approved-tasklog',
  templateUrl: './approved-tasklog.page.html',
  styleUrls: ['./approved-tasklog.page.scss'],
})
export class ApprovedTasklogPage implements OnInit {

  Event:any
Yard:any
Date:any
LOG:any
Labor_Code:any
Start_Time:any
Stop_Time:any
Hours:any
State:any
Comment:any
Status:any
getValue: any = []
MainArr: any= []

  constructor(
    private router: Router,
    private actrouter: ActivatedRoute,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.getValue = this.actrouter.snapshot.paramMap.get("item")
    console.log('DATA GET:-', JSON.parse(this.getValue))
    this.MainArr = JSON.parse(this.getValue)
    this.Event = this.MainArr.event_name
    this.Yard = this.MainArr.yard_name
    this.Date = this.MainArr.taskLogDate
    this.LOG = this.MainArr.log
    this.Labor_Code = this.MainArr.labor_code
    this.Start_Time = this.MainArr.start_time
    this.Stop_Time = this.MainArr.stop_time
    this.Hours = this.MainArr.hours
    this.State = this.MainArr.state
    this.Comment = this.MainArr.comments
    this.Status = this.MainArr.status
  }

  readonly(){
    return true
  }
}
