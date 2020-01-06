import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController, LoadingController, Platform } from '@ionic/angular';
import { DataSevicesService } from '../providers/Data-Services/data-sevices.service';
import { NetworkProviderService } from '../providers/NetworkProvider/network-provider.service';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { delay } from 'q';

@Component({
  selector: 'app-receipts',
  templateUrl: './receipts.page.html',
  styleUrls: ['./receipts.page.scss'],
})
export class ReceiptsPage implements OnInit {

  isSelected: any = 'Approved';

  uId: any
  eventId: any
  isAuditdataBlank: any = 'Blank';
  isApprovedDataBlank: any = 'Blank';
  activeEvent: any
  receiptsInDB = []
  i = 0
  receiptsofflineInDB = []
  responseData: any
  approvedReceiptData: any
  auditReceiptData: any
  balanceData: any = 0.00
  approvedReceiptDataFromDB = []
  nonApprovedReceiptDataFromDB = []
  serverIdsString: string = ''

  receiptGeoLocation = []
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
    this.isAuditdataBlank = 'Blank';
    this.isApprovedDataBlank = 'Blank';
    this.platform.ready().then(() => {
      delay(_ => {
        this.displayReceiptFromDB()
      }, 5000)
    })
  }

  ngOnInit() {
    this.activeEvent = localStorage.getItem('EventName');
    this.syncReceipts()
    this.getBalanceFromReceipt()
    this.getApprovedReceiptsData()
    this.getAuditReceiptListData()
  }

  newReceipt() {
    this.router.navigate(['/newreceipts']);
  }

  tabChanged(data: any) {
    console.log('tab: ' + data.detail.value);
    if (data.detail.value == 'Approved') {
      console.log('Approved.');
      this.getApprovedReceiptsData()
      this.isSelected = 'Approved';
      // this.displayReceiptFromDB()
    } else {
      console.log('Request.');
      // this.getAuditReceiptListData()
      this.isSelected = 'Request';
      this.displayReceiptFromDB()
    }
  }

  async getApprovedReceiptsData() {
    if (this.networkProvider.getNetworkStatus() == 'Online') {
      let eventid = localStorage.getItem('EventId')
      let contractorid = localStorage.getItem('UserID')
      this.dataServices.getApprovedReceiptList(eventid, contractorid).then((result: any) => {
        this.approvedReceiptData = result.dateArray
        console.log("Approved Receipt DATA:-", this.approvedReceiptData)
        localStorage.setItem('approvedReceipt', JSON.stringify(this.approvedReceiptData))
        if (this.approvedReceiptData.length > 0) {
          this.isApprovedDataBlank = 'Data'
        } else {
          this.isApprovedDataBlank = 'Blank';
        }
      }, error => {
        if (error.url == null) {
          this.loadingController.dismiss();
          // alert('No internet connection.')  
        }
        this.loadingController.dismiss();
        if (error.status == 401) {
          // this.dataServices.DeleteSqliteDB_Tables()
          this.displayUnauthoriesdAlert();
        }
      })
    } else {
      this.approvedReceiptData = JSON.parse(localStorage.getItem('approvedReceipt'))
      console.log('Offline receipt: ' + this.approvedReceiptData)
      if (this.approvedReceiptData.length > 0) {
        this.isApprovedDataBlank = 'Data'
      } else {
        this.isApprovedDataBlank = 'Blank';
      }
      this.loadingController.dismiss();
      // alert('No internet connection.')
    }
  }

  async getAuditReceiptListData() {
    if (this.networkProvider.getNetworkStatus() == 'Online') {
      // this.presentLoading()
      this.dataServices.getAuditReceiptList().then((response) => {
        // this.auditReceiptData = result
        // console.log("Audit Receipt DATA:-", this.auditReceiptData)
        // this.isAuditdataBlank = 'Data'
        let nonApprovedReceiptData: any = []
        nonApprovedReceiptData = response
        let serverIds = []
        if (nonApprovedReceiptData.length > 0) {
          for (let i = 0; i < nonApprovedReceiptData.length; i++) {
            for (let j = 0; j < nonApprovedReceiptData[i].data.length; j++) {
              // serverIds.push(nonApprovedReceiptData[i].data[j].log_id)
              this.sqlite.create({
                name: 'Commander.db',
                location: 'default'
              }).then((db: SQLiteObject) => {
                db.executeSql('UPDATE receipts SET transactionID=?, auditStatus=?, status=?, reason=? WHERE server_id=?', [nonApprovedReceiptData[i].data[j].transaction_id, nonApprovedReceiptData[i].data[j].rliOfficeUpdateArray.audit_status, nonApprovedReceiptData[i].data[j].rliOfficeUpdateArray.status, nonApprovedReceiptData[i].data[j].rliOfficeUpdateArray.reason, nonApprovedReceiptData[i].data[j].transaction_id])
                  .then(res => {
                    console.log('Update: ' + res);
                  }).catch(e => console.log(e));
                let receiptInsertQuery = 'INSERT INTO receipts (userID,  receiptID,   eventTitle, eventID, workorder, date, amount,   category, categoryID, comment, transactionID, auditStatus, auditDate, status,  reason, RLICardinfo, yardID, yardName, image, imageName, server_id) Select ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,? WHERE NOT EXISTS(SELECT * FROM receipts WHERE server_id=?)'
                db.executeSql(receiptInsertQuery, [nonApprovedReceiptData[i].data[j].userId, nonApprovedReceiptData[i].data[j].transaction_id, '', nonApprovedReceiptData[i].data[j].event_id, '', nonApprovedReceiptData[i].data[j].receiptDate, nonApprovedReceiptData[i].data[j].amount.toString(), nonApprovedReceiptData[i].data[j].category_name, nonApprovedReceiptData[i].data[j].category_id, nonApprovedReceiptData[i].data[j].comments, nonApprovedReceiptData[i].data[j].transaction_id, nonApprovedReceiptData[i].data[j].rliOfficeUpdateArray.audit_status, nonApprovedReceiptData[i].data[j].rliOfficeUpdateArray.date, nonApprovedReceiptData[i].data[j].rliOfficeUpdateArray.status, nonApprovedReceiptData[i].data[j].rliOfficeUpdateArray.reason, '', nonApprovedReceiptData[i].data[j].yard_id, nonApprovedReceiptData[i].data[j].yard_name, nonApprovedReceiptData[i].data[j].receiptFile, '', nonApprovedReceiptData[i].data[j].transaction_id, nonApprovedReceiptData[i].data[j].transaction_id])
                  .then(res => {
                    console.log('Insert: ' + res);
                  }).catch(e => { console.log(e) })
                //                                                                                                                                                                                                                                                                                                                                                                                            'userID,                                      eventTitle,                           eventID,                                                            date,                                     LOG,                                 ticket,                          laborCode,                                        laborCodeID,                                              startTime,                                                endTime,                                              hours,                                            state,                                          stateName,                                          yardID,                                                yardName,                                       comment,                     transactionId,                      auditStatus,                                auditDate,                                      status ,                                              reason,                                     server_id'
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
        this.loadingController.dismiss()
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

  async getBalanceFromReceipt() {
    if (this.networkProvider.getNetworkStatus() == 'Online') {
      // this.presentLoading();
      this.uId = localStorage.getItem('UserID');
      this.eventId = localStorage.getItem('EventId');
      this.dataServices.getBalanceFromReceiptApi(this.uId, this.eventId).then((result: any) => {
        this.balanceData = result.data;
        console.log('Balance : ' + this.balanceData);
        localStorage.setItem('balance', result.data)
        this.loadingController.dismiss();
      }, error => {
        this.loadingController.dismiss();
        if (error.status == 401) {
          // this.dataServices.DeleteSqliteDB_Tables()
          this.displayUnauthoriesdAlert();
        }
      })
    } else {
      this.loadingController.dismiss();
      this.balanceData = localStorage.getItem('balance')
      // alert('No internet connection.')
    }
  }

  acceptReceipt(section, index) {
    console.log('Section: ', section)
    console.log('Index: ', index)
    console.log('acceptReceipt: ' + JSON.stringify(this.approvedReceiptData[section].receiptListArray[index]))
    this.router.navigate(['approved-receipt', { type: 'receipt', item: JSON.stringify(this.approvedReceiptData[section].receiptListArray[index]) }]);
  }

  payoutClicked(section) {
    console.log('Section of payout: ', section)
    this.router.navigate(['approved-receipt', { type: 'payout', item: JSON.stringify(this.approvedReceiptData[section].payoutData) }]);
  }

  declineReceipt(section, index) {
    console.log('Section: ', section)
    console.log('Index: ', index)
    this.router.navigate(['declinedreceipt', { item: JSON.stringify(this.auditReceiptData[section].data[index]) }]);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: '',
      subHeader: '',
      message: 'The details listed and the balance are only for your active event.  Note that each client during a deployment is considered to be a separate event. To see balances from other events, please go to your portal using this app.  Receipts must be approved by the Finance/Admin Section for you to be reimbursed. Review declined receipts and resubmit if you disagree with the decision as you will not be reimbursed for declined receipts.',
      buttons: ['OK']
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

  readonly() {
    return true;
  }

  syncReceipts() {
    if (this.networkProvider.getNetworkStatus() == 'Online') {
      this.presentLoading()
    }
    this.sqlite.create({
      name: 'Commander.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('SELECT * FROM receipts WHERE server_id=0', [])
        .then(res => {
          console.log("Task log:-", JSON.stringify(res))
          console.log("Task log length:-", JSON.stringify(res.rows.length))
          if (res.rows.length > 0) {
            for (let i = 0; i < res.rows.length; i++) {
              this.receiptsInDB.push(res.rows.item(i));
            }
          }
          console.log("DATA ARRAY:-", this.receiptsInDB);
          this.i = 0
          this.postReceipt()
          this.receiptGeoLocation = JSON.parse(localStorage.getItem('receiptGeoLocation'))
      if (this.receiptGeoLocation.length != 0) {
        this.geoCounter = 0
        this.postReceiptGeoLocation()
      }
        })
        .catch(e => console.log(e));
    }).catch(e => console.log(e));
  }

  postReceiptGeoLocation() {
    this.dataServices.postGeoLocation(this.receiptGeoLocation[this.geoCounter].split(',')[0], this.receiptGeoLocation[this.geoCounter].split(',')[1], this.receiptGeoLocation[this.geoCounter].split(',')[2], this.receiptGeoLocation[this.geoCounter].split(',')[3], this.receiptGeoLocation[this.geoCounter].split(',')[4], this.receiptGeoLocation[this.geoCounter].split(',')[5])
      .then(result => {
        console.log('Location post successfully on add task logs: ' + JSON.stringify(result))
        if (this.geoCounter < this.receiptGeoLocation.length) {
          this.geoCounter +=1
          this.postReceiptGeoLocation()
        } else {
          localStorage.removeItem('receiptGeoLocation')
        }
      }, error => {
        console.log('Error in post location: ' + JSON.stringify(error))
      })
  }

  postReceipt() {
    if (this.receiptsInDB.length > this.i) {
      if (this.networkProvider.getNetworkStatus() == 'Online') {
        // local_id: any, eventId: any, date: any, yard: any, entityID: any, category: any, amount: any, comments: any, billable: any,checknum: any,audit: any,receiptFileNname: any, ccid: any
        if (this.receiptsInDB[this.i].RLICardinfo.split('.')[0].length != 0) {
          if (this.receiptsInDB[this.i].RLICardinfo.split('.')[0].length == 4) {
            // GET CREDIT CARD DETAILS API CALL
            this.dataServices.getCreditCardDetailApi(this.receiptsInDB[this.i].RLICardinfo.split('.')[0]).then((result) => {
              this.responseData = result
              console.log("Credit Card", this.responseData)
              let creditIdStatus = this.responseData.status;
              if (creditIdStatus == 'success') {
                //Update RLICardinfo number to credit_id
                this.sqlite.create({
                  name: 'Commander.db',
                  location: 'default'
                }).then((db: SQLiteObject) => {
                  db.executeSql('UPDATE receipts SET RLICardinfo= ? WHERE ID= ?', [this.responseData.credit_id, this.receiptsInDB[this.i].ID])
                    .then(res => {
                      console.log(res);

                    }).catch(e => console.log(e));
                }).catch(e => console.log(e));

                //Retrieve same row for post 
                this.sqlite.create({
                  name: 'Commander.db',
                  location: 'default'
                }).then((db: SQLiteObject) => {
                  db.executeSql('SELECT * FROM receipts WHERE ID=?', [this.receiptsInDB[this.i].ID])
                    .then(res => {
                      console.log("Task log:-", JSON.stringify(res))
                      console.log("Task log length:-", JSON.stringify(res.rows.length))
                      if (res.rows.length > 0) {
                        this.receiptsofflineInDB = []
                        for (let i = 0; i < res.rows.length; i++) {
                          this.receiptsofflineInDB.push(res.rows.item(i));
                        }
                      }
                      console.log("DATA ARRAY:-", this.receiptsofflineInDB);
                      console.log('Credit Card No:-', this.receiptsofflineInDB[0].RLICardinfo)
                      this.dataServices.postReceiptData(this.receiptsofflineInDB[0].ID, this.receiptsofflineInDB[0].eventID, this.receiptsofflineInDB[0].date, this.receiptsofflineInDB[0].yardName, this.receiptsofflineInDB[0].userID, this.receiptsofflineInDB[0].categoryID, this.receiptsofflineInDB[0].amount, this.receiptsofflineInDB[0].comment, 1, '', 1, this.receiptsofflineInDB[0].image, this.receiptsofflineInDB[0].imageName, this.receiptsofflineInDB[0].RLICardinfo).then((result: any) => {
                        console.log("Sucess Status: ", result)
                        console.log("Response Data", result.success)
                        if (result.success == true) {
                          this.sqlite.create({
                            name: 'Commander.db',
                            location: 'default'
                          }).then((db: SQLiteObject) => {
                            db.executeSql('UPDATE receipts SET transactionID=?, server_id=? WHERE ID=?', [result.server_id, result.server_id, result.local_id])
                              .then(res => {
                                console.log(res);
                                this.i++
                                if (this.receiptsInDB.length == this.i) {
                                  this.receiptsInDB = []
                                  this.loadingController.dismiss()
                                  // this.TaskLogSaved("Task Log Saved Successfully")
                                } else {
                                  this.loadingController.dismiss()
                                  this.postReceipt()
                                }
                              }).catch(e => console.log(e));
                          }).catch(e => console.log(e));

                        } else {
                          this.i++
                          if (this.receiptsInDB.length == this.i) {
                            this.receiptsInDB = []
                            this.loadingController.dismiss()
                            // this.taskLogSaved("Task Log Saved Successfully")
                          } else {
                            this.loadingController.dismiss()
                            this.postReceipt()
                          }
                        }
                      });
                    }).catch(e => console.log(e));
                }).catch(e => console.log(e));

              } else {
                // If Credit card no. is invalid. 
                this.sqlite.create({
                  name: 'Commander.db',
                  location: 'default'
                }).then((db: SQLiteObject) => {
                  db.executeSql('UPDATE receipts SET auditStatus= ? WHERE ID= ?', ['Declined', this.receiptsInDB[this.i].ID])
                    .then(res => {
                      console.log(res);
                      this.i++
                      if (this.receiptsInDB.length == this.i) {
                        this.receiptsInDB = []
                        this.loadingController.dismiss()
                        // this.taskLogSaved("Task Log Saved Successfully")
                      } else {
                        this.loadingController.dismiss()
                        this.postReceipt()
                      }
                    }).catch(e => console.log(e));
                }).catch(e => console.log(e));

              }
            }, error => {
              this.loadingController.dismiss();
              if (error.status == 401) {
                // this.dataServices.DeleteSqliteDB_Tables()
                this.displayUnauthoriesdAlert();
              }
            })

          }

        } else {
          // Without credit card 
          this.dataServices.postReceiptData(this.receiptsInDB[this.i].ID, this.receiptsInDB[this.i].eventID, this.receiptsInDB[this.i].date, this.receiptsInDB[this.i].yardName, this.receiptsInDB[this.i].userID, this.receiptsInDB[this.i].categoryID, this.receiptsInDB[this.i].amount, this.receiptsInDB[this.i].comment, 1, '', 1, this.receiptsInDB[this.i].image, this.receiptsInDB[this.i].imageName, this.receiptsInDB[this.i].RLICardinfo).then((result: any) => {
            console.log("Sucess Status: ", result)
            console.log("Response Data", result.success)
            if (result.success == true) {
              this.sqlite.create({
                name: 'Commander.db',
                location: 'default'
              }).then((db: SQLiteObject) => {
                db.executeSql('UPDATE receipts SET transactionID=?, server_id=? WHERE ID=?', [result.server_id, result.server_id, result.local_id])
                  .then(res => {
                    console.log(res);
                  }).catch(e => console.log(e));
              }).catch(e => console.log(e));
              this.i++
              if (this.receiptsInDB.length == this.i) {
                this.receiptsInDB = []
                // this.TaskLogSaved("Task Log Saved Successfully")
              } else {
                this.postReceipt()
              }
            } else {
              this.i++
              if (this.receiptsInDB.length == this.i) {
                this.receiptsInDB = []
                this.loadingController.dismiss()
                // this.taskLogSaved("Task Log Saved Successfully")
              } else {
                this.postReceipt()
              }
            }
          });

        }
      } else {
        this.loadingController.dismiss();
        // alert('No internet connection.')
      }
    } else {
      this.loadingController.dismiss()
    }
  }

  displayReceiptFromDB() {
    this.sqlite.create({
      name: 'Commander.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('SELECT * FROM receipts GROUP BY date ORDER BY date DESC', [])
        .then(res => {
          console.log("Task log:-", JSON.stringify(res))
          console.log("Task log length:-", JSON.stringify(res.rows.length))
          if (res.rows.length > 0) {
            this.approvedReceiptDataFromDB = []
            this.nonApprovedReceiptDataFromDB = []
            for (let i = 0; i < res.rows.length; i++) {
              //Audit Required
              db.executeSql('SELECT * FROM receipts WHERE date = ?', [res.rows.item(i).date]).then(res1 => {
                console.log('Data of Date: ' + res1)
                if (res1.rows.length > 0) {
                  let taskLogArr = []
                  // let totalHrs = 0.0
                  for (let j = 0; j < res1.rows.length; j++) {
                    let taskLogDataObj: any
                    taskLogDataObj = {
                      "event_id": res1.rows.item(j).eventID,
                      "userId": res1.rows.item(j).userID,
                      "yard_id": res1.rows.item(j).yardID,
                      "receiptDate": res1.rows.item(j).date,
                      "category_name": res1.rows.item(j).category,
                      "category_id": res1.rows.item(j).categoryID,
                      "amount": res1.rows.item(j).amount,
                      "transaction_id": res1.rows.item(j).transactionID,
                      "comments": res1.rows.item(j).comment,
                      "yard_name": res1.rows.item(j).yardName,
                      "receiptFile": res1.rows.item(j).image,
                      "checknum": "",
                      "rliOfficeUpdateArray": {
                        "audit_status": res1.rows.item(j).auditStatus,
                        "date": "0000-00-00 00:00:00",
                        "transaction_id": res1.rows.item(j).transactionID,
                        "status": res1.rows.item(j).status,
                        "reason": res1.rows.item(j).reason
                      }
                    }
                    taskLogArr.push(taskLogDataObj)
                    // totalHrs += parseFloat((res1.rows.item(j).hours).replace(':', '.')) //res1.rows.item(j).hours
                  }
                  // console.log(res.rows.item(i).date + ': ' + taskLogArr.length + ' totalHrs: ' + totalHrs)
                  let taskLog: any
                  taskLog = {
                    "date": res.rows.item(i).date,
                    // "totalHrs": totalHrs,
                    "data": taskLogArr
                  }
                  this.nonApprovedReceiptDataFromDB.push(taskLog)
                }
                console.log('nonApprovedReceiptDataFromDB: ' + JSON.stringify(this.nonApprovedReceiptDataFromDB))
                this.auditReceiptData = this.nonApprovedReceiptDataFromDB
                if (this.auditReceiptData.length > 0) {
                  this.isAuditdataBlank = 'Data'
                } else {
                  this.isAuditdataBlank = 'Blank'
                }
              }).catch(e => console.log('Error in Date DB: ' + e));
            }
          }
        }).catch(e => console.log(e));
    }).catch(e => console.log(e));
  }

}
