import { Component, OnInit, ViewChild } from '@angular/core';
import { ActionSheetController, AlertController, LoadingController, IonDatetime } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataSevicesService } from '../providers/Data-Services/data-sevices.service';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import * as moment from 'moment';
import { NetworkProviderService } from '../providers/NetworkProvider/network-provider.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-addtasklogs',
  templateUrl: './addtasklogs.page.html',
  styleUrls: ['./addtasklogs.page.scss'],
})
export class AddtasklogsPage implements OnInit {
  @ViewChild('myPicker') calenderDatePick: IonDatetime;
  @ViewChild('myPicker1') startTime: IonDatetime;
  @ViewChild('myPicker2') stopTime: IonDatetime;
  ApexITarr: any = ['Apex-IT'];
  public myTime;
  dateFormat: any = new Date().toLocaleDateString().split("/")
  properDate: any = this.dateFormat[1] + "-" + this.dateFormat[0] + "-" + this.dateFormat[2]
  tasklogCounter: number = 0
  disableSelector: boolean
  tasklogDBArr: any = []
  i: any = 0
  pushdata = {
    _id: '',
    date: '',
    totalHrs: 0.0,
    taskLogs: []
  }
  ResponseData: any
  addtaskresholdarr: any = []
  StartTime: any
  EndTime: any
  taskLog = {
    userId: localStorage.getItem("UserID"),
    taskLogID: 0,
    eventTitle: '',
    eventID: '',
    workorder: '',
    date: new Date(),
    LOG: '',
    laborCode: "",
    laborCodeID: '',
    ticket: '',
    startTime: "",
    endTime: "",
    hours: 0.00,
    state: 'Select State',
    stateName: 'Select State',
    yardName: '',
    yardID: '',
    comment: '',
    transactionID: '',
    audit: '0',
    auditStatus: "Audit Required",
    auditDate: '00-00-0000',
    status: 'Audit Required',
    reason: '',
  };
  hours
  Comment: any
  State: any
  Statename: any
  Ticket: any
  EventDataArray: any
  ConHours: any
  Statearr: any = [{ "state_id": "0", "state": "Select State", "state_abbr": "Select State" }, { "state_id": "1", "state": "Alabama", "state_abbr": "AL" }, { "state_id": "2", "state": "Alaska", "state_abbr": "AK" }, { "state_id": "3", "state": "Arizona", "state_abbr": "AZ" }, { "state_id": "4", "state": "Arkansas", "state_abbr": "AR" }, { "state_id": "5", "state": "California", "state_abbr": "CA" }, { "state_id": "6", "state": "Colorado", "state_abbr": "CO" }, { "state_id": "7", "state": "Connecticut", "state_abbr": "CT" }, { "state_id": "8", "state": "Delaware", "state_abbr": "DE" }, { "state_id": "9", "state": "District of Columbia", "state_abbr": "DC" }, { "state_id": "10", "state": "Florida", "state_abbr": "FL" }, { "state_id": "11", "state": "Georgia", "state_abbr": "GA" }, { "state_id": "12", "state": "Hawaii", "state_abbr": "HI" }, { "state_id": "13", "state": "Idaho", "state_abbr": "ID" }, { "state_id": "14", "state": "Illinois", "state_abbr": "IL" }, { "state_id": "15", "state": "Indiana", "state_abbr": "IN" }, { "state_id": "16", "state": "Iowa", "state_abbr": "IA" }, { "state_id": "17", "state": "Kansas", "state_abbr": "KS" }, { "state_id": "18", "state": "Kentucky", "state_abbr": "KY" }, { "state_id": "19", "state": "Louisiana", "state_abbr": "LA" }, { "state_id": "20", "state": "Maine", "state_abbr": "ME" }, { "state_id": "21", "state": "Maryland", "state_abbr": "MD" }, { "state_id": "22", "state": "Massachusetts", "state_abbr": "MA" }, { "state_id": "23", "state": "Michigan", "state_abbr": "MI" }, { "state_id": "24", "state": "Minnesota", "state_abbr": "MN" }, { "state_id": "25", "state": "Mississippi", "state_abbr": "MS" }, { "state_id": "26", "state": "Missouri", "state_abbr": "MO" }, { "state_id": "27", "state": "Montana", "state_abbr": "MT" }, { "state_id": "28", "state": "Nebraska", "state_abbr": "NE" }, { "state_id": "29", "state": "Nevada", "state_abbr": "NV" }, { "state_id": "30", "state": "New Hampshire", "state_abbr": "NH" }, { "state_id": "31", "state": "New Jersey", "state_abbr": "NJ" }, { "state_id": "32", "state": "New Mexico", "state_abbr": "NM" }, { "state_id": "33", "state": "New York", "state_abbr": "NY" }, { "state_id": "34", "state": "North Carolina", "state_abbr": "NC" }, { "state_id": "35", "state": "North Dakota", "state_abbr": "ND" }, { "state_id": "36", "state": "Ohio", "state_abbr": "OH" }, { "state_id": "37", "state": "Oklahoma", "state_abbr": "OK" }, { "state_id": "38", "state": "Oregon", "state_abbr": "OR" }, { "state_id": "39", "state": "Pennsylvania", "state_abbr": "PA" }, { "state_id": "40", "state": "Rhode Island", "state_abbr": "RI" }, { "state_id": "41", "state": "South Carolina", "state_abbr": "SC" }, { "state_id": "42", "state": "South Dakota", "state_abbr": "SD" }, { "state_id": "43", "state": "Tennessee", "state_abbr": "TN" }, { "state_id": "44", "state": "Texas", "state_abbr": "TX" }, { "state_id": "45", "state": "Utah", "state_abbr": "UT" }, { "state_id": "46", "state": "Vermont", "state_abbr": "VT" }, { "state_id": "47", "state": "Virginia", "state_abbr": "VA" }, { "state_id": "48", "state": "Washington", "state_abbr": "WA" }, { "state_id": "49", "state": "West Virginia", "state_abbr": "WV" }, { "state_id": "50", "state": "Wisconsin", "state_abbr": "WI" }, { "state_id": "51", "state": "Wyoming", "state_abbr": "WY" }, { "state_id": "", "state": "Puerto Rico", "state_abbr": "PR" }];
  laborsel: any
  YardMainarr: any
  YardNamearr: any = [];
  eventName: any = localStorage.getItem('EventName') // working
  eventdate: any = (new Date(Date.now() - ((new Date()).getTimezoneOffset() * 60000))).toISOString();
  Picker1time: any;
  Picker2time: any;
  information: any = [];
  uId: any
  eventId: any
  resultData: any
  LOG: any = ''   //localStorage.getItem('Badge') + "-" + new Date().toJSON().slice(0, 10).replace(/-/g, '')
  laborCodeKeys = ["0", "1", "2", "3", "4", "5", "10", "12", "14", "17", "23"]
  laborCodeArray: any =
    [
      "-- Select Labor Code --",
      "MOB: Mobilization or Demobilization",
      "CMD: Command Staff and Chiefs",
      "OPS: Operations Management",
      "LOG: Logistics (Procurement, Transport, Etc.)",
      "FIN: Finance and Administration",
      "CTR: Catering",
      "OTH: Other",
      "CCO: Call Center Operator",
      "TCL: Telcom Crew Lead",
      "YWO: Yard Work Operations"
    ]
  laborCodePlaceholder: any
  automaticClose = false;
  Yard: any;
  public myIndex: number = 0;
  formattedDate: any
  hoursCon: any
  hoursConMain: any
  conflictTasklogData: any = []
  locationOnAddTaskLog = true

