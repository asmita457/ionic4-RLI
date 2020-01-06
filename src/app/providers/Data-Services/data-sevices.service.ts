import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { promise } from 'protractor';
import { resolve, reject } from 'q';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DataSevicesService {

  BaseURL = 'http://cmdr-app.rlisri.com'
  APIBaseUrl = 'http://cmdr-app.rlisri.com:3000/api/'

  constructor
    (
      public http: Http,
      private sqlite: SQLite
    ) { }

  getBalanceFromReceiptApi(uId, eventId) {

    return new Promise((resolve, reject) => {
      let authToken = localStorage.getItem('AuthToken');
      console.log('AuthToken : ' + authToken);
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      // headers.set('Access-Control-Allow-Origin', '*');
      // headers.set('Accept', 'application/json');

      requestOpt.headers = headers

      this.http.get('https://rlicommander.com/live/common/api/event_fin.php?format=json&method=balance&k=83&cid=' + uId + '&event=' + eventId, requestOpt).subscribe((response) => {
        // console.log("Data", response.json()); // data received by server
        // response.
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  getCategories() {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      // let AuthToken = localStorage.getItem('AuthToken')
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      // headers.set('Authorization', AuthToken)

      requestOpt.headers = headers

      // this.http.get(this.APIBaseUrl + 'getCategories/', requestOpt).subscribe((response) => {
      this.http.get('http://rlicommander.com/live/common/api/event_fin.php?format=json&method=expense_types&k=83&cid=' + localStorage.getItem('UserID') + '&event=' + localStorage.getItem('EventId'), requestOpt).subscribe(response => {
        console.log("Data", response.json()); // data received by server
        // response.
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  getApprovedTaskLogsApi(userId, eventId) {
    return new Promise((resolve, reject) => {
      let authToken = localStorage.getItem('AuthToken');
      console.log('AuthToken : ' + authToken);
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Authorization', authToken)
      headers.set('Access-Control-Allow-Origin', '*');
      headers.set('Accept', 'application/json');

      requestOpt.headers = headers

      this.http.get(this.APIBaseUrl + 'getApprovedTaskLogsList?event_id=' + eventId + '&contractor_id=' + userId, requestOpt).subscribe((response) => {
        // console.log("Data", response.json()); // data received 
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }


  getLaborCodeApi(userId, eventId) {
    return new Promise((resolve, reject) => {
      let authToken = localStorage.getItem('AuthToken');
      console.log('AuthToken : ' + authToken);
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Authorization', authToken)
      // headers.set('Access-Control-Allow-Origin', '*');
      // headers.set('Accept', 'application/json');

      requestOpt.headers = headers

      this.http.get('http://rlicommander.com/live/common/api/event_fin.php?format=json&method=labor_codes&k=83&cid=' + userId + '&event=' + eventId, requestOpt).subscribe((response) => {
        // console.log("Data", response.json()); // data received 
        resolve(response)
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }


  getActiveEventsApi(userId) {
    return new Promise((resolve, reject) => {
      let authToken = localStorage.getItem('AuthToken');
      console.log('AuthToken : ' + authToken);
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Authorization', authToken)

      requestOpt.headers = headers

      this.http.get(this.APIBaseUrl + 'getActiveEvents?contractor_id=' + userId, requestOpt).subscribe((response) => {
        console.log("Data", response.json()); // data received by server
        // response.
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  getNonApprovedTaskLogs() {
    return new Promise((resolve, reject) => {
      let authToken = localStorage.getItem('AuthToken');
      console.log('AuthToken : ' + authToken);
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Authorization', authToken)
      headers.set('Access-Control-Allow-Origin', '*');
      headers.set('Accept', 'application/json');
      requestOpt.headers = headers

      let userId = localStorage.getItem('UserID')
      let eventId = localStorage.getItem('EventId')

      this.http.get(this.APIBaseUrl + 'getRejectedTaskLogsList?event_id=' + eventId + '&contractor_id=' + userId, requestOpt).subscribe((response) => {
        console.log("Data", response.json());
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  getUnreadNotificationsApi() {
    return new Promise((resolve, reject) => {
      let authToken = localStorage.getItem('AuthToken');
      console.log('AuthToken : ' + authToken);
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Authorization', authToken)
      headers.set('Access-Control-Allow-Origin', '*');
      headers.set('Accept', 'application/json');
      requestOpt.headers = headers

      let userId = localStorage.getItem('UserID')
      let eventId = localStorage.getItem('EventId')

      this.http.get(this.APIBaseUrl + 'unreadOnlyMessages?event_id=' + eventId + '&contractor_id=' + userId, requestOpt).subscribe((response) => {
        console.log("Data", response.json());
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  getReadNotificationsApi() {
    return new Promise((resolve, reject) => {
      let authToken = localStorage.getItem('AuthToken');
      console.log('AuthToken : ' + authToken);
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Authorization', authToken)
      headers.set('Access-Control-Allow-Origin', '*');
      headers.set('Accept', 'application/json');
      requestOpt.headers = headers

      let userId = localStorage.getItem('UserID')
      let eventId = localStorage.getItem('EventId')

      this.http.get(this.APIBaseUrl + 'showAllMessages?event_id=' + eventId + '&contractor_id=' + userId, requestOpt).subscribe((response) => {
        console.log("Data", response.json());
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  getCreditCardDetailApi(creditCardDigits) {
    return new Promise((resolve, reject) => {
      let authToken = localStorage.getItem('AuthToken');
      console.log('AuthToken : ' + authToken);
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      // headers.set('Authorization', authToken)
      // headers.set('Access-Control-Allow-Origin', '*');
      // headers.set('Accept', 'application/json');
      requestOpt.headers = headers
      this.http.get(this.APIBaseUrl + 'getCreditDetails?creditcarddigits=' + creditCardDigits, requestOpt).subscribe((response) => {
        console.log("Data", response.json());
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  getApprovedReceiptList(EventId, ContractorId) {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      let AuthToken = localStorage.getItem('AuthToken')
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Authorization', AuthToken)
      // headers.set('Accept', 'application/json');
      requestOpt.headers = headers
      this.http.get(this.APIBaseUrl + 'getApprovedReceiptList?event_id=' + EventId + '&contractor_id=' + ContractorId, requestOpt).subscribe((response) => {
        console.log("Data", response.json()); // data received by server
        // response.
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  getAuditReceiptList() {
    return new Promise((resolve, reject) => {
      var requestOpt = new RequestOptions()
      let AuthToken = localStorage.getItem('AuthToken')
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Authorization', AuthToken)
      // headers.set('Accept', 'application/json');
      requestOpt.headers = headers
      let eventid = localStorage.getItem('EventId')
      let contractorid = localStorage.getItem('UserID')
      // getAuditReceiptList?event_id=&contractor_id=
      this.http.get(this.APIBaseUrl + 'getAuditReceiptList?event_id=' + eventid + '&contractor_id=' + contractorid, requestOpt).subscribe((response) => {
        console.log('getAuditReceiptList: ' + response.json())
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  postConfirmedUnreadNotifications(ID) {
    return new Promise((resolve, reject) => {
      let authToken = localStorage.getItem('AuthToken');
      console.log('AuthToken : ' + authToken);
      var requestOpt = new RequestOptions()
      var headers = new Headers()
      headers.set('Content-Type', 'application/json')
      headers.set('Authorization', authToken)
      requestOpt.headers = headers

      let userId = localStorage.getItem('UserID')
      let eventId = localStorage.getItem('EventId')
      var postData = {
        'id': ID
      }

      this.http.post(this.APIBaseUrl + 'updateIsConfirmedValue?event_id=' + eventId + '&contractor_id=' + userId, postData, requestOpt).subscribe((response) => {
        console.log("Data", response.json());
        resolve(response.json())
      }, error => {
        console.log("Error", error)
        reject(error)
      })
    })
  }

  postTaskLog(local_id, eventId, user_Id, yard, labor_code_id, ticket_id, date, log, start_time, end_time, hours, state, comments, audit_time, audit, reason) {
    let AuthToken = localStorage.getItem("AuthToken")
    return new Promise((resolve, reject) => {
      let dateForStartEndTime = date.split('-')[2] + '-' + date.split('-')[0] + '-' + date.split('-')[1]
      //START DATE TIME
      // let st_hours = (new Date(start_time)).getHours()
      // let st_minutes = (new Date(start_time)).getMinutes()
      let st_sec = (new Date()).getSeconds()

      // let st_time = (String(st_hours).length == 1 ? '0' + st_hours : '' + st_hours) + ':' + (String(st_minutes).length == 1 ? '0' + st_minutes : '' + st_minutes) + ':' + (String(st_sec).length == 1 ? '0' + st_sec : '' + st_sec)
      let start_time_date = dateForStartEndTime + ' ' + start_time + ':' + st_sec

      //END DATE TIME
      // let e_hours = (new Date(end_time)).getHours()
      // let e_minutes = (new Date(end_time)).getMinutes()
      let e_sec = (new Date()).getSeconds()

      // let e_time = (String(e_hours).length == 1 ? '0' + e_hours : '' + e_hours) + ':' + (String(e_minutes).length == 1 ? '0' + e_minutes : '' + e_minutes) + ':' + (String(e_sec).length == 1 ? '0' + e_sec : '' + e_sec)
      let e_time_date = dateForStartEndTime + ' ' + end_time + ':' + e_sec

      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', AuthToken)
      let options = new RequestOptions({ headers: headers });

      let taskinfo = {
        "local_id": local_id,
        "event_id": eventId,
        "user_id": user_Id,
        "yard": yard,
        "labor_code_id": labor_code_id,
        "ticket_id": ticket_id,
        "date": date,
        "log": log,
        "start_time": start_time_date,
        "end_time": e_time_date,
        "hours": hours,
        "state": state,
        "comments": comments,
        "audit_time": audit_time,
        "audit": audit,
        "reason": reason
      }

      console.log('Task Log Info: ' + JSON.stringify(taskinfo))

      return this.http.post(this.APIBaseUrl + "addTaskLog", JSON.stringify(taskinfo), options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  postReceiptData(local_id, eventId, date, yard, entityID, category, amount, comments, billable, checknum, audit, receiptFileNname, imageName, ccid) {
    let AuthToken = localStorage.getItem("AuthToken")
    return new Promise((resolve, reject) => {
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', AuthToken)
      let options = new RequestOptions({ headers: headers });

      let taskinfo = {
        "local_id": local_id,
        "event_id": eventId,
        "date": date,
        "yard": yard,
        "entity_id": entityID,
        "category": category,
        "amount": amount,
        "comments": comments,
        "billable": billable,
        "checknum": checknum,
        "audit": audit,
        "receipt_file_name": receiptFileNname,
        "cc_id": ccid,
        "image_name": imageName
      }
      return this.http.post(this.APIBaseUrl + "addReceiptNew", taskinfo, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  postGeoLocation(local_id, time, longitude, latitude, user_id, stage) {
    return new Promise((resolve, reject) => {
      let authToken = localStorage.getItem("AuthToken")
      var headers = new Headers();
      headers.append('Accept', 'application/json')
      headers.append('Authorization', authToken)
      let options = new RequestOptions({ headers: headers })

      var locationInfo = {
        "local_id": local_id,
        "time": time,
        "longitude": longitude,
        "latitude": latitude,
        "user_id": user_id,
        "stage": stage
      }
      this.http.post(this.APIBaseUrl + 'addGeolocation', locationInfo, options).subscribe(result => {
        console.log('GeoLocation Result: ' + JSON.stringify(result))
        resolve(result.json())
      }, error => {
        console.log('GeoLocation Error: ' + JSON.stringify(error))
        reject(error)
      })
    })
  }

  DeleteSqliteDB_Tables() {
    this.sqlite.create({
      name: 'Commander.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        //Table for storing UserInfo
        db.executeSql('DELETE FROM userinfo', [])
          .then(() => console.log('Executed SQL Delete Table UserInfo'))
          .catch(e => console.log('UserInfo: ' + e));
        //Table for storing Add Receipts form Fields
        db.executeSql('DELETE FROM receipts', [])
          .then(() => console.log('Executed SQL Delete Table Receipt'))
          .catch(e => console.log('Receipt: ' + e));
        // Table for storing Add Task Logs Form Fields
        db.executeSql('DELETE FROM tasklogs', [])
          .then(() => console.log('Executed SQL Delete Table TaskLog'))
          .catch(e => console.log('TaskLog: ' + e));
        //Table for storing Locations
        db.executeSql('DELETE FROM location', [])
          .then(() => console.log('Executed SQL Delete Table Location'))
          .catch(e => console.log('Location: ' + JSON.stringify(e)))
      })
      .catch(e => console.log('DB: ' + e));
  }
}

