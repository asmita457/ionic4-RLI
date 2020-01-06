import { Component } from '@angular/core';

import { AlertController, Platform, ToastController, Events } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { HttpClientModule } from '@angular/common/http';
import { AuthServicesService } from './providers/Auth-Services/auth-services.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { DataSevicesService } from './providers/Data-Services/data-sevices.service';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Network } from '@ionic-native/network/ngx';
import { NetworkProviderService } from './providers/NetworkProvider/network-provider.service';
// import { Crashlytics } from '@ionic-native/fabric';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public appPages = [
    {
      title: 'Dashboard',
      icon: 'home'
    },
    {
      title: 'Notifications',
      icon: 'notifications-outline'
    },
    {
      title: 'About Us',
      icon: 'information-circle'
    },
    {
      title: 'Contact Us',
      icon: 'call'
    },
    {
      title: 'App Tutorial',
      icon: 'document'
    },
    {
      title: 'Change Password',
      icon: 'key'
    },
    {
      title: 'Report a bug',
      icon: 'help-circle'
    },
    {
      title: 'Personal Portal',
      icon: 'contact'
    },
    {
      title: 'Logout',
      icon: 'log-out'
    }];

  // items = []
  userName = ""
  resultData: any
  firstname: String
  backTrackingList = ['2']
  backTrackingListDB = ['2']
  isInBackground = false;
  i = 1;
  backTrackArr = [];
  difference = 900000;
  index = 1;
  prevTime = new Date().toISOString()

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private iab: InAppBrowser,
    private emailComposer: EmailComposer,
    private httpClient: HttpClientModule,
    private toastCtrl: ToastController,
    public authServicesService: AuthServicesService,
    public dataSevicesService: DataSevicesService,
    public alertController: AlertController,
    private geolocation: Geolocation,
    private androidPermissions: AndroidPermissions,
    private locationAccuracy: LocationAccuracy,
    private sqlite: SQLite,
    private network: Network,
    public networkProvider: NetworkProviderService,
    public events: Events,
    // private crashlytics: Crashlytics
  ) {
    this.userName = localStorage.getItem('FirstName');
    // console.log('UserName: ' + this.userName)
    this.initializeApp()
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
      this.createSqliteDB_Tables()
      this.callSpecificMethods()
      this.events.subscribe('callingAppComponentsMthd', () => {
        this.userName = localStorage.getItem('FirstName');
        this.callSpecificMethods()
      })
      this.events.subscribe('postGeoLocationOnLogin', () => {
        this.getGeoLocation()
        this.postGeoLocation()
      })
      this.events.subscribe('getGeoLocationForLogin', () => {
        this.getGeoLocation()
      })
      let loginSession = localStorage.getItem('login');
      if (loginSession == 'yes') {
        this.router.navigate(['/home']);
      }
      else {
        this.router.navigate(['/login']);
      }
    });
  }

  callSpecificMethods() {
    this.askForGPSAccess()
    this.checkNetworkConnectivity()
    this.getGeoLocation()
    this.getCurrentGeoLocation()
    this.callingSendLocation()
  }

  checkNetworkConnectivity() {
    this.networkProvider.initializeNetworkEvents();
    // Offline event
    this.events.subscribe('network:offline', () => {
      console.log('network:offline ==> ' + this.network.type);
      this.networkProvider.setNetworkStatus('Offline')
    });

    // Online event
    this.events.subscribe('network:online', () => {
      console.log('network:online ==> ' + this.network.type);
      this.networkProvider.setNetworkStatus('Online')
    });
  }

  createSqliteDB_Tables() {
    this.sqlite.create({
      name: 'Commander.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        //Table for storing UserInfo
        db.executeSql('CREATE TABLE IF NOT EXISTS userinfo (userID text primary key, firstname text, lastname text, username text, usertype text, email text, badge text, status text, phone text, pin text)', [])
          .then(() => console.log('Executed SQL Create Table UserInfo'))
          .catch(e => console.log('UserInfo: ' + e));
        //Table for storing Add Receipts form Fields
        db.executeSql('CREATE TABLE IF NOT EXISTS receipts(ID INTEGER PRIMARY KEY AUTOINCREMENT, userID text,  receiptID text,   eventTitle text, eventID text, workorder text, date text, amount text,   category text, categoryID text, comment text, transactionID text, auditStatus text, auditDate text, status text,  reason text, RLICardinfo text, yardID text, yardName text, image text, imageName text, server_id text )', [])
          .then(() => console.log('Executed SQL Create Table Receipt'))
          .catch(e => console.log('Receipt: ' + e));
        // Table for storing Add Task Logs Form Fields
        db.executeSql('CREATE TABLE IF NOT EXISTS tasklogs(ID INTEGER PRIMARY KEY AUTOINCREMENT, userID text, eventTitle text, eventID text, date text, LOG text, ticket text, laborCode text, laborCodeID text, startTime text, endTime text, hours text, state text, stateName text, yardID text, yardName text, comment text, transactionId text, auditStatus text, auditDate text, status text, reason text, server_id text )', [])
          .then(() => console.log('Executed SQL Create Table TaskLog'))
          .catch(e => console.log('TaskLog: ' + e));
        //Table for storing Locations
        db.executeSql('CREATE TABLE IF NOT EXISTS location(ID INTEGER PRIMARY KEY AUTOINCREMENT, userID text, latitude text, longitude text, time text, server_id text )', [])
          .then(() => console.log('Executed SQL Create Table Location'))
          .catch(e => console.log('Location: ' + JSON.stringify(e)))
      })
      .catch(e => console.log('DB: ' + e));
  }

  askForGPSAccess() {
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      if (canRequest) {
        // the accuracy option will be ignored by iOS
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(result => {
          if (result) {
            console.log('Request successful')
            this.checkPlatformPauseResume()
          }
        }, error => {
          console.log('Error requesting location permissions', error)
          alert("Location Not Turned ON")
          this.askForGPSAccess()
        }).catch(error => {
          console.log('Error in locationAccuracy request: ' + error)
        });
      }
    }).catch(error => {
      console.log('Error in locationAccuracy: ' + error)
    });
  }

  checkPlatformPauseResume() {
    this.platform.ready().then(() => {
      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
        result => console.log('Has permission?', result.hasPermission),
        err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
      );
      this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION, this.androidPermissions.PERMISSION.INTERNET]);
      this.getGeoLocation()

      this.platform.pause.subscribe(_ => {
        console.log('app pause')
        // localStorage.removeItem('backTrackingList');
        // this.backTrackingList = ['2'];
        // this.i = 1;
        this.isInBackground = true;
      })

      this.platform.resume.subscribe(_ => {
        console.log('app resume')
        this.isInBackground = false;
        this.callingSendLocation()
      })
    });
  }

  callingSendLocation() {
    if (localStorage.getItem('login') == 'yes') {
      this.backTrackArr = JSON.parse(localStorage.getItem('backTrackingList'));
      console.log('backTrack Array: ' + this.backTrackArr);
      if (this.backTrackArr != undefined) {
        this.difference = 900000;
        this.i = 1;
        this.sendLocations();
      }
    }
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
      let latitude = resp.coords.latitude
      let longitude = resp.coords.longitude
      this.networkProvider.setLatLong(latitude, longitude)
      console.log('On Login Location')
      // console.log('position LAT: ' + resp.coords.latitude)
      // console.log('position LONG: ' + resp.coords.longitude)
      // console.log('Date: ' + new Date().toISOString())
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    let watch = this.geolocation.watchPosition(options);
    watch.subscribe((data) => {
      setInterval(_ => {
        // console.log("Location data LAT: " + data.coords.latitude)
        // console.log("Location data LONG: " + data.coords.longitude)
        // console.log('data Date: ' + new Date().toISOString())
        if (this.isInBackground) {
          let backTrackArr = []
          backTrackArr = JSON.parse(localStorage.getItem('backTrackingList'));
          if (backTrackArr != null) {
            if (backTrackArr.length > 1) {
              var difference = new Date(new Date().toISOString()).getTime() - new Date(backTrackArr[backTrackArr.length - 1].split(' ')[2]).getTime();
              if (840000 < difference) {
                this.backTrackingList.push(JSON.stringify(data.coords.latitude) + " " + JSON.stringify(data.coords.longitude) + " " + new Date().toISOString())
                localStorage.setItem('backTrackingList', JSON.stringify(this.backTrackingList))
                console.log('backTrackingList parse length > 1: ' + JSON.parse(localStorage.getItem('backTrackingList')))
              }
            } else {
              this.backTrackingList.push(JSON.stringify(data.coords.latitude) + " " + JSON.stringify(data.coords.longitude) + " " + new Date().toISOString())
              localStorage.setItem('backTrackingList', JSON.stringify(this.backTrackingList))
              console.log('backTrackingList parse length < 1: ' + JSON.parse(localStorage.getItem('backTrackingList')))
            }
          } else {
            this.backTrackingList.push(JSON.stringify(data.coords.latitude) + " " + JSON.stringify(data.coords.longitude) + " " + new Date().toISOString())
            localStorage.setItem('backTrackingList', JSON.stringify(this.backTrackingList))
            console.log('backTrackingList parse null: ' + JSON.parse(localStorage.getItem('backTrackingList')))
          }
        }
      }, 840000)
    });
  }

  getCurrentGeoLocation() {
    // setInterval(_ => {
    if (localStorage.getItem('login') == 'yes') {
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
        // console.log('position LAT: ' + resp.coords.latitude)
        // console.log('position LONG: ' + resp.coords.longitude)
        // console.log('Date: ' + new Date().toISOString())
        let userID = localStorage.getItem('UserID')
        let latitude = resp.coords.latitude
        let longitude = resp.coords.longitude
        let time = new Date().toISOString()
        let server_id = 0
        this.networkProvider.setLatLong(latitude, longitude)
        setInterval(_ => {
          // let diff = new Date(time).getTime() - new Date(this.prevTime).getTime()
          // if (840000 < diff) {
          if (!this.isInBackground) {
            this.prevTime = time
            this.sqlite.create({
              name: 'Commander.db',
              location: 'default'
            }).then((db: SQLiteObject) => {
              db.executeSql('INSERT INTO location(userID, latitude, longitude, time, server_id) VALUES(?,?,?,?,?)', [userID, latitude, longitude, time, server_id]).then(res => {
                console.log('locations in db : ' + JSON.stringify(res))
              }).catch(e => console.log(e))
              this.checkLocationsInDB()
            }).catch(e => console.log(e))
          }
          // }
        }, 840000)
      }).catch((error) => {
        console.log('Error getting location', error)
      });
    }
    // }, 840000)
  }

  checkLocationsInDB() {
    this.sqlite.create({
      name: 'Commander.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('SELECT * from location where server_id=0', []).then(res => {
        console.log('locations in select db: ' + JSON.stringify(res))
        if (res.rows.length > 0) {
          for (let i = 0; i < res.rows.length; i++) {
            // console.log("Send co-ordinates here > " + res.rows.item(i).latitude + "," + res.rows.item(i).longitude + "," + res.rows.item(i).time);
            this.backTrackingListDB.push(res.rows.item(i))
          }
          this.difference = 900000
          this.sendLocationsFromDB()
        }
      }).catch(err => {
        console.log('error in select db: ' + JSON.stringify(err))
      })
    }).catch(e => console.log(e))
  }

  sendLocationsFromDB() {
    console.log('backTrackingListDB stringify: ' + JSON.stringify(this.backTrackingListDB))
    // "ID":1,"userID":"234","latitude":"18.5919722","longitude":"73.8022188","time":"2019-03-11T09:54:42.508Z","server_id":"0"
    if (840000 < this.difference) {
      if (this.backTrackingListDB.length > 1) {
        let local_id = this.backTrackingListDB[this.i]["ID"]
        let time = this.backTrackingListDB[this.i]["time"]
        let long = this.backTrackingListDB[this.i]["longitude"]
        let lat = this.backTrackingListDB[this.i]["latitude"]
        let userID = this.backTrackingListDB[this.i]["userID"]
        let server_id = this.backTrackingListDB[this.i]["server_id"]
        this.dataSevicesService.postGeoLocation(local_id, time, long, lat, userID, 'Location added after 15 minutes')
          .then(result => {
            let response: any = result
            if (response.success == true) {
              console.log('response: ' + response);
              this.sqlite.create({
                name: 'Commander.db',
                location: 'default'
              }).then((db: SQLiteObject) => {
                var updateSQL = "Update location set server_id=? where id=?"
                db.executeSql(updateSQL, [response.server_id, response.local_id]).then(update => {
                  console.log('Server ID Updated: ' + JSON.stringify(update))
                }, error => {
                  console.log('Server ID Updating error: ' + JSON.stringify(error))
                }).catch(errCatch => {
                  console.log('Error in catch updating: ' + JSON.stringify(errCatch))
                })
              }).catch(e => console.log(e))
              this.i++;
              if (this.backTrackingListDB.length > this.i) {
                this.index = this.i - 1;
                this.difference = new Date(this.backTrackingListDB[this.i]["time"]).getTime() - new Date(this.backTrackingListDB[this.index]["time"]).getTime();
                console.log('difference: ' + this.difference)
                this.sendLocationsFromDB();
              } else {
                this.sqlite.create({
                  name: 'Commander.db',
                  location: 'default'
                }).then((db: SQLiteObject) => {
                  db.executeSql("DELETE FROM location", []).then(update => {
                    console.log('DELETE: ' + JSON.stringify(update))
                  }, error => {
                    console.log('DELETE error: ' + JSON.stringify(error))
                  }).catch(errCatch => {
                    console.log('Error in catch DELETE: ' + JSON.stringify(errCatch))
                  })
                }).catch(e => console.log(e))
                this.backTrackingListDB = ['2'];
                this.i = 1;
              }
            } else {
              // window.localStorage['err'] = 'error';
              console.log('error in post location.');
              this.i = 1;
            }
          }, error => {
            console.log('Error in post location: ' + JSON.stringify(error))
          })
      }
    } else {
      this.i++;
      if (this.backTrackingListDB.length > this.i) {
        this.difference = new Date(this.backTrackingListDB[this.i]["time"]).getTime() - new Date(this.backTrackingListDB[this.index]["time"]).getTime();
        this.sendLocationsFromDB();
      } else {
        this.sqlite.create({
          name: 'Commander.db',
          location: 'default'
        }).then((db: SQLiteObject) => {
          db.executeSql("DELETE FROM location", []).then(update => {
            console.log('DELETE: ' + JSON.stringify(update))
          }, error => {
            console.log('DELETE error: ' + JSON.stringify(error))
          }).catch(errCatch => {
            console.log('Error in catch DELETE: ' + JSON.stringify(errCatch))
          })
        }).catch(e => console.log(e))
        this.backTrackingListDB = ['2'];
        this.i = 1;
      }
    }
  }

  sendLocations() {
    if (840000 < this.difference) {
      if (this.backTrackArr.length > 1) {
        this.dataSevicesService.postGeoLocation(0, this.backTrackArr[this.i].split(' ')[2], this.backTrackArr[this.i].split(' ')[1], this.backTrackArr[this.i].split(' ')[0], localStorage.getItem('UserID'), 'Location added after 15 minutes from backbround tracking')
          .then(result => {
            let response: any = result
            if (response.success == true) {
              console.log('response: ' + response);
              this.i++;
              if (this.backTrackArr.length > this.i) {
                this.index = this.i - 1;
                this.difference = new Date(this.backTrackArr[this.i].split(' ')[2]).getTime() - new Date(this.backTrackArr[this.index].split(' ')[2]).getTime();
                console.log('difference: ' + this.difference)
                this.sendLocations();
              } else {
                localStorage.removeItem('backTrackingList');
                this.backTrackingList = ['2'];
                this.i = 1;
              }
            } else {
              // window.localStorage['err'] = 'error';
              console.log('error in post location.');
              this.i = 1;
            }
          }, error => {
            console.log('Error in post location: ' + JSON.stringify(error))
          })
      }
    } else {
      this.i++;
      if (this.backTrackArr.length > this.i) {
        this.difference = new Date(this.backTrackArr[this.i].split(' ')[2]).getTime() - new Date(this.backTrackArr[this.index].split(' ')[2]).getTime();
        this.sendLocations();
      } else {
        localStorage.removeItem('backTrackingList');
        this.backTrackingList = ['2'];
        this.i = 1;
      }
    }
  }

  sideMenuClicked(page) {
    console.log()
    console.log('Page : ', page);
    if (page === 'Dashboard') {
      this.router.navigate(['/home']);
    } else if (page === 'Notifications') {
      this.router.navigate(['/notifications']);
    } else if (page === 'About Us') {
      this.router.navigate(['/aboutus']);
    } else if (page === 'Contact Us') {
      this.router.navigate(['/contactus']);
    } else if (page === 'App Tutorial') {
      this.router.navigate(['/apptutorial']);
    } else if (page === 'Change Password') {
      this.router.navigate(['/changepassword']);
    } else if (page === 'Report a bug') {
      this.emailComposer.isAvailable().then((available: boolean) => {
        if (available) {
          console.log('emailComposer available')
        }
      });
      const email = {
        to: 'app@recoverylogistics.net',
        subject: 'Feedback-Android-1.5.23',
        body: 'Please Give Feedback With Your Name And Mobile Number',
        isHtml: true
      }
      this.emailComposer.open(email);
    } else if (page === 'Personal Portal') {
      const browser = this.iab.create('http://rlicommander.com/contractors/', '_system');
    } else if (page === 'Logout') {
      const Login = localStorage.getItem('login');
      const userid = localStorage.getItem('UserID')
      // const AuthToken = localStorage.getItem('AuthToken')
      // console.log("USERID", userid)
      if (this.networkProvider.getNetworkStatus() == 'Online') {
        if (Login === 'yes') {
          this.authServicesService.getlogoutData(userid).then((result) => {
            // console.log(result)
            this.resultData = result
            if (this.resultData.success == true) {
              localStorage.removeItem('login')
              localStorage.removeItem('UserID')
              localStorage.removeItem('AuthToken')
              this.dataSevicesService.DeleteSqliteDB_Tables()
              this.router.navigate(['/login']);
            } else {
              this.presentLogoutFailedToast()
            }
          }, error => {
            if (error.url == null) {
              alert('No internet connection.')
            }
            if (error.status == 401) {
              this.displayUnauthoriesdAlert();
            }
          })
        }
      }
      else {
        alert('No internet connection.')
      }
    }
  }

  postGeoLocation() {
    let latLong = this.networkProvider.getLatLong()
    this.dataSevicesService.postGeoLocation(0, new Date().toISOString(), latLong.split(',')[0], latLong.split(',')[1], localStorage.getItem('UserID'), 'Location added on login')
      .then(result => {
        console.log('Location post successfully on login: ' + JSON.stringify(result))
      }, error => {
        console.log('Error in post location: ' + JSON.stringify(error))
      })
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

  async presentLogoutFailedToast() {
    // this.toastMsgs.push(msg);
    let toast = await this.toastCtrl.create({
      message: 'Logout Failed',
      duration: 3000,
      position: 'bottom'
    });

    toast.present();
  }

}