  taskLogGeoLocation = []

  constructor(
    public alertController: AlertController,
    public actionSheetController: ActionSheetController,
    private router: Router,
    private http: HttpClient,
    private dataServices: DataSevicesService,
    public loadingController: LoadingController,
    private sqlite: SQLite,
    public networkProvider: NetworkProviderService,
    private geolocation: Geolocation,
  ) {
    this.disableSelector = false

    this.LOG = localStorage.getItem('Badge') + "-" + this.eventdate.slice(0, 10).replace(/-/g, '')

    if (this.ConHours == undefined) {
      this.ConHours = 0
    }
    console.log("Split date :-", this.dateFormat)
    this.YardMainarr = JSON.parse(localStorage.getItem("YardArray"))
    for (let i = 0; i <= this.YardMainarr.length - 1; i++) {
      console.log("IN FOR LOOP", this.YardMainarr[i].name)
      this.YardNamearr.push(this.YardMainarr[i].name)
    }
    for (let j = 0; j <= this.YardMainarr.length - 1; j++) {
      if (this.YardNamearr[j] == localStorage.getItem("YardName")) {
        this.Yard = this.YardNamearr[j]
      }
    }
    console.log("YardMainarr:", this.YardMainarr)
    console.log("YardNameArray:", this.YardNamearr)
    this.laborsel = this.laborCodeArray[0]
    this.State = this.Statearr[0].state_abbr
    console.log("LABOR SEL:- ", this.laborsel)
  }

  ionViewWillEnter() {
    console.log('eventdate: ' + this.eventdate + '\nLOD date: ' + this.eventdate.slice(0, 10).replace(/-/g, ''))
    this.getLaborCode();
  }

  Logchanged(date: any) {
    // this.LOG = localStorage.getItem('Badge') + "-" + new Date(a).toJSON().slice(0, 10).replace(/-/g, '')
    this.LOG = localStorage.getItem('Badge') + "-" + date.slice(0, 10).replace(/-/g, '')
  }
  ConvertInHourFormat() {
    let diff = moment(this.Picker2time, 'HH:mm').diff(moment(this.Picker1time, 'HH:mm'))
    let d: any = moment.duration(diff);
    console.log("Diff between time :-", d._milliseconds)
    var msec = d._milliseconds
    var hh = Math.floor(msec / 1000 / 60 / 60);
    msec -= hh * 1000 * 60 * 60;
    var mm = Math.floor(msec / 900000 * 25);
    msec -= mm * 1000 * 60;
    var ss = Math.floor(msec / 1000);
    msec -= ss * 1000;
    var min = this.n(mm);
    var text = hh + ":" + min;
    console.log("Diff HOUR:", text)
    if (text != "0:00") {
      this.ConHours = text
    }
  }

  n(n) {
    return n > 9 ? "" + n : "0" + n;
  }

  getLaborCode() {
    this.uId = localStorage.getItem('UserID');
    this.eventId = localStorage.getItem('EventId');
    if (this.networkProvider.getNetworkStatus() == 'Online') {
      this.dataServices.getLaborCodeApi(this.uId, this.eventId).then((result) => {
        console.log('Array : ' + result)
        this.resultData = result
        if (this.resultData.status == 200) {
          if (this.resultData._body != "") {
            this.laborCodeKeys = []
            this.laborCodeArray = []
            this.laborCodeKeys = Object.keys(JSON.parse(JSON.parse(this.resultData._body).data))
            this.laborCodeArray = Object.values(JSON.parse(JSON.parse(this.resultData._body).data))
            this.laborCodePlaceholder = this.laborCodeArray[0]
            console.log('LaborCode Keys: ' + this.laborCodeKeys + '\nLaborCode Values: ' + this.laborCodeArray + '\nPlaceholder: ' + this.laborCodePlaceholder)
            this.loadingController.dismiss();
          } else {
            this.loadingController.dismiss();
            console.log('Something went wrong')
          }
        } else {
          this.loadingController.dismiss();
          console.log('Response failed')
        }
        // this.laborCodeArray = JSON.parse(this.resultData.data);
        // this.laborCodeArray=this.array;
        this.loadingController.dismiss();
      }, error => {
        if (error.url == null) {
          // alert('No internet connection.')
          this.loadingController.dismiss();
        }
        this.loadingController.dismiss();
        if (error.status == 401) {
          // this.dataServices.DeleteSqliteDB_Tables()
          this.displayUnauthoriesdAlert();
        }
      })
    } else {
      // alert('No internet connection.')
    }
  }

