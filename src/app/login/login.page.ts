import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, PopoverController, AlertController, ToastController, LoadingController, MenuController, Events } from '@ionic/angular';
import { ReceiptsPage } from '../receipts/receipts.page';
import { Md5 } from "md5-typescript";
import { AuthServicesService } from '../providers/Auth-Services/auth-services.service';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { NetworkProviderService } from '../providers/NetworkProvider/network-provider.service';
import { DataSevicesService } from '../providers/Data-Services/data-sevices.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';

// import { AuthServiceService } from '../providers/Auth-Services/auth-service.service';

// import { PopoverComponent } from '../../component/popover/popover.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  password: string
  email: string
  resultData: any
  // locationOnLogin = false

  constructor(
    private router: Router,
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    public popoverController: PopoverController,
    public loadingController: LoadingController,
    public loginservice: AuthServicesService,
    private sqlite: SQLite,
    public menuCtrl: MenuController,
    public events: Events,
    public networkProvider: NetworkProviderService,
    public dataServices: DataSevicesService,
    private geolocation: Geolocation,
    public dataSevicesService: DataSevicesService,
  ) {
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    // this.locationOnLogin = false
    this.menuCtrl.enable(false);
    setTimeout(_ => {
      console.log('getGeoLocationForLogin called')
      this.events.publish('getGeoLocationForLogin')
    }, 5000)
  }

  submitBtnClicked() {
    console.log("Email:", this.email)
    console.log("Password:", this.password)
    this.events.publish('getGeoLocationForLogin')
    if (this.email == "" || this.email == undefined) {
      this.presentAlert('Sorry', 'Please enter badge or email');
      return
    }
    if (this.password == "" || this.password == undefined) {
      this.presentAlert('Sorry', 'Please enter password');
      return
    }
    if (this.password.length < 5) {
      console.log('password length : ' + this.password.length)
      this.presentAlert('Sorry', 'Please enter valid password');
      return
    }
    this.sqlite.create({
      name: 'Commander.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('SELECT badge FROM userinfo', [])
        .then(res => {
          // console.log("USERINFO BADGE:-", res.rows.item(0).badge)
          // this.previousBadgeAfterUnauthorised = res.rows.item(0).badge
          if (res.rows.length != 0) {
            if (this.email == res.rows.item(0).badge) {
              if (this.networkProvider.getNetworkStatus() == 'Online') {
                this.presentLoading()
                this.loginservice.getLoginData(this.email, Md5.init(this.password)).then((result) => {
                  console.log(result)
                  this.resultData = result
                  if (this.resultData.success) {
                    var user_id = this.resultData.user_id;
                    var firstname = this.resultData.firstname;
                    var lastname = this.resultData.lastname;
                    var username = this.resultData.username;
                    var usertype = this.resultData.usertype;
                    var email = this.resultData.email;
                    var badge = this.resultData.badge;
                    var status = this.resultData.status;
                    var phone = this.resultData.phone;
                    var pin = this.resultData.pin;
                    var authToken = this.resultData.token;
                    localStorage.setItem('login', 'yes');
                    localStorage.setItem('UserID', user_id)
                    localStorage.setItem('AuthToken', authToken)
                    localStorage.setItem('Badge', badge)
                    localStorage.setItem('FirstName', firstname)
                    localStorage.setItem('LastName', lastname)
                    // this.sqlite.create({
                    //   name: 'Commander.db',
                    //   location: 'default'
                    // }).then((db: SQLiteObject) => {
                    //   db.executeSql('INSERT INTO userinfo(userID, firstname, lastname, username, usertype, email, badge, status, phone, pin) VALUES(?,?,?,?,?,?,?,?,?,?)', [user_id, firstname, lastname, username, usertype, email, badge, status, phone, pin]).then(res => {
                    //     console.log('userinfo in db: ' + JSON.stringify(res))
                    //   }).catch(e => console.log(e))
                    // }).catch(e => console.log(e))
                    this.email = ""
                    this.password = ""
                    this.events.publish('callingAppComponentsMthd')
                    this.events.publish('postGeoLocationOnLogin')
                    console.log('Authtoken' + authToken);
                    this.loadingController.dismiss();
                    this.router.navigate(['/home']);
                  } else {
                    this.loadingController.dismiss();
                    this.presentToast('wrong credentials!')
                  }
                }, error => {
                  if (error.url == null) {
                    alert('No internet connection.')
                    this.email = ""
                    this.password = ""
                    console.log('Error in login: ' + JSON.stringify(error))
                    this.loadingController.dismiss();
                    this.presentToast('Login Failed')
                  }
                })
              } else {
                this.loadingController.dismiss();
                this.email = ""
                this.password = ""
                alert('No internet connection.')
              }
            } else {
              this.dataServices.DeleteSqliteDB_Tables()
              if (this.networkProvider.getNetworkStatus() == 'Online') {
                this.presentLoading()
                this.loginservice.getLoginData(this.email, Md5.init(this.password)).then((result) => {
                  console.log(result)
                  this.resultData = result
                  if (this.resultData.success) {
                    var user_id = this.resultData.user_id;
                    var firstname = this.resultData.firstname;
                    var lastname = this.resultData.lastname;
                    var username = this.resultData.username;
                    var usertype = this.resultData.usertype;
                    var email = this.resultData.email;
                    var badge = this.resultData.badge;
                    var status = this.resultData.status;
                    var phone = this.resultData.phone;
                    var pin = this.resultData.pin;
                    var authToken = this.resultData.token;
                    localStorage.setItem('login', 'yes');
                    localStorage.setItem('UserID', user_id)
                    localStorage.setItem('AuthToken', authToken)
                    localStorage.setItem('Badge', badge)
                    localStorage.setItem('FirstName', firstname)
                    localStorage.setItem('LastName', lastname)
                    this.sqlite.create({
                      name: 'Commander.db',
                      location: 'default'
                    }).then((db: SQLiteObject) => {
                      db.executeSql('INSERT INTO userinfo(userID, firstname, lastname, username, usertype, email, badge, status, phone, pin) VALUES(?,?,?,?,?,?,?,?,?,?)', [user_id, firstname, lastname, username, usertype, email, badge, status, phone, pin]).then(res => {
                        console.log('userinfo in db: ' + JSON.stringify(res))
                      }).catch(e => console.log(e))
                    }).catch(e => console.log(e))
                    this.email = ""
                    this.password = ""
                    this.events.publish('callingAppComponentsMthd')
                    this.events.publish('postGeoLocationOnLogin')
                    console.log('Authtoken' + authToken);
                    this.loadingController.dismiss();
                    this.router.navigate(['/home']);
                  } else {
                    this.loadingController.dismiss();
                    this.presentToast('wrong credentials!')
                  }
                }, error => {
                  if (error.url == null) {
                    alert('No internet connection.')
                    this.email = ""
                    this.password = ""
                    console.log('Error in login: ' + JSON.stringify(error))
                    this.loadingController.dismiss();
                    this.presentToast('Login Failed')
                  }
                })
              } else {
                this.loadingController.dismiss();
                this.email = ""
                this.password = ""
                alert('No internet connection.')
              }
            }
          } else {
            if (this.networkProvider.getNetworkStatus() == 'Online') {
              this.presentLoading()
              this.loginservice.getLoginData(this.email, Md5.init(this.password)).then((result) => {
                console.log(result)
                this.resultData = result
                if (this.resultData.success) {
                  var user_id = this.resultData.user_id;
                  var firstname = this.resultData.firstname;
                  var lastname = this.resultData.lastname;
                  var username = this.resultData.username;
                  var usertype = this.resultData.usertype;
                  var email = this.resultData.email;
                  var badge = this.resultData.badge;
                  var status = this.resultData.status;
                  var phone = this.resultData.phone;
                  var pin = this.resultData.pin;
                  var authToken = this.resultData.token;
                  localStorage.setItem('login', 'yes');
                  localStorage.setItem('UserID', user_id)
                  localStorage.setItem('AuthToken', authToken)
                  localStorage.setItem('Badge', badge)
                  localStorage.setItem('FirstName', firstname)
                  localStorage.setItem('LastName', lastname)
                  this.sqlite.create({
                    name: 'Commander.db',
                    location: 'default'
                  }).then((db: SQLiteObject) => {
                    db.executeSql('INSERT INTO userinfo(userID, firstname, lastname, username, usertype, email, badge, status, phone, pin) VALUES(?,?,?,?,?,?,?,?,?,?)', [user_id, firstname, lastname, username, usertype, email, badge, status, phone, pin]).then(res => {
                      console.log('userinfo in db: ' + JSON.stringify(res))
                    }).catch(e => console.log(e))
                  }).catch(e => console.log(e))
                  this.email = ""
                  this.password = ""
                  this.events.publish('callingAppComponentsMthd')
                  this.events.publish('postGeoLocationOnLogin')
                  console.log('Authtoken' + authToken);
                  this.loadingController.dismiss();
                  this.router.navigate(['/home']);
                } else {
                  this.loadingController.dismiss();
                  this.presentToast('wrong credentials!')
                }
              }, error => {
                if (error.url == null) {
                  alert('No internet connection.')
                  this.email = ""
                  this.password = ""
                  console.log('Error in login: ' + JSON.stringify(error))
                  this.loadingController.dismiss();
                  this.presentToast('Login Failed')
                }
              })
            } else {
              this.loadingController.dismiss();
              this.email = ""
              this.password = ""
              alert('No internet connection.')
            }
          }

        }).catch(e => console.log(e));
    }).catch(e => console.log(e));
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
    console.log('Loading dismissed!' + role + ' Data: ' + data);
  }

  async presentAlert(title: string, message: string) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentToast(message: string) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  forgetpassord() {
    console.log('forgot password');
    // this.router.navigate(['forgetpassword']);
    this.router.navigate(['/forgotpassword']);
  }
}
