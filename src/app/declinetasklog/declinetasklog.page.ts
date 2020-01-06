import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-declinetasklog',
  templateUrl: './declinetasklog.page.html',
  styleUrls: ['./declinetasklog.page.scss'],
})
export class DeclinetasklogPage implements OnInit {

  getValueTaskLog: any
  Yard: any = []
  Event: any = []
  Date: any
  Log: any
  LaborCode: any
  StartTime: any
  StopTime: any
  Hours: any
  State: any
  MainArr: any
  Comment: any
  Status: any

  constructor(public router: ActivatedRoute) { }

  ngOnInit() {
    this.getValueTaskLog = this.router.snapshot.paramMap.get("item")
    console.log('DATA GET:-', JSON.parse(this.getValueTaskLog))
    this.MainArr = JSON.parse(this.getValueTaskLog)
    console.log('Main arr :' +this.MainArr)
    this.Yard = this.MainArr.yard_name
    this.Event = this.MainArr.event_name
    this.Date = this.MainArr.taskLogDate
    this.Log = this.MainArr.log_id
    this.LaborCode = this.MainArr.labor_code 
    this.StartTime = this.MainArr.start_time
    this.StopTime = this.MainArr.stop_time
    this.Hours = this.MainArr.hours
    this.State = this.MainArr.state
    this.Comment = this.MainArr.comments
    this.Status = this.MainArr.status
  }

  readonly() {
    return true;
  }
}