  onClickAddAnotherBtn() {
    console.log("State:-", this.State)
    for (let k = 0; k <= this.Statearr.length - 1; k++) {
      if (this.Statearr[k].state_abbr == this.State) {
        this.Statename = this.Statearr[k].state
      }
    }
    for (let i: any = 0; i <= this.laborCodeArray.length - 1; i++) {
      if (this.laborCodeArray[i] == this.laborsel) {
        this.taskLog.laborCodeID = this.laborCodeKeys[i]
      }

    }
    console.log("Statename:-", this.Statename)
    this.taskLog.eventTitle = this.eventName
    // this.taskLog.yardID = localStorage.getItem("YardId")
    this.taskLog.eventID = localStorage.getItem("EventId")
    this.taskLog.ticket = this.Ticket
    for (let i = 0; i <= this.laborCodeArray.length - 1; i++) {
      if (this.laborCodeArray[i] == this.laborsel) {
        console.log("labor code:-", this.laborsel)
        this.taskLog.laborCode = this.laborsel
        this.taskLog.laborCodeID = this.laborCodeKeys[i]
      }
    }
    this.taskLog.startTime = this.StartTime
    this.taskLog.endTime = this.EndTime
    this.taskLog.hours = parseFloat(this.ConHours.toString().replace(':', '.'))
    this.taskLog.state = this.State
    this.taskLog.stateName = this.Statename
    this.taskLog.yardName = this.Yard
    this.taskLog.comment = this.Comment
    this.taskLog.date = this.eventdate

    for (let j = 0; j <= this.YardMainarr.length - 1; j++) {
      if (this.YardNamearr[j] == this.Yard) {
        this.taskLog.yardID = this.YardMainarr[j].mst_yard_id
      }
    }
    console.log("TASK LOG DATA VALIDATION:-", this.taskLog)
    console.log("Accordion Info Array:-", this.information)
    console.log('Date for format:-', this.eventdate)

    if (this.taskLog.date == undefined || this.taskLog.date == null) {
      this.CommonAlert("Please Select Date");
      return
    }

    // if (new Date() < new Date(this.taskLog.date)) {
    // this.CommonAlert("You Cannot Select Future Date For Tasklog");
    // return
    // }
    if (new Date().getFullYear() < Number(String(this.taskLog.date).slice(0, 10).split('-')[0])) {
      this.CommonAlert("You Cannot Select Future Date For Tasklog");
      return
    } else {
      if (new Date().getMonth() + 1 < Number(String(this.taskLog.date).slice(0, 10).split('-')[1])) {
        this.CommonAlert("You Cannot Select Future Date For Tasklog");
        return
      } else {
        if (new Date().getDate() < Number(String(this.taskLog.date).slice(0, 10).split('-')[2])) {
          this.CommonAlert("You Cannot Select Future Date For Tasklog");
          return
        }
      }
    }
    if (this.taskLog.laborCode == "" || this.taskLog.laborCode == "-- Select Labor Code --") {
      this.CommonAlert("Please Select Labor Code")
      return
    }
    if (this.taskLog.ticket == "" || this.taskLog.ticket == undefined) {
      this.CommonAlert("Ticket or Job ID is required if you have one, if not, please enter the word \"None\"")
      return
    }
    if (this.taskLog.hours == 0.00 || this.taskLog.hours == 0 || this.taskLog.hours == undefined) {
      if (this.hoursConMain != undefined) {
        this.ConflictAlert('Stop Time Should Not Be Earlier Than Start Time')
      }
      else {
        this.CommonAlert("Start Time & Stop Time Should Not Be The Same")
      }
      return
    }
    if (this.taskLog.state == "" || this.taskLog.state == undefined || this.taskLog.state == "Select State") {
      this.CommonAlert("Please Select State")
      return
    }
    for (let i = 0; i < this.information.length; i++) {
      if (this.information[i].children[0].laborCode == "" || this.information[i].children[0].laborCode == "-- Select Labor Code --") {
        this.CommonAlert("Please Select Labor Code for" + ' ' + this.information[i].name)
        return
      }

      if (this.information[i].children[0].ticket == "" || this.information[i].children[0].ticket == undefined) {
        this.CommonAlert("Ticket or Job ID is required if you have one, if not, please enter the word \"None\" for" + ' ' + this.information[i].name)
        return
      }

      if (this.information[i].children[0].hours == '0.00' || this.information[i].children[0].hours == undefined || this.information[i].children[0].hours == '0') {
        if (this.hoursCon != undefined) {
          this.ConflictAlert('Stop Time Should Not Be Earlier Than Start Time for' + ' ' + this.information[i].name)
        } else {
          this.CommonAlert("Start Time & Stop Time Should Not Be The Same for" + ' ' + this.information[i].name)
        }
        return
      }

      if (this.information[i].children[0].state == "" || this.information[i].children[0].state == undefined || this.information[i].children[0].state == "Select State") {
        this.CommonAlert("Please Select State for" + ' ' + this.information[i].name)
        return
      }

      if (i != 0) {
        if (this.information[i].children[0].StartTime < this.information[i - 1].children[0].EndTime && this.information[i].children[0].StartTime > this.information[i - 1].children[0].StartTime) {
          this.ConflictAlert("Task Log You Are Added Conflicting With Time")
          return
        }
      } else {
        if (this.taskLog.startTime < this.information[i].children[0].EndTime && this.taskLog.startTime > this.information[i].children[0].StartTime) {
          this.ConflictAlert("Task Log You Are Added Conflicting With Time")
          return
        }
      }
    }
    for (let i = 0; i < this.information.length; i++) {
      if (this.information[i].children[0].StartTime < this.taskLog.startTime < this.information[i].children[0].EndTime) {
        this.ConflictAlert("Task Log You Are Added Conflicting With Time")
        return
      }
      if (this.information[i].children[0].StartTime < this.taskLog.endTime < this.information[i].children[0].EndTime) {
        this.ConflictAlert("Task Log You Are Added Conflicting With Time")
        return
      }
    }
    if (this.information.length > 0) {
      if (this.taskLog.startTime < this.information[this.information.length - 1].children[0].EndTime && this.taskLog.startTime > this.information[this.information.length - 1].children[0].StartTime) {
        this.ConflictAlert("Task Log You Are Added Conflicting With Time")
        return
      }
    }
    if (this.information.length >= 2) {
      console.log('Start time of last index', this.information[this.information.length - 1].children[0].StartTime)
      console.log('Start time of second last index', this.information[this.information.length - 2].children[0].StartTime)
      console.log('End time of last index', this.information[this.information.length - 1].children[0].EndTime)
      console.log('End time of second last index', this.information[this.information.length - 2].children[0].EndTime)

      // if (this.information[this.information.length - 1].children[0].StartTime > this.information[this.information.length - 2].children[0].StartTime || this.information[this.information.length - 1].children[0].StartTime == this.information[this.information.length - 2].children[0].StartTime || this.information[this.information.length - 1].children[0].EndTime < this.information[this.information.length - 2].children[0].EndTime) {
      if (this.information[this.information.length - 1].children[0].StartTime < this.information[this.information.length - 2].children[0].EndTime && this.information[this.information.length - 1].children[0].StartTime > this.information[this.information.length - 2].children[0].StartTime) {
        this.ConflictAlert("Task Log You Are Added Conflicting With Time")
        return
      }

    }
    //Code for Date format as per API requirement 
    // var date = new Date(this.taskLog.date);
    let month = String(this.taskLog.date).slice(0, 10).split('-')[1]    //String(date.getMonth() + 1);
    let day = String(this.taskLog.date).slice(0, 10).split('-')[2]    //String(date.getDate());
    const year = String(this.taskLog.date).slice(0, 10).split('-')[0]   //String(date.getFullYear());
    if (day.length < 2) { day = '0' + day }
    if (month.length < 2) { month = '0' + month }
    console.log("Selected Month" + month)
    console.log("Selected day" + day)
    console.log("Selected year" + year)
    console.log('Full selected date:-' + month + '-' + day + '-' + year)
    this.formattedDate = month + '-' + day + '-' + year //We are getting required date format in this.formattedDate
    this.detectConflictInPreviousTasksForAddNewTasklog(this.formattedDate)
  }

  async displayAddTaskAlert() {
    const alert = await this.alertController.create({
      header: '',
      subHeader: 'Do You Really Want To Add Another Task?',
      buttons: [{
        text: 'No',
      }, {
        text: 'Yes',
        handler: () => {
          this.addNewTasklog()
        }
      }]
    });

    await alert.present();
  }

  onYardSelectforMultiple(group: any) {
    group.children[0].EndTime
    for (let j = 0; j <= this.YardMainarr.length - 1; j++) {
      if (this.YardNamearr[j] == group.children[0].yardName) {
        group.children[0].yardID = this.YardMainarr[j].mst_yard_id
      }
    }
  }

  onLaborCodeSelect(child: any) {
    console.log('onLaborCodeSelect: ' + child.laborCode);
    for (let i = 0; i <= this.laborCodeArray.length - 1; i++) {
      if (this.laborCodeArray[i] == child.laborCode.trim()) {
        child.laborCodeID = this.laborCodeKeys[i]
        console.log("LaborCodeID:-", child.laborCodeID)
        console.log('LaborCode:-', child.laborCode)
      }
    }
  }

