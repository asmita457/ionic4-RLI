import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServicesService } from '../providers/Auth-Services/auth-services.service';
import { ToastController, AlertController, LoadingController } from '@ionic/angular';
import { NetworkProviderService } from '../providers/NetworkProvider/network-provider.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataSevicesService } from '../providers/Data-Services/data-sevices.service'
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.page.html',
  styleUrls: ['./changepassword.page.scss'],
})
export class ChangepasswordPage implements OnInit {
  observable: Observable<any>;
  email: string
  OldPassword: string
  NewPassword: string
  resultData: any
  oldPassword: any
  newPassword: any

  constructor(
    private router: Router,
    public authServicesService: AuthServicesService,
    private toastCtrl: ToastController,
    public loadingController: LoadingController,
    private alertCtrl: AlertController,
    public networkProvider: NetworkProviderService,
    private http: HttpClient,
    public dataServices: DataSevicesService
  ) {
  }

  ngOnInit() {
    this.email = localStorage.getItem("Badge")
  }

  readonly() {
    return true;
  }

  changePassword() {
    if (this.networkProvider.getNetworkStatus() == 'Online') {
      if (this.email == "" || this.email == undefined || this.email == null) {
        this.presentAlert("Sorry", "Please enter badge or email")
        return
      }
      if (this.OldPassword == undefined || this.OldPassword == "") {
        this.presentAlert("Sorry", "Please enter old password")
        return
      }
      if (this.NewPassword == undefined || this.NewPassword == "") {
        this.presentAlert("Sorry", "Please enter new password")
        return
      }
      if (this.OldPassword.length < 5 || this.NewPassword.length < 5) {
        console.log('OldPassword length: ' + this.OldPassword.length + '\nNewPassword length: ' + this.NewPassword.length)
        this.presentAlert('Sorry', 'Please enter valid password').then(_ => {
          this.presentToast('Password length should be greater than 5 characters')
        });
        return
      }

      let badge = localStorage.getItem('Badge')
      this.observable = this.callChangePasswordAPI(badge, this.OldPassword, this.NewPassword);
      this.observable.subscribe((result) => {
        console.log('password data: ', JSON.stringify(result));
        if (result.status == 200) {
          this.loadingController.dismiss()
          if (result.data != "") {
            alert(JSON.parse(result.data).message)
            this.NewPassword = ""
            this.OldPassword = ""
          } else {
            this.loadingController.dismiss()
            this.presentToast('Something went wrong')
          }
        } else {
          this.loadingController.dismiss()
          this.presentToast('Something went wrong')
        }
      }, error => {
        console.log('error in password: ' + JSON.stringify(error))
        this.loadingController.dismiss()
        if (error == 'Response with status: 0 for URL: null') {
          alert('No internet connection.')
        }
        if (error.status == 401) {
          // this.dataServices.DeleteSqliteDB_Tables()
          this.displayUnauthoriesdAlert();
        }
        this.NewPassword = ""
        this.OldPassword = ""
      })
    } else {
      alert('No internet connection.')
    }
  }

  callChangePasswordAPI(badge: string, oldPassword: string, newPassword: string) {
    this.presentLoading()
    let Authtoken = localStorage.getItem('AuthToken')
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', Authtoken)
    return this.http.get('http://rlicommander.com/live/common/api/user_fxs.php?format=json&method=change_password&k=83&badge=' + badge + '&old_password=' + oldPassword + '&new_password=' + newPassword, { headers: headers });
  }

  async presentAlert(title, message) {
    const alert = await this.alertCtrl.create({
      header: title,
      // subHeader: 'Please enter valid password',
      message: message,
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
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async presentToast(message) {
    // this.toastMsgs.push(msg);
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  async displayUnauthoriesdAlert() {
    const alert = await this.alertCtrl.create({
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
}

