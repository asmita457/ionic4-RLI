import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController, LoadingController, Platform } from '@ionic/angular';
import { DataSevicesService } from '../providers/Data-Services/data-sevices.service';
import { NetworkProviderService } from '../providers/NetworkProvider/network-provider.service';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { delay } from 'q';

@Component({
  selector: 'app-tasklogslist',
  templateUrl: './tasklogslist.page.html',
  styleUrls: ['./tasklogslist.page.scss'],
})
export class TasklogslistPage implements OnInit {

  isSelected: any = 'Approved';
  userId: any
  eventId: any
  resultData: any
  ApprovedTaskLogsData: any
  nonApprovedTaskLogsData: any
  noAuditData = true
  AuditData = true
  taskLogsInDB = []
  conflictTasklogData = []
  conflictTasklogID = []
  i = 0
  j = 0
  k = 0
  approvedTaskLogsDataFromDB = []
  nonApprovedTaskLogsDataFromDB = []
  serverIdsString: string = ''

  taskLogGeoLocation = []
  geoCounter = 0

  constructor(
    private router: Router,
    public navCtrl: NavController,
    public alertController: AlertController,
    public dataServices: DataSevicesService,
    public loadingController: LoadingController,
    public networkProvider: NetworkProviderService,
    private sqlite: SQLite,
    private platform: Platform,
  ) {
    this.isSelected = 'Approved'
    this.getApprovedTaskLogs()

    // this.getApprovedTaskLogs()
    //   this.getNonApprovedTaskLogs().then(_ => {
    //     this.displayTaskLogFromDB().then(_ => {
    //       this.syncTaskLogs().then(_ => {
    //         this.loadingController.dismiss()
    //       })
    //     })
    //   })
    // })
  }

  ngOnInit() {
  }

  newtasklogs() {
    this.router.navigate(['/addtasklogs']);
  }

  async tabChanged(data: any) {

    if (data.detail.value == 'Approved') {
      this.isSelected = 'Approved'
      this.presentLoading().then(_ => {
        this.displayTaskLogFromDB().then(async _ => {
          // await delay(5000);
          this.loadingController.dismiss()
        })
      })
    } else {
      this.isSelected = 'Request';
      this.nonApprovedTaskLogsData = []
      this.nonApprovedTaskLogsDataFromDB = []
      this.presentLoading().then(async _ => {
        // await delay(5000);
        this.nonApprovedTaskLogsData = []
        this.nonApprovedTaskLogsDataFromDB = []
        this.displayTaskLogFromDB().then(async _ => {
          this.loadingController.dismiss()
        })
      })
    }
  }