  onSelectChange(selectedValue: any) {
    console.log('Selected', selectedValue);
  }

  onStateSelectforMultiple(group: any) {
    for (let i = 0; i < this.Statearr.length; i++) {
      if (this.Statearr[i].state_abbr == group.state.trim()) {
        group.stateName = this.Statearr[i].state
      }
    }
  }

  addNewTasklog() {

    //Code for Date format as per API requirement 
    // var date = new Date(this.taskLog.date);
    let month = String(this.taskLog.date).slice(0, 10).split('-')[1]    //String(date.getMonth() + 1);
    let day = String(this.taskLog.date).slice(0, 10).split('-')[2]    //String(date.getDate());
    const year = String(this.taskLog.date).slice(0, 10).split('-')[0]   //String(date.getFullYear());
    if (day.length < 2) { day = '0' + day }
    if (month.length < 2) { month = '0' + month }
    console.log("Selected Month" + month)
    console.log("Selected day" + day)
    console.log("Selected year" + year)
    console.log('Full selected date:-' + month + '-' + day + '-' + year)
    this.formattedDate = month + '-' + day + '-' + year //We are getting required date format in this.formattedDate
    this.disableSelector = true
    this.taskLog.LOG = localStorage.getItem('Badge') + "-" + this.eventdate.slice(0, 10).replace(/-/g, '')    //new Date(this.eventdate).toJSON().slice(0, 10).replace(/-/g, '')
    this.tasklogCounter++
    var taskLog = {
      userId: localStorage.getItem("UserID"),
      taskLogID: "Task" + " " + this.properDate + "_" + this.tasklogCounter,
      eventTitle: this.eventName,
      eventID: localStorage.getItem("EventId"),
      workorder: '',
      date: this.formattedDate,
      LOG: this.taskLog.LOG,
      ticket: this.taskLog.ticket,
      laborCode: this.taskLog.laborCode,
      laborCodeID: this.taskLog.laborCodeID,
      StartTime: this.StartTime,
      EndTime: this.EndTime,
      hours: this.taskLog.hours,
      state: this.State,
      stateName: this.Statename,
      yardName: this.Yard,
      yardID: this.taskLog.yardID,
      comment: this.Comment,
      transactionID: '',
      audit: '0',
      auditStatus: "Audit Required",
      auditDate: '',
      status: 'Audit Required',
      reason: '',
    };
    //Set start and stop time for main task log
    this.taskLog.startTime = this.EndTime
    this.StartTime = this.EndTime
    this.ConHours = 0
    this.taskLog.hours = 0
    this.taskLog.comment = ''
    this.Comment = ''
    let accordionappendpart = {
      "name": "Task" + " " + this.formattedDate + "_" + this.tasklogCounter,
      "children": []
    }
    console.log("start time:-", this.StartTime, this.taskLog.startTime)
    console.log("end time:-", this.EndTime, this.taskLog.endTime)
    // this.accordion
    accordionappendpart.children.push(taskLog)
    this.information.push(accordionappendpart)
    console.log('info: ' + JSON.stringify(this.information));
    // this.pushdata.taskLogs.push(taskLog);
    this.information.open = true;

  }

  async displayConfirmSubmitTaskAlert() {
    const alert = await this.alertController.create({
      header: '',
      subHeader: 'Do You Want To Submit Your Task?',
      buttons: [{
        text: 'No',
        handler: () => {
        }
      }, {
        text: 'Yes',
        handler: () => {
          this.presentLoading()
          //Code for Date format as per API requirement 
          // var date = new Date(this.taskLog.date);
          let month = String(this.taskLog.date).slice(0, 10).split('-')[1]    //String(date.getMonth() + 1);
          let day = String(this.taskLog.date).slice(0, 10).split('-')[2]    //String(date.getDate());
          const year = String(this.taskLog.date).slice(0, 10).split('-')[0]   //String(date.getFullYear());
          if (day.length < 2) { day = '0' + day }
          if (month.length < 2) { month = '0' + month }
          console.log("Selected Month" + month)
          console.log("Selected day" + day)
          console.log("Selected year" + year)
          console.log('Full selected date:-' + month + '-' + day + '-' + year)
          this.formattedDate = month + '-' + day + '-' + year //We are getting required date format in this.formattedDate
          console.log("Info count", this.information.length)
          if (this.information.length == 0) {
            console.log("Tasklog Data :-", JSON.stringify(this.taskLog))
            // this.taskLog.date
            this.insertTaskLogsintoDatabase(this.taskLog.userId, this.taskLog.eventTitle, this.taskLog.eventID, this.formattedDate, this.taskLog.LOG, this.taskLog.ticket, this.taskLog.laborCode, this.taskLog.laborCodeID, this.taskLog.startTime, this.taskLog.endTime, this.taskLog.hours, this.taskLog.state, this.taskLog.stateName, this.taskLog.yardID, this.taskLog.yardName, this.taskLog.comment, this.taskLog.transactionID, this.taskLog.audit, this.taskLog.auditDate, this.taskLog.status, this.taskLog.reason, "0")
            this.RetriveTasklogwithPost()

          } else {
            for (let i = 0; i <= this.information.length - 1; i++) {
              // this.information[i].children[0].date
              this.insertTaskLogsintoDatabase(this.information[i].children[0].userId, this.information[i].children[0].eventTitle, this.information[i].children[0].eventID, this.formattedDate, this.information[i].children[0].LOG, this.information[i].children[0].ticket, this.information[i].children[0].laborCode, this.information[i].children[0].laborCodeID, this.information[i].children[0].StartTime, this.information[i].children[0].EndTime, this.information[i].children[0].hours, this.information[i].children[0].state, this.information[i].children[0].stateName, this.information[i].children[0].yardID, this.information[i].children[0].yardName, this.information[i].children[0].comment, this.information[i].children[0].transactionID, this.information[i].children[0].audit, this.information[i].children[0].auditDate, this.information[i].children[0].status, this.information[i].children[0].reason, "0")
            }
            // this.taskLog.date
            this.insertTaskLogsintoDatabase(this.taskLog.userId, this.taskLog.eventTitle, this.taskLog.eventID, this.formattedDate, this.taskLog.LOG, this.taskLog.ticket, this.taskLog.laborCode, this.taskLog.laborCodeID, this.taskLog.startTime, this.taskLog.endTime, this.taskLog.hours, this.taskLog.state, this.taskLog.stateName, this.taskLog.yardID, this.taskLog.yardName, this.taskLog.comment, this.taskLog.transactionID, this.taskLog.audit, this.taskLog.auditDate, this.taskLog.status, this.taskLog.reason, "0")
            this.RetriveTasklogwithPost()
          }

        }
      }]
    });

    await alert.present();
  }

