import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController, LoadingController, MenuController } from '@ionic/angular';
import { DataSevicesService } from '../providers/Data-Services/data-sevices.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { Platform } from '@ionic/angular';
import { Device } from '@ionic-native/device/ngx';
import { NetworkProviderService } from '../providers/NetworkProvider/network-provider.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // userId = localStorage.getItem('UserID');
  eventName: string
  yardName: string
  status: string
  resultData: any
  activeshow: any;
  deActiveshow: any;
  yardArray: any
  yardIndex: any
  platformName: any

  constructor(
    private router: Router,
    public navCtrl: NavController,
    public alertController: AlertController,
    public dataServices: DataSevicesService,
    public loadingController: LoadingController,
    private iab: InAppBrowser,
    private sqlite: SQLite,
    private appVersion: AppVersion,
    public platform: Platform,
    private device: Device,
    public networkProvider: NetworkProviderService,
    public menuCtrl: MenuController,
  ) {

    // this.appVersion.getAppName();
    // this.appVersion.getPackageName();
    // this.appVersion.getVersionCode();
    // this.appVersion.getVersionNumber();
    // console.log('package Name : ' + this.appVersion.getAppName())
    // console.log('appversion Name : ' + this.appVersion.getPackageName())
    // console.log('getVersionCode Name : ' + this.appVersion.getVersionCode())
    // console.log('getVersionNumber Name : ' + this.appVersion.getVersionNumber())

    if (this.platform.is('android')) {
      this.platformName = "Android";
      console.log('I am an android device!: ' + this.platformName);
    }

    console.log('Device version is: ' + JSON.stringify(this.device.version));
    localStorage.setItem('DeviceVersion', JSON.stringify(this.device.version))
    // this.Sqlite();
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
    if (localStorage.getItem('login') == 'yes') {
      this.getActiveEvent();
    }
    console.log('DATA STRUCTURE: ' + '0, ' + new Date().toISOString() + ', ' + this.networkProvider.getLatLong() + ', ' + localStorage.getItem('UserID'))
  }

  getActiveEvent() {
    // let that = this;
    if (this.networkProvider.getNetworkStatus() == 'Online') {
      this.presentLoading()
      this.dataServices.getActiveEventsApi(localStorage.getItem('UserID')).then((result) => {
        console.log(localStorage.getItem('UserID'))
        console.log(result)
        this.resultData = result
        if (this.resultData.length != 0) {
          let oldEventName = localStorage.getItem('EventName')
          if (oldEventName != null || oldEventName != undefined) {
            let newEventName = this.resultData[0].event_name
            this.loadingController.dismiss()
            if (oldEventName != newEventName) {
              localStorage.setItem('EventName', this.resultData[0].event_name);
              console.log('EventName' + this.resultData[0].event_name)
              // this.dataServices.DeleteSqliteDB_Tables()
              this.eventNotMatchAlert();
              return
            }
          }

          localStorage.setItem('EventName', this.resultData[0].event_name);
          localStorage.setItem('EventId', this.resultData[0].event_id)
          localStorage.setItem('YardId', this.resultData[0].yard_id)
          localStorage.setItem('YardName', this.resultData[0].yard_name)
          localStorage.setItem('ActiveEventStatus', this.resultData[0].status)

          this.eventName = this.resultData[0].event_name;
          this.yardName = this.resultData[0].yard_name;
          this.status = this.resultData[0].status;
          this.yardArray = this.resultData[0].yardArray;

          localStorage.setItem('YardArray', JSON.stringify(this.yardArray))
          console.log('yard Array : ' + JSON.stringify(this.yardArray));
          // alert('Device Version : ' + JSON.stringify(this.device.version) + 'Platform Name :' + this.platformName)

          if (this.status == 'active') {
            this.activeshow = true;
            this.deActiveshow = false;
          }
          else {
            this.activeshow = false;
            this.deActiveshow = true;
            this.eventNotActiveAlert()
          }
          this.loadingController.dismiss();
        } else {
          this.activeshow = false;
          this.deActiveshow = true;
          this.loadingController.dismiss();
          this.eventNotActiveAlert()
        }
      }, error => {
        this.loadingController.dismiss();
        console.log('Internet Connection:-', error)
        // if (error == 'Response with status: 0 for URL: null') {
          if (error.url == null) {
          this.eventName = localStorage.getItem('EventName')
          this.yardName = localStorage.getItem('YardName')
          this.status = localStorage.getItem('ActiveEventStatus')
          this.yardArray = localStorage.getItem('YardArray')
          // this.loadingController.dismiss();
          if (this.status == 'active') {
            this.activeshow = true;
            this.deActiveshow = false;
          }
          else {
            this.activeshow = false;
            this.deActiveshow = true;
            // this.eventNotActiveAlert()
          }
          alert('No internet connection.')
        }
        if (error.status == 401) {
          // this.dataServices.DeleteSqliteDB_Tables()
          this.displayUnauthoriesdAlert();
        }
      })
    } else {
      this.eventName = localStorage.getItem('EventName')
      this.yardName = localStorage.getItem('YardName')
      this.status = localStorage.getItem('ActiveEventStatus')
      this.yardArray = localStorage.getItem('YardArray')
      this.loadingController.dismiss();
      if (this.status == 'active') {
        this.activeshow = true;
        this.deActiveshow = false;
      }
      else {
        this.activeshow = false;
        this.deActiveshow = true;
        // this.eventNotActiveAlert()
      }
      alert('No internet connection.')
    }
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      spinner: null
    });
    setTimeout(() => {
      loading.dismiss();
      }, 2000);
    await loading.present();
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

  async eventNotMatchAlert() {
    const alert = await this.alertController.create({
      header: 'Sorry',
      subHeader: 'Your Event Has Been Changed. Session Out!',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.router.navigate(['/login']);
        }
      }]
    });
    await alert.present();
  }

  async eventNotActiveAlert() {
    const actionSheet = await this.alertController.create({
      message: 'You are not currently active in any events and therefore do not have any access to app functions. If you need to check balances, please log in to your "Personal Portal"',
      buttons: [{
        text: 'Cancel'
      }, {
        text: 'Personal Portal',
        handler: () => {
          const browser = this.iab.create('http://rlicommander.com/contractors/', '_system');
        }
      }]
    });
    await actionSheet.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: '',
      subHeader: '',
      message: 'This app allows you to clock in and out, enter receipts, enter task logs, receive work orders, view your portal and chat with RLI.  Note that when the App refers to the “Event”, it means a particular client during the deployment. One deployment may have multiple “Events” if there are multiple clients.',
      buttons: ['OK']
    });
    await alert.present();
  }

  receipts() {
    this.router.navigate(['/receipts']);
  }

  tasklogs() {
    this.router.navigate(['/tasklogslist']);
  }
}