  async getApprovedTaskLogs() {
    // this.presentLoading()
    this.userId = localStorage.getItem('UserID');
    this.eventId = localStorage.getItem('EventId');
    if (this.networkProvider.getNetworkStatus() == 'Online') {
      this.presentLoading()
      this.dataServices.getApprovedTaskLogsApi(this.userId, this.eventId).then((result) => {
        let approvedTaskLogsData: any = result
        if (approvedTaskLogsData.success) {
          let serverIds = []
          if (approvedTaskLogsData.dateArray.length > 0) {
            for (let i = 0; i < approvedTaskLogsData.dateArray.length; i++) {
              for (let j = 0; j < approvedTaskLogsData.dateArray[i].taskLogArray.length; j++) {
                serverIds.push(approvedTaskLogsData.dateArray[i].taskLogArray[j].log_id)
                this.sqlite.create({
                  name: 'Commander.db',
                  location: 'default'
                }).then(async (db: SQLiteObject) => {
                  await db.executeSql('UPDATE tasklogs SET auditStatus=?, status=? WHERE server_id=?', [approvedTaskLogsData.dateArray[i].taskLogArray[j].status, approvedTaskLogsData.dateArray[i].taskLogArray[j].status, approvedTaskLogsData.dateArray[i].taskLogArray[j].log_id])
                    .then(res => {
                      console.log('Update: ' + res);
                    }).catch(e => console.log(e));
                  await db.executeSql('INSERT INTO tasklogs (userID, eventTitle, eventID, date, LOG, ticket, laborCode, laborCodeID, startTime, endTime, hours, state, stateName, yardID, yardName, comment, transactionId, auditStatus, auditDate, status , reason, server_id) Select ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,? WHERE NOT EXISTS(SELECT * FROM tasklogs WHERE server_id=?)', [localStorage.getItem('UserID'), approvedTaskLogsData.dateArray[i].taskLogArray[j].event_name, '', approvedTaskLogsData.dateArray[i].taskLogArray[j].taskLogDate, approvedTaskLogsData.dateArray[i].taskLogArray[j].log, 'None', approvedTaskLogsData.dateArray[i].taskLogArray[j].labor_code, approvedTaskLogsData.dateArray[i].taskLogArray[j].laborCodeID, approvedTaskLogsData.dateArray[i].taskLogArray[j].start_time, approvedTaskLogsData.dateArray[i].taskLogArray[j].stop_time, approvedTaskLogsData.dateArray[i].taskLogArray[j].hours, approvedTaskLogsData.dateArray[i].taskLogArray[j].state, approvedTaskLogsData.dateArray[i].taskLogArray[j].state, '', approvedTaskLogsData.dateArray[i].taskLogArray[j].yard_name, approvedTaskLogsData.dateArray[i].taskLogArray[j].comments, '', approvedTaskLogsData.dateArray[i].taskLogArray[j].status, '', approvedTaskLogsData.dateArray[i].taskLogArray[j].status, '', approvedTaskLogsData.dateArray[i].taskLogArray[j].log_id, approvedTaskLogsData.dateArray[i].taskLogArray[j].log_id])
                    .then(res => {
                      console.log('Insert: ' + res);
                    }).catch(e => { console.log(e) })
                }).catch(e => console.log(e));
              }
            }

            console.log('serverIds: ' + serverIds)
            let string: string
            string = JSON.stringify(serverIds).replace('[', '').replace(']', '')
            console.log('String approved: ' + string)
            this.serverIdsString = this.serverIdsString + ',' + string
            console.log('String in Approved: ' + this.serverIdsString)
          }
        }
        this.getNonApprovedTaskLogs()
      }, error => {
        if (error.url == null) {
          this.loadingController.dismiss();
          // alert('No internet connection.')
        }
        console.log('error: ' + error)
        this.loadingController.dismiss();
        if (error.status == 401) {
          // this.dataServices.DeleteSqliteDB_Tables()
          this.displayUnauthoriesdAlert();
        }
      })
    } else {
      this.loadingController.dismiss();
      // alert('No internet connection.')
    }
  }

  async getNonApprovedTaskLogs() {
    if (this.networkProvider.getNetworkStatus() == 'Online') {
      this.dataServices.getNonApprovedTaskLogs().then(response => {
        console.log('response: ' + response)
        let nonApprovedTaskLogsData: any = response
        let serverIds = []
        if (nonApprovedTaskLogsData.length > 0) {
          for (let i = 0; i < nonApprovedTaskLogsData.length; i++) {
            for (let j = 0; j < nonApprovedTaskLogsData[i].taskLogArray.length; j++) {
              serverIds.push(nonApprovedTaskLogsData[i].taskLogArray[j].log_id)
              this.sqlite.create({
                name: 'Commander.db',
                location: 'default'
              }).then(async (db: SQLiteObject) => {
                await db.executeSql('UPDATE tasklogs SET auditStatus=?, status=? WHERE server_id=?', [nonApprovedTaskLogsData[i].taskLogArray[j].audit, nonApprovedTaskLogsData[i].taskLogArray[j].audit, nonApprovedTaskLogsData[i].taskLogArray[j].log_id])
                  .then(res => {
                    console.log('Update: ' + res);
                  }).catch(e => console.log(e));
                await db.executeSql('INSERT INTO tasklogs (userID, eventTitle, eventID, date, LOG, ticket, laborCode, laborCodeID, startTime, endTime, hours, state, stateName, yardID, yardName, comment, transactionId, auditStatus, auditDate, status , reason, server_id) Select ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,? WHERE NOT EXISTS(SELECT * FROM tasklogs WHERE server_id=?)', [nonApprovedTaskLogsData[i].taskLogArray[j].user_id, nonApprovedTaskLogsData[i].taskLogArray[j].event_name, nonApprovedTaskLogsData[i].taskLogArray[j].event_id, nonApprovedTaskLogsData[i].taskLogArray[j].taskLogDate, nonApprovedTaskLogsData[i].taskLogArray[j].log, 'None', nonApprovedTaskLogsData[i].taskLogArray[j].labor_code, nonApprovedTaskLogsData[i].taskLogArray[j].laborCodeID, nonApprovedTaskLogsData[i].taskLogArray[j].start_time, nonApprovedTaskLogsData[i].taskLogArray[j].stop_time, nonApprovedTaskLogsData[i].taskLogArray[j].hours, nonApprovedTaskLogsData[i].taskLogArray[j].state, nonApprovedTaskLogsData[i].taskLogArray[j].stateName, nonApprovedTaskLogsData[i].taskLogArray[j].yard_id, nonApprovedTaskLogsData[i].taskLogArray[j].yard_name, nonApprovedTaskLogsData[i].taskLogArray[j].comments, '', nonApprovedTaskLogsData[i].taskLogArray[j].audit, nonApprovedTaskLogsData[i].taskLogArray[j].date, nonApprovedTaskLogsData[i].taskLogArray[j].audit, nonApprovedTaskLogsData[i].taskLogArray[j].reason, nonApprovedTaskLogsData[i].taskLogArray[j].log_id, nonApprovedTaskLogsData[i].taskLogArray[j].log_id])
                  .then(res => {
                    console.log('Insert: ' + res);
                  }).catch(e => { console.log(e) })
                // 'userID, eventTitle, eventID, date, LOG, ticket, laborCode, laborCodeID, startTime, endTime, hours, state, stateName, yardID, yardName, comment, transactionId, auditStatus, auditDate, status , reason, server_id'
              }).catch(e => console.log(e));
            }
          }

          console.log('serverIds: ' + serverIds)
          let string: string
          string = JSON.stringify(serverIds).replace('[', '').replace(']', '')

          console.log('String nonApproved: ' + string)
          this.serverIdsString = this.serverIdsString + ',' + string
          console.log('String in nonApproved: ' + this.serverIdsString)

        }
        this.syncTaskLogs()
      }, error => {
        this.loadingController.dismiss();
        if (error.status == 401) {
          // this.dataServices.DeleteSqliteDB_Tables()
          this.displayUnauthoriesdAlert();
        }
      })
    } else {
      this.loadingController.dismiss();
      // alert('No internet connection.')
    }
  }