  insertTaskLogsintoDatabase(userID, eventTitle, eventID, date, LOG, ticket, laborCode, laborCodeID, startTime, endTime, hours, state, stateName, yardID, yardName, comment, transactionId, auditStatus, auditDate, status, reason, server_id) {
    this.sqlite.create({
      name: 'Commander.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        db.executeSql('INSERT INTO tasklogs(userID, eventTitle, eventID, date, LOG, ticket, laborCode, laborCodeID, startTime, endTime, hours, state, stateName, yardID, yardName, comment, transactionId, auditStatus, auditDate, status , reason, server_id) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [userID, eventTitle, eventID, date, LOG, ticket, laborCode, laborCodeID, startTime, endTime, hours, state, stateName, yardID, yardName, comment, transactionId, auditStatus, auditDate, status, reason, server_id])
          .then(res => {
            console.log(res);
          })
          .catch(e => console.log(e));

        //local_id, time, longitude, latitude, user_id

        let geoLocationData = '0,' + new Date().toISOString() + ',' + this.networkProvider.getLatLong() + ',' + localStorage.getItem('UserID') + ',Task Log Added on ' + new Date().toString()
        console.log('DATA STRUCTURE: ' + geoLocationData)
        this.taskLogGeoLocation.push(geoLocationData)
        localStorage.setItem('taskLogGeoLocation', JSON.stringify(this.taskLogGeoLocation))
        console.log('taskLogGeoLocation: ' + JSON.parse(localStorage.getItem('taskLogGeoLocation')))
      })
      .catch(e => console.log(e));
  }

  RetriveTasklogwithPost() {
    this.sqlite.create({
      name: 'Commander.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('SELECT * FROM tasklogs WHERE server_id=0', [])
        .then(res => {
          console.log("DATA:-", JSON.stringify(res))
          console.log("Actual DATA:-", JSON.stringify(res.rows.length))
          if (res.rows.length > 0) {
            for (let i = 0; i < res.rows.length; i++) {
              this.tasklogDBArr.push(res.rows.item(i));
            }
          }
          console.log("DATA ARRAY:-", this.tasklogDBArr);
          this.i = 0
          this.postTaskLog()
        })
        .catch(e => console.log(e));
    }).catch(e => console.log(e));
  }

  async detectConflictInPreviousTasks(Date: string) {
    this.sqlite.create({
      name: 'Commander.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      this.conflictTasklogData = []
      db.executeSql('SELECT * FROM tasklogs WHERE date=?', [Date])
        .then(res => {
          console.log("DATA:-", JSON.stringify(res))
          console.log("Actual DATA:-", JSON.stringify(res.rows.length))
          if (res.rows.length > 0) {
            for (let i = 0; i < res.rows.length; i++) {
              this.conflictTasklogData.push(res.rows.item(i));
            }
          }
          console.log("Detected conflict TasLog DATA ARRAY INSIDE:-", JSON.stringify(this.conflictTasklogData));
          this.i = 0
          this.validateConflict()
        })
        .catch(e => console.log(e));
    }).catch(e => console.log(e));
  }
  validateConflict() {
    console.log("Detected conflict TasLog DATA ARRAY VALIDATE CONFLICT:-", JSON.stringify(this.conflictTasklogData))
    for (let i = 0; i < this.conflictTasklogData.length; i++) {
      console.log('StartTime:' + this.conflictTasklogData[i].startTime + ' ' + 'EndTime:' + this.conflictTasklogData[i].endTime)
      // this.taskLog.startTime == this.conflictTasklogData[i].startTime || this.taskLog.startTime > this.conflictTasklogData[i].startTime && this.taskLog.startTime < this.conflictTasklogData[i].endTime || this.taskLog.endTime < this.conflictTasklogData[i].endTime && this.taskLog.endTime > this.conflictTasklogData[i].startTime || this.taskLog.endTime == this.conflictTasklogData[i].endTime || 
      if (this.taskLog.startTime == this.conflictTasklogData[i].startTime || this.taskLog.startTime > this.conflictTasklogData[i].startTime && this.taskLog.startTime < this.conflictTasklogData[i].endTime || this.taskLog.endTime < this.conflictTasklogData[i].endTime && this.taskLog.endTime > this.conflictTasklogData[i].startTime || this.taskLog.endTime == this.conflictTasklogData[i].endTime || (this.taskLog.startTime <= this.conflictTasklogData[i].startTime && this.conflictTasklogData[i].startTime < this.taskLog.endTime) && (this.taskLog.startTime < this.conflictTasklogData[i].endTime && this.conflictTasklogData[i].endTime <= this.taskLog.endTime)) {
        this.ConflictAlert("Task Log You Are Added Conflicting With Time Of Previous Saved Task")
        return
      }
    }
    if (this.information.length != 0) {
      for (let i = 0; i < this.conflictTasklogData.length; i++) {
        for (let j = 0; j < this.information.length; j++) {
          if (this.information[j].children[0].StartTime == this.conflictTasklogData[i].startTime || this.information[j].children[0].StartTime > this.conflictTasklogData[i].startTime && this.information[j].children[0].StartTime < this.conflictTasklogData[i].endTime || this.information[j].children[0].EndTime < this.conflictTasklogData[i].endTime && this.information[j].children[0].EndTime > this.conflictTasklogData[i].startTime || this.information[j].children[0].EndTime == this.conflictTasklogData[i].endTime || (this.information[j].children[0].StartTime <= this.conflictTasklogData[i].startTime && this.conflictTasklogData[i].startTime < this.information[j].children[0].EndTime) && (this.information[j].children[0].StartTime < this.conflictTasklogData[i].endTime && this.conflictTasklogData[i].endTime <= this.information[j].children[0].EndTime)) {
            this.ConflictAlert(this.information[j].name + " " + "Task Log You Are Added Conflicting With Time Of Previous Saved Task")
            return
          }
        }
      }
      for (let j = 0; j < this.information.length; j++) {
        if (this.information[j].children[0].StartTime == this.taskLog.startTime || this.information[j].children[0].StartTime > this.taskLog.startTime && this.information[j].children[0].StartTime < this.taskLog.endTime || this.information[j].children[0].EndTime < this.taskLog.endTime && this.information[j].children[0].EndTime > this.taskLog.startTime || this.information[j].children[0].EndTime == this.taskLog.endTime || (this.information[j].children[0].StartTime <= this.taskLog.startTime && this.taskLog.startTime < this.information[j].children[0].EndTime) && (this.information[j].children[0].StartTime < this.taskLog.endTime && this.taskLog.endTime <= this.information[j].children[0].EndTime)) {
          this.ConflictAlert(this.information[j].name + " " + "Task Log You Are Added Conflicting With Time")
          return
        }
      }
    }
    this.displayConfirmSubmitTaskAlert()
  }

  async detectConflictInPreviousTasksForAddNewTasklog(Date: string) {
    this.sqlite.create({
      name: 'Commander.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      this.conflictTasklogData = []
      db.executeSql('SELECT * FROM tasklogs WHERE date=?', [Date])
        .then(res => {
          console.log("DATA:-", JSON.stringify(res))
          console.log("Actual DATA:-", JSON.stringify(res.rows.length))
          if (res.rows.length > 0) {
            for (let i = 0; i < res.rows.length; i++) {
              this.conflictTasklogData.push(res.rows.item(i));
            }
          }
          console.log("Detected conflict TasLog DATA ARRAY INSIDE:-", JSON.stringify(this.conflictTasklogData));
          this.i = 0
          this.validateConflictForAddNewTasklog()
        })
        .catch(e => console.log(e));
    }).catch(e => console.log(e));
  }

  validateConflictForAddNewTasklog() {
    console.log("Detected conflict TasLog DATA ARRAY VALIDATE CONFLICT:-", JSON.stringify(this.conflictTasklogData))
    for (let i = 0; i < this.conflictTasklogData.length; i++) {
      console.log('StartTime:' + this.conflictTasklogData[i].startTime + ' ' + 'EndTime:' + this.conflictTasklogData[i].endTime)
      if (this.taskLog.startTime == this.conflictTasklogData[i].startTime || this.taskLog.startTime > this.conflictTasklogData[i].startTime && this.taskLog.startTime < this.conflictTasklogData[i].endTime || this.taskLog.endTime < this.conflictTasklogData[i].endTime && this.taskLog.endTime > this.conflictTasklogData[i].startTime || this.taskLog.endTime == this.conflictTasklogData[i].endTime || (this.taskLog.startTime <= this.conflictTasklogData[i].startTime && this.conflictTasklogData[i].startTime < this.taskLog.endTime) && (this.taskLog.startTime < this.conflictTasklogData[i].endTime && this.conflictTasklogData[i].endTime <= this.taskLog.endTime)) {
        this.ConflictAlert("Task Log You Are Added Conflicting With Time Of Previous Saved Task")
        return
      }
    }
    if (this.information.length != 0) {
      for (let i = 0; i < this.conflictTasklogData.length; i++) {
        for (let j = 0; j < this.information.length; j++) {
          if (this.information[j].children[0].StartTime == this.conflictTasklogData[i].startTime || this.information[j].children[0].StartTime > this.conflictTasklogData[i].startTime && this.information[j].children[0].StartTime < this.conflictTasklogData[i].endTime || this.information[j].children[0].EndTime < this.conflictTasklogData[i].endTime && this.information[j].children[0].EndTime > this.conflictTasklogData[i].startTime || this.information[j].children[0].EndTime == this.conflictTasklogData[i].endTime || (this.information[j].children[0].StartTime <= this.conflictTasklogData[i].startTime && this.conflictTasklogData[i].startTime < this.information[j].children[0].EndTime) && (this.information[j].children[0].StartTime < this.conflictTasklogData[i].endTime && this.conflictTasklogData[i].endTime <= this.information[j].children[0].EndTime)) {
            this.ConflictAlert(this.information[j].name + " " + "Task Log You Are Added Conflicting With Time Of Previous Saved Task")
            return
          }
        }
      }
      for (let j = 0; j < this.information.length; j++) {
        if (this.information[j].children[0].StartTime == this.taskLog.startTime || this.information[j].children[0].StartTime > this.taskLog.startTime && this.information[j].children[0].StartTime < this.taskLog.endTime || this.information[j].children[0].EndTime < this.taskLog.endTime && this.information[j].children[0].EndTime > this.taskLog.startTime || this.information[j].children[0].EndTime == this.taskLog.endTime || (this.information[j].children[0].StartTime <= this.taskLog.startTime && this.taskLog.startTime < this.information[j].children[0].EndTime) && (this.information[j].children[0].StartTime < this.taskLog.endTime && this.taskLog.endTime <= this.information[j].children[0].EndTime)) {
          this.ConflictAlert(this.information[j].name + " " + "Task Log You Are Added Conflicting With Time")
          return
        }
      }
    }
    this.displayAddTaskAlert();
  }

  postTaskLog() {
    if (this.tasklogDBArr.length > this.i) {
      if (this.networkProvider.getNetworkStatus() == 'Online') {
        if (this.i == 0) {
          // this.presentLoading()
        }
        this.dataServices.postTaskLog(this.tasklogDBArr[this.i].ID, this.tasklogDBArr[this.i].eventID, this.tasklogDBArr[this.i].userID, this.tasklogDBArr[this.i].yardID, this.tasklogDBArr[this.i].laborCodeID, this.tasklogDBArr[this.i].ticket, this.tasklogDBArr[this.i].date, this.tasklogDBArr[this.i].LOG, this.tasklogDBArr[this.i].startTime, this.tasklogDBArr[this.i].endTime, this.tasklogDBArr[this.i].hours, this.tasklogDBArr[this.i].state, this.tasklogDBArr[this.i].comment, this.tasklogDBArr[this.i].auditDate, this.tasklogDBArr[this.i].auditStatus, this.tasklogDBArr[this.i].reason).then((res1) => {
          console.log("Sucess Status: ", res1)
          this.ResponseData = res1
          console.log("Response Data", this.ResponseData.success)
          if (this.ResponseData.success == true) {
            this.sqlite.create({
              name: 'Commander.db',
              location: 'default'
            }).then((db: SQLiteObject) => {
              db.executeSql('UPDATE tasklogs SET server_id= ? WHERE ID= ?', [this.ResponseData.server_id, this.ResponseData.local_id])
                .then(res => {
                  console.log(res);
                }).catch(e => console.log(e));
            }).catch(e => console.log(e));
            this.i++
            if (this.tasklogDBArr.length == this.i) {
              this.tasklogDBArr = []
              this.getGeoLocation()
              this.loadingController.dismiss()
              this.taskLogSaved("Task Log Saved Successfully")
            } else {
              this.postTaskLog()
            }
          } else {
            this.i++
            if (this.tasklogDBArr.length == this.i) {
              this.tasklogDBArr = []
              this.loadingController.dismiss()
              this.taskLogSaved("Task Log Saved Successfully")
            } else {
              this.postTaskLog()
            }
          }
        }, error => {
          this.loadingController.dismiss();
          console.log('Error in post task log: ' + JSON.stringify(error));
          if (error.status == 401) {
            // this.dataServices.DeleteSqliteDB_Tables()
            this.displayUnauthoriesdAlert();
          }
        });
      } else {
        this.loadingController.dismiss()
        this.taskLogSaved("Task Log Saved Successfully")
      }
    }
  }

  async taskLogSaved(message: string) {
    const alert = await this.alertController.create({
      header: '',
      subHeader: message,
      buttons: [{
        text: 'OK',
        handler: () => {
          this.router.navigate(['/tasklogslist']);
        }
      }]
    });
    await alert.present();
  }

  async CommonAlert(message) {
    const alert = await this.alertController.create({
      header: '',
      subHeader: '',
      message: message,
      buttons: ['Yes']
    });

    await alert.present();
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      spinner: null
    });
    await loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: '',
      subHeader: '',
      message: 'Start Time & Stop Time Should Not Be The Same',
      buttons: ['OK']
    });

    await alert.present();
  }

  async validateAlert() {
    const alert = await this.alertController.create({
      header: '',
      subHeader: '',
      message: 'Ticket or Job ID is required if you have one, if not, please enter the word "None',
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {
  }

  readonly() {
    return true;
  }

  messagehelp() {
    this.router.navigate(['/task-log-help']);
  }

  passdate(data: any) {
    console.log('Selected date', data);
    this.Picker1time = data;
  }

  passdata1(data: any) {
    console.log('Selected date', data);
    this.Picker2time = data;
    this.ConvertInHourFormat();
  }

  changeTimeTask(group: any, timeSlot: any) {
    if (timeSlot == '0' || timeSlot == 0) {
      group.children[0].EndTime = group.children[0].StartTime
    }
    console.log("Group :-", group.children)
    console.log("start time:-", group.children[0].StartTime)
    console.log("end time:-", group.children[0].EndTime)

    //     //updated code by Ashok
    // var startDate: Date = new Date(group.children[0].StartTime);
    // var endDate: Date = new Date(group.children[0].EndTime);
    // var differ: number = ((endDate).valueOf() - (startDate).valueOf()) / 1000 / 60 / 60;

    // console.log("updated diff between two dates >> " + differ);

    // if (differ < 0) {
    // group.children[0].EndTime = group.children[0].StartTime
    // return
    // }

    // let hoursString: string = differ.toFixed(2).replace(':', '.')

    let diff = moment(group.children[0].EndTime, 'HH:mm').diff(moment(group.children[0].StartTime, 'HH:mm'))
    let d: any = moment.duration(diff);
    console.log("Diff between time :-", d._milliseconds)
    var msec = d._milliseconds
    var hh = Math.floor(msec / 1000 / 60 / 60);
    msec -= hh * 1000 * 60 * 60;
    var mm = Math.floor(msec / 900000 * 25);
    msec -= mm * 1000 * 60;
    var ss = Math.floor(msec / 1000);
    msec -= ss * 1000;
    var min = this.n(mm);
    var text = hh + ":" + min;
    console.log("Diff HOUR:", text)
    if (text != "0:00") {
      group.children[0].hours = parseFloat(text.replace(':', '.'))
      console.log("Hours task:-", group.children[0].hours)

      if (parseFloat(text.replace(':', '.')) < 0) {
        group.children[0].hours = 0
        this.hoursCon = parseFloat(text.replace(':', '.'))
      } else {
        this.hoursCon = undefined
      }
    }
    else {
      this.hoursCon = undefined
      group.children[0].hours = 0
    }
  }

  async onClickSubmit() {
    console.log("State:-", this.State)
    for (let k = 0; k <= this.Statearr.length - 1; k++) {
      if (this.Statearr[k].state_abbr == this.State) {
        this.Statename = this.Statearr[k].state
      }
    }
    console.log("Statename:-", this.Statename)
    this.taskLog.eventTitle = this.eventName
    this.taskLog.eventID = localStorage.getItem("EventId")
    this.taskLog.ticket = this.Ticket
    for (let i = 0; i <= this.laborCodeArray.length - 1; i++) {
      if (this.laborCodeArray[i] == this.laborsel) {
        console.log("labor code:-", this.laborsel)
        this.taskLog.laborCode = this.laborsel
        this.taskLog.laborCodeID = this.laborCodeKeys[i]
      }

    }

    this.taskLog.startTime = this.StartTime
    this.taskLog.endTime = this.EndTime
    this.taskLog.hours = parseFloat(this.ConHours.toString().replace(':', '.'))
    this.taskLog.state = this.State
    this.taskLog.stateName = this.Statename
    this.taskLog.yardName = this.Yard
    for (let j = 0; j <= this.YardMainarr.length - 1; j++) {
      if (this.YardNamearr[j] == this.Yard) {
        this.taskLog.yardID = this.YardMainarr[j].mst_yard_id
      }
    }
    this.taskLog.comment = this.Comment
    this.taskLog.date = this.eventdate
    this.taskLog.LOG = localStorage.getItem('Badge') + "-" + this.eventdate.slice(0, 10).replace(/-/g, '')    //new Date(this.eventdate).toJSON().slice(0, 10).replace(/-/g, '')
    console.log("TASK LOG DATA VALIDATION:-", JSON.stringify(this.taskLog))
    console.log("Accordion Info Array:-", this.information)
    console.log('Date for format:-', this.eventdate)
    if (this.taskLog.date == undefined || this.taskLog.date == null) {
      this.CommonAlert("Please Select Date");
      return
    }

    // if (new Date() < new Date(this.taskLog.date)) {
    //   this.CommonAlert("You Cannot Select Future Date For Tasklog");
    //   return
    // }
    if (new Date().getFullYear() < Number(String(this.taskLog.date).slice(0, 10).split('-')[0])) {
      this.CommonAlert("You Cannot Select Future Date For Tasklog");
      return
    } else {
      if (new Date().getMonth() + 1 < Number(String(this.taskLog.date).slice(0, 10).split('-')[1])) {
        this.CommonAlert("You Cannot Select Future Date For Tasklog");
        return
      } else {
        if (new Date().getDate() < Number(String(this.taskLog.date).slice(0, 10).split('-')[2])) {
          this.CommonAlert("You Cannot Select Future Date For Tasklog");
          return
        }
      }
    }
    if (this.taskLog.laborCode == "" || this.taskLog.laborCode == "-- Select Labor Code --") {
      this.CommonAlert("Please Select Labor Code")
      return
    }
    if (this.taskLog.ticket == "" || this.taskLog.ticket == undefined) {
      this.CommonAlert("Ticket or Job ID is required if you have one, if not, please enter the word \"None\"")
      return
    }
    if (this.taskLog.hours == 0.00 || this.taskLog.hours == 0 || this.taskLog.hours == undefined) {
      if (this.hoursConMain != undefined) {
        this.ConflictAlert('Stop Time Should Not Be Earlier Than Start Time')
      }
      else {
        this.CommonAlert("Start Time & Stop Time Should Not Be The Same")
      }
      return
    }
    if (this.taskLog.state == "" || this.taskLog.state == undefined || this.taskLog.state == "Select State") {
      this.CommonAlert("Please Select State")
      return
    }
    for (let i = 0; i < this.information.length; i++) {
      if (this.information[i].children[0].laborCode == "" || this.information[i].children[0].laborCode == "-- Select Labor Code --") {
        this.CommonAlert("Please Select Labor Code for" + ' ' + this.information[i].name)
        return
      }

      if (this.information[i].children[0].ticket == "" || this.information[i].children[0].ticket == undefined) {
        this.CommonAlert("Ticket or Job ID is required if you have one, if not, please enter the word \"None\" for" + ' ' + this.information[i].name)
        return
      }

      if (this.information[i].children[0].hours == '0.00' || this.information[i].children[0].hours == undefined || this.information[i].children[0].hours == '0') {
        if (this.hoursCon != undefined) {
          this.ConflictAlert('Stop Time Should Not Be Earlier Than Start Time for' + ' ' + this.information[i].name)
        } else {
          this.CommonAlert("Start Time & Stop Time Should Not Be The Same for" + ' ' + this.information[i].name)
        }
        return
      }

      if (this.information[i].children[0].state == "" || this.information[i].children[0].state == undefined || this.information[i].children[0].state == "Select State") {
        this.CommonAlert("Please Select State for" + ' ' + this.information[i].name)
        return
      }

      if (i != 0) {
        if (this.information[i].children[0].StartTime < this.information[i - 1].children[0].EndTime && this.information[i].children[0].StartTime > this.information[i - 1].children[0].StartTime) {
          this.ConflictAlert("Task Log You Are Added Conflicting With Time")
          return
        }
      } else {
        if (this.taskLog.startTime < this.information[i].children[0].EndTime && this.taskLog.startTime > this.information[i].children[0].StartTime) {
          this.ConflictAlert("Task Log You Are Added Conflicting With Time")
          return
        }
      }
    }

    for (let i = 0; i < this.information.length; i++) {
      if (this.information[i].children[0].StartTime < this.taskLog.startTime < this.information[i].children[0].EndTime) {
        this.ConflictAlert("Task Log You Are Added Conflicting With Time")
        return
      }
      if (this.information[i].children[0].StartTime < this.taskLog.endTime < this.information[i].children[0].EndTime) {
        this.ConflictAlert("Task Log You Are Added Conflicting With Time")
        return
      }
    }
    if (this.information.length > 0) {
      if (this.taskLog.startTime < this.information[this.information.length - 1].children[0].EndTime && this.taskLog.startTime > this.information[this.information.length - 1].children[0].StartTime) {
        this.ConflictAlert("Task Log You Are Added Conflicting With Time")
        return
      }
    }
    if (this.information.length >= 2) {
      console.log('Start time of last index', this.information[this.information.length - 1].children[0].StartTime)
      console.log('Start time of second last index', this.information[this.information.length - 2].children[0].StartTime)
      console.log('End time of last index', this.information[this.information.length - 1].children[0].EndTime)
      console.log('End time of second last index', this.information[this.information.length - 2].children[0].EndTime)

      // if (this.information[this.information.length - 1].children[0].StartTime > this.information[this.information.length - 2].children[0].StartTime || this.information[this.information.length - 1].children[0].StartTime == this.information[this.information.length - 2].children[0].StartTime || this.information[this.information.length - 1].children[0].EndTime < this.information[this.information.length - 2].children[0].EndTime) {
      if (this.information[this.information.length - 1].children[0].StartTime < this.information[this.information.length - 2].children[0].EndTime && this.information[this.information.length - 1].children[0].StartTime > this.information[this.information.length - 2].children[0].StartTime) {
        this.ConflictAlert("Task Log You Are Added Conflicting With Time")
        return
      }

    }
    console.log('Detect Data ARRAY OUTSIDE:' + JSON.stringify(this.conflictTasklogData))
    //Code for Date format as per API requirement 
    // var date = new Date(this.taskLog.date);
    let month = String(this.taskLog.date).slice(0, 10).split('-')[1]    //String(date.getMonth() + 1);
    let day = String(this.taskLog.date).slice(0, 10).split('-')[2]    //String(date.getDate());
    const year = String(this.taskLog.date).slice(0, 10).split('-')[0]   //String(date.getFullYear());
    if (day.length < 2) { day = '0' + day }
    if (month.length < 2) { month = '0' + month }
    console.log("Selected Month" + month)
    console.log("Selected day" + day)
    console.log("Selected year" + year)
    console.log('Full selected date:-' + month + '-' + day + '-' + year)
    this.formattedDate = month + '-' + day + '-' + year //We are getting required date format in this.formattedDate
    this.detectConflictInPreviousTasks(this.formattedDate)

  }

  getGeoLocation() {
    var options = {
      // timeout: 10000,
      enableHighAccuracy: true,
      desiredAccuracy: 10,
      distanceFilter: 30,
      debug: false,
      fastestInterval: 5000,
      stationaryRadius: 20,
      interval: 900000,
      notificationTitle: 'Background Tracking',
      notificationText: 'ENABLED',
      // stopOnTerminate: false,
    };
    this.geolocation.getCurrentPosition(options).then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      if (this.locationOnAddTaskLog) {
        this.locationOnAddTaskLog = false
        this.dataServices.postGeoLocation(0, new Date().toISOString(), JSON.stringify(resp.coords.longitude), JSON.stringify(resp.coords.latitude), localStorage.getItem('UserID'), 'Task Log Added on ' + new Date().toString())
          .then(result => {
            this.locationOnAddTaskLog = false
            console.log('Location post successfully on add task logs: ' + JSON.stringify(result))
            localStorage.removeItem('taskLogGeoLocation')
          }, error => {
            this.locationOnAddTaskLog = true
            console.log('Error in post location: ' + JSON.stringify(error))
          })
      }
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  changeTime(timeSlot: any) {
    console.log("Timeslot:-", timeSlot)
    if (timeSlot == '0' || timeSlot == 0) {
      this.EndTime = this.StartTime
    }

    // //updated code by Ashok
    // var startDate: Date = new Date(this.StartTime);
    // var endDate: Date = new Date(this.EndTime);
    // var differ: number = ((endDate).valueOf() - (startDate).valueOf()) / 1000 / 60 / 60;

    // console.log("updated diff between two dates >> " + differ);

    // if (differ < 0) {
    //   this.EndTime = this.StartTime
    //   return
    // }

    // let hoursString: string = differ.toFixed(2).replace(':', '.')

    let diff = moment(this.EndTime, 'HH:mm:ss').diff(moment(this.StartTime, 'HH:mm:ss'))
    let d: any = moment.duration(diff);
    console.log("Diff between time :-", d._milliseconds)
    var msec = d._milliseconds
    var hh = Math.floor(msec / 1000 / 60 / 60);
    msec -= hh * 1000 * 60 * 60;
    var mm = Math.floor(msec / 900000 * 25);
    msec -= mm * 1000 * 60;
    var ss = Math.floor(msec / 1000);
    msec -= ss * 1000;
    var min = this.n(mm);
    var text = hh + ":" + min;
    console.log("Diff HOUR:", text)
    if (text != "0:00") {
      this.ConHours = text
      if (parseFloat(text.replace(':', '.')) < 0) {
        this.ConHours = 0
        this.hoursConMain = parseFloat(text.replace(':', '.'))
      } else {
        this.hoursConMain = undefined
      }
    } else {
      this.hoursConMain = undefined
      this.ConHours = 0
    }

  }

  openStart() {
    this.startTime.open();
  }

  openStop() {
    this.stopTime.open();
  }

  iconOpenCalendar() {
    this.calenderDatePick.open();
  }

  toggleSection(index) {
    this.information[index].open = !this.information[index].open;
    if (this.automaticClose && this.information[index].open)
      this.information
        .filter((item, itemIndex) => itemIndex != index)
        .map(item => item.open = false);
  }

  async displayUnauthoriesdAlert() {
    const alert = await this.alertController.create({
      header: 'Unauthorized',
      subHeader: '',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.router.navigate(['/login']);
        }
      }]
    });

    await alert.present();
  }

  async ConflictAlert(message) {
    const alert = await this.alertController.create({
      header: '',
      subHeader: '',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

}
