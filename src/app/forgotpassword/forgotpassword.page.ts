import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { AuthServicesService } from '../providers/Auth-Services/auth-services.service';
import { NetworkProviderService } from '../providers/NetworkProvider/network-provider.service';
import { DataSevicesService } from '../providers/Data-Services/data-sevices.service'
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
  email: String
  mobno: String
  resultData: any
  mno: any

  constructor(
    private router: Router,
    private alertCtrl: AlertController,
    public forgotservice: AuthServicesService,
    private toastCtrl: ToastController,
    public loadingController: LoadingController,
    public networkProvider: NetworkProviderService,
    public dataServices: DataSevicesService
  ) { }

  ngOnInit() {
  }

  readonly() {
    return true;
  }

  resetPassword() {
    if (this.networkProvider.getNetworkStatus() == 'Online') {
      if (this.email == "" || this.email == undefined) {
        this.email = ""
        this.mobno = undefined
        this.presentAlert("Please enter badge or email")
        return
      }
      if (this.mobno == "" || this.mobno == undefined) {
        this.email = ""
        this.mobno = undefined
        this.presentAlert("Please enter mobile number")
        return
      }
      // if (this.mobno.toString().replace(/[^0-9]/g, "").length != 10) {
      //   this.email = ""
      //   this.mobno = undefined
      //   this.presentAlert("Please enter valid mobile number")
      //   return
      // }
      // if (this.mobno.toString().includes(',') || this.mobno.toString().includes(';') || this.mobno.toString().includes('*') || this.mobno.toString().includes('#') || this.mobno.toString().includes('+')||this.mobno.toString().includes('(')||this.mobno.toString().includes('/')||this.mobno.toString().includes(')')||this.mobno.toString().includes('N')||this.mobno.toString().includes('.')||this.mobno.toString().includes('-')||this.mobno.toString().includes(' ')) {
      //   this.email = ""
      //   this.mobno = undefined
      //   this.presentAlert("Please enter valid mobile number")
      //   return
      // }

      // let validmobno = this.mobno.toString().replace(/[^0-9]/g, "")
      // alert(validmobno)

      if (/^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/.test(this.mobno.toString()) == false && /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(this.mobno.toString()) == false && /^[0-9]{10}$/.test(this.mobno.toString()) == false) {
        this.email = ""
        this.mobno = undefined
        this.presentAlert("Please enter valid mobile number")
        return
      }
      // if () {
      //   this.email = ""
      //   this.mobno = undefined
      //   this.presentAlert("Please enter valid mobile number")
      //   return
      // }
      // if () {
      //   this.email = ""
      //   this.mobno = undefined
      //   this.presentAlert("Please enter valid mobile number")
      //   return
      // }


      this.presentLoading()
      this.forgotservice.getForgotPasswordData(this.email, this.mobno).then(result => {
        this.resultData = result

        console.log("Result", this.resultData)
        var status = this.resultData.status;
        this.loadingController.dismiss()
        if (status == 200) {
          console.log("Result", this.resultData)
          var data = JSON.parse(this.resultData.data)
          alert(data.message)
          this.email = ""
          this.mobno = ""
        } else {
          this.presentToast('Something went wrong.')
          this.email = ""
          this.mobno = ""
        }
      }, error => {
        console.log('Error status:-', error)
        this.loadingController.dismiss();
        if (error.status == 404) {
          this.presentToast('Something went wrong.')
          this.email = ""
          this.mobno = ""
        }
        if (error.status == 0) {
          this.presentToast('Something went wrong.')
          this.email = ""
          this.mobno = ""
        }
        if (error.status == 401) {
          // this.dataServices.DeleteSqliteDB_Tables()
          this.displayUnauthoriesdAlert();
          this.email = ""
          this.mobno = ""
        }
      })
    } else {
      alert('No internet connection.')
    }
  }

  async presentAlert(message) {
    const alert = await this.alertCtrl.create({
      header: 'Sorry',
      // subHeader: 'Please enter valid password',
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

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      spinner: null
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
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