  approvedTaskLog(section, index) {
    console.log('Section', section)
    console.log('Index', index)
    this.router.navigate(['approved-tasklog', { item: JSON.stringify(this.ApprovedTaskLogsData[section].taskLogArray[index]) }]);
  }

  declinetasklog(section, index) {
    console.log('Section', section)
    console.log('Index', index)
    this.router.navigate(['declinetasklog', { item: JSON.stringify(this.nonApprovedTaskLogsData[section].taskLogArray[index]) }]);
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      spinner: null
    });
    setTimeout(() => {
      loading.dismiss();
    }, 20000);
    await loading.present();
    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }

  async displayUnauthoriesdAlert() {
    const alert = await this.alertController.create({
      header: 'Unauthorized',
      subHeader: '',
      buttons: [{
        text: 'ok',
        handler: () => {
          this.router.navigate(['/login']);
        }
      }]
    });
    await alert.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: '',
      subHeader: '',
      message: 'Only task logs for your active event are shown.  Note that each client during a deployment is considered to be a separate event. To see other events, go to your portal using this app.  Task logs must be approved by the Finance/Admin Section for you to be paid. Review declined task logs and resubmit as you will not be paid for declined task log hours.',
      buttons: ['OK']
    });
    await alert.present();
  }

  readonly() {
    return true;
  }

  async syncTaskLogs() {
    this.taskLogsInDB = []
    this.sqlite.create({
      name: 'Commander.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('SELECT * FROM tasklogs WHERE server_id=0', [])
        .then(res => {
          console.log("Task log:-", JSON.stringify(res))
          console.log("Task log length:-", JSON.stringify(res.rows.length))
          if (res.rows.length > 0) {
            for (let i = 0; i < res.rows.length; i++) {
              this.taskLogsInDB.push(res.rows.item(i));
            }
          }
          console.log("DATA ARRAY:-", this.taskLogsInDB);
          if (this.taskLogsInDB.length != 0) {
            this.k = 0
            this.detectConflictInPreviousTasks(this.taskLogsInDB[this.k].date)
          }
        })
        .catch(e => console.log(e));
    }).catch(e => console.log(e));
  }

  async detectConflictInPreviousTasks(Date: string) {
    if (this.taskLogsInDB.length > this.k) {
      this.sqlite.create({
        name: 'Commander.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.conflictTasklogData = []
        db.executeSql('SELECT * FROM tasklogs WHERE date=? AND server_id!=0', [Date])
          .then(res => {
            console.log("DATA:-", JSON.stringify(res))
            console.log("Actual DATA:-", JSON.stringify(res.rows.length))
            if (res.rows.length > 0) {
              for (let i = 0; i < res.rows.length; i++) {
                this.conflictTasklogData.push(res.rows.item(i));
              }
            }
            console.log("Detected conflict TasLog DATA ARRAY INSIDE:-", JSON.stringify(this.conflictTasklogData));
            this.validateConflict()
          })
          .catch(e => console.log(e));
      }).catch(e => console.log(e));

    } else {
      this.syncTaskLogs()
    }

  }

  validateConflict() {
    console.log("Detected conflict TasLog DATA ARRAY VALIDATE CONFLICT:-", JSON.stringify(this.conflictTasklogData))
    for (let j = 0; j < this.taskLogsInDB.length; j++) {
      for (let i = 0; i < this.conflictTasklogData.length; i++) {
        if (this.taskLogsInDB[j].startTime > this.conflictTasklogData[i].startTime && this.taskLogsInDB[j].startTime < this.conflictTasklogData[i].endTime || this.taskLogsInDB[j].endTime < this.conflictTasklogData[i].endTime && this.taskLogsInDB[j].endTime > this.conflictTasklogData[i].startTime || (this.taskLogsInDB[j].startTime <= this.conflictTasklogData[i].startTime && this.conflictTasklogData[i].startTime < this.taskLogsInDB[j].endTime) && (this.taskLogsInDB[j].startTime < this.conflictTasklogData[i].endTime && this.conflictTasklogData[i].endTime <= this.taskLogsInDB[j].endTime)) {
          // if (this.taskLogsInDB[j].startTime == this.conflictTasklogData[i].startTime || this.taskLogsInDB[j].startTime > this.conflictTasklogData[i].startTime && this.taskLogsInDB[j].startTime < this.conflictTasklogData[i].endTime || this.taskLogsInDB[j].endTime < this.conflictTasklogData[i].endTime && this.taskLogsInDB[j].endTime > this.conflictTasklogData[i].startTime || this.taskLogsInDB[j].endTime == this.conflictTasklogData[i].endTime) {
          // this.deleteConflictOfflineTaskLogs(this.taskLogsInDB[j].ID)
          this.conflictTasklogID.push(this.taskLogsInDB[j].ID)
          this.taskLogsInDB.splice(j, 1)
          if (this.taskLogsInDB.length == 0) {
            break
          }
        }
      }
    }
    if (this.conflictTasklogID.length == 0) {
      this.i = 0
      this.postTaskLog()
      this.taskLogGeoLocation = JSON.parse(localStorage.getItem('taskLogGeoLocation'))
      if (this.taskLogGeoLocation.length != 0) {
        this.geoCounter = 0
        this.postTaskLogGeoLocation()
      }
    } else {
      this.j = 0
      this.deleteConflictOfflineTaskLogs()
    }
  }

  postTaskLogGeoLocation() {
    this.dataServices.postGeoLocation(this.taskLogGeoLocation[this.geoCounter].split(',')[0], this.taskLogGeoLocation[this.geoCounter].split(',')[1], this.taskLogGeoLocation[this.geoCounter].split(',')[2], this.taskLogGeoLocation[this.geoCounter].split(',')[3], this.taskLogGeoLocation[this.geoCounter].split(',')[4], this.taskLogGeoLocation[this.geoCounter].split(',')[5])
      .then(result => {
        console.log('Location post successfully on add task logs: ' + JSON.stringify(result))
        if (this.geoCounter < this.taskLogGeoLocation.length) {
          this.geoCounter +=1
          this.postTaskLogGeoLocation()
        } else {
          localStorage.removeItem('taskLogGeoLocation')
        }
      }, error => {
        console.log('Error in post location: ' + JSON.stringify(error))
      })
  }

  async deleteConflictOfflineTaskLogs() {
    if (this.conflictTasklogID.length > this.j) {
      this.sqlite.create({
        name: 'Commander.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('DELETE FROM tasklogs WHERE ID=?', [this.conflictTasklogID[this.j]])
          .then(res => {
            console.log("Delete Response:-", JSON.stringify(res))
            this.j++
            this.deleteConflictOfflineTaskLogs()
          })
          .catch(e => console.log(e));
      }).catch(e => console.log(e));
    } else {
      if (this.taskLogsInDB.length > this.k) {
        // if(this.taskLogsInDB.length == 1){
        // this.conflictTasklogID = []
        // this.detectConflictInPreviousTasks(this.taskLogsInDB[this.k].date) 
        // }else{
        this.k++
        this.conflictTasklogID = []
        this.detectConflictInPreviousTasks(this.taskLogsInDB[this.k - 1].date)
        // }

      } else {
        this.taskLogsInDB = []
        this.syncTaskLogs()
      }

      // this.conflictTasklogData = []
      // this.validateConflict()
      // this.syncTaskLogs()
    }

  }

  postTaskLog() {
    if (this.taskLogsInDB.length > this.i) {
      if (this.networkProvider.getNetworkStatus() == 'Online') {
        this.dataServices.postTaskLog(this.taskLogsInDB[this.i].ID, this.taskLogsInDB[this.i].eventID, this.taskLogsInDB[this.i].userID, this.taskLogsInDB[this.i].yardID, this.taskLogsInDB[this.i].laborCodeID, this.taskLogsInDB[this.i].ticket, this.taskLogsInDB[this.i].date, this.taskLogsInDB[this.i].LOG, this.taskLogsInDB[this.i].startTime, this.taskLogsInDB[this.i].endTime, this.taskLogsInDB[this.i].hours, this.taskLogsInDB[this.i].state, this.taskLogsInDB[this.i].comment, this.taskLogsInDB[this.i].auditDate, this.taskLogsInDB[this.i].auditStatus, this.taskLogsInDB[this.i].reason).then(async (result: any) => {
          console.log("Sucess Status: ", result)
          console.log("Response Data", result.success)
          if (result.success == true) {
            this.sqlite.create({
              name: 'Commander.db',
              location: 'default'
            }).then((db: SQLiteObject) => {
              db.executeSql('UPDATE tasklogs SET server_id= ? WHERE ID= ?', [result.server_id, result.local_id])
                .then(res => {
                  console.log(res);
                }).catch(e => console.log(e));
            }).catch(e => console.log(e));
            this.i++
            if (this.taskLogsInDB.length == this.i) {
              this.taskLogsInDB = []
              // this.TaskLogSaved("Task Log Saved Successfully")
              this.nonApprovedTaskLogsData = []
              this.nonApprovedTaskLogsDataFromDB = []
              await this.displayTaskLogFromDB()
            } else {
              this.postTaskLog()
            }
          } else {
            this.i++
            if (this.taskLogsInDB.length == this.i) {
              this.taskLogsInDB = []
              this.nonApprovedTaskLogsData = []
              this.nonApprovedTaskLogsDataFromDB = []
              await this.displayTaskLogFromDB()
              // this.taskLogSaved("Task Log Saved Successfully")
            } else {
              this.postTaskLog()
            }
          }
        });
      } else {
        this.loadingController.dismiss()
        // alert('No internet connection.')
      }
    }
  }

  async displayTaskLogFromDB() {
    this.sqlite.create({
      name: 'Commander.db',
      location: 'default'
    }).then(async (db: SQLiteObject) => {
      // if (this.networkProvider.getNetworkStatus() == 'Online') {
      //   this.presentLoading()
      // }
      await db.executeSql('SELECT * FROM tasklogs GROUP BY date ORDER BY date DESC', [])
        .then(async res => {
          console.log("Task log:-", JSON.stringify(res))
          console.log("Task log length:-", JSON.stringify(res.rows.length))
          if (res.rows.length > 0) {
            this.approvedTaskLogsDataFromDB = []
            this.nonApprovedTaskLogsDataFromDB = []
            for (let i = 0; i < res.rows.length; i++) {
              //Approved
              db.executeSql('SELECT * FROM tasklogs WHERE date = ? AND status = "Approved"', [res.rows.item(i).date]).then(res1 => {
                console.log('Data of Date: ' + res1)
                if (res1.rows.length > 0) {
                  let taskLogArr = []
                  let totalHrs = 0.0
                  for (let j = 0; j < res1.rows.length; j++) {
                    let taskLogDataObj: any
                    taskLogDataObj = {
                      "log_id": res1.rows.item(j).LOG,
                      "event_name": res1.rows.item(j).eventTitle,
                      "taskLogDate": res1.rows.item(j).date,
                      "log": res1.rows.item(j).LOG,
                      "labor_code": res1.rows.item(j).laborCode,
                      "laborCodeID": res1.rows.item(j).laborCodeID,
                      "start_time": res1.rows.item(j).startTime,
                      "stop_time": res1.rows.item(j).endTime,
                      "hours": res1.rows.item(j).hours,
                      "state": res1.rows.item(j).state,
                      "comments": res1.rows.item(j).comment,
                      "yard_name": res1.rows.item(j).yardName,
                      "status": res1.rows.item(j).status,
                      // "user_id": "234",
                      // "event_id": "IIB",
                      // "stateName": "Alaska",
                      // "audit": "Audit Required",
                      // "date": "00-00-0000",
                      // "reason": "",
                      // "yard_id": "HEAH38"
                    }
                    taskLogArr.push(taskLogDataObj)
                    totalHrs += parseFloat((res1.rows.item(j).hours).replace(':', '.')) //res1.rows.item(j).hours
                  }
                  console.log(res.rows.item(i).date + ': ' + taskLogArr.length + ' totalHrs: ' + totalHrs)
                  let taskLog: any
                  taskLog = {
                    "date": res.rows.item(i).date,
                    "totalHrs": totalHrs,
                    "taskLogArray": taskLogArr
                  }
                  this.approvedTaskLogsDataFromDB.push(taskLog)
                }
                console.log('approvedTaskLogsDataFromDB: ' + JSON.stringify(this.approvedTaskLogsDataFromDB))
                this.ApprovedTaskLogsData = this.approvedTaskLogsDataFromDB
                if (this.ApprovedTaskLogsData.length > 0) {
                  this.AuditData = false
                } else {
                  this.AuditData = true
                }
              }).catch(e => console.log('Error in Date DB: ' + e));

              //Audit Required AND status = "Audit Required" OR status = "Audit Completed"
              await db.executeSql('SELECT * FROM tasklogs WHERE date = ? AND status = "Audit Required" OR status = "Audit Completed"', [res.rows.item(i).date]).then(res1 => {
                if (res1.rows.length > 0) {
                  let taskLogArr = []
                  let totalHrs = 0.0
                  for (let j = 0; j < res1.rows.length; j++) {
                    let taskLogDataObj: any
                    taskLogDataObj = {
                      "log_id": res1.rows.item(j).LOG,
                      "event_name": res1.rows.item(j).eventTitle,
                      "taskLogDate": res1.rows.item(j).date,
                      "log": res1.rows.item(j).LOG,
                      "labor_code": res1.rows.item(j).laborCode,
                      "laborCodeID": res1.rows.item(j).laborCodeID,
                      "start_time": res1.rows.item(j).startTime,
                      "stop_time": res1.rows.item(j).endTime,
                      "hours": res1.rows.item(j).hours,
                      "state": res1.rows.item(j).state,
                      "comments": res1.rows.item(j).comment,
                      "yard_name": res1.rows.item(j).yardName,
                      "status": res1.rows.item(j).status,
                      // "user_id": "234",
                      // "event_id": "IIB",
                      // "stateName": "Alaska",
                      // "audit": "Audit Required",
                      // "date": "00-00-0000",
                      // "reason": "",
                      // "yard_id": "HEAH38"
                    }
                    taskLogArr.push(taskLogDataObj)
                    totalHrs += parseFloat((res1.rows.item(j).hours).replace(':', '.')) //res1.rows.item(j).hours
                  }
                  console.log(res.rows.item(i).date + ': ' + taskLogArr.length + ' totalHrs: ' + totalHrs)
                  let taskLog: any
                  taskLog = {
                    "date": res.rows.item(i).date,
                    "totalHrs": totalHrs,
                    "taskLogArray": taskLogArr
                  }
                  this.nonApprovedTaskLogsDataFromDB.push(taskLog)
                }
                console.log('nonApprovedTaskLogsDataFromDB: ' + JSON.stringify(this.nonApprovedTaskLogsDataFromDB))
                this.nonApprovedTaskLogsData = this.nonApprovedTaskLogsDataFromDB
                if (this.nonApprovedTaskLogsData.length > 0) {
                  this.noAuditData = false
                } else {
                  this.noAuditData = true
                }

              }).catch(e => console.log('Error in Date DB: ' + e));
            }
          }
        }).catch(e => console.log(e));
    }).catch(e => console.log(e));
  }
}
