import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { DataSevicesService } from '../providers/Data-Services/data-sevices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  isSelected: any = 'Read'
  resultData: any
  readNotificationsList = []
  unreadNotificationsList = []
  noDocsNotifications = true

  constructor(
    public loadingController: LoadingController,
    public dataServices: DataSevicesService,
    public alertController: AlertController,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  tabChanged(data: any) {
    if (data.detail.value == 'Unread') {
      this.isSelected = 'Unread';
      this.getUnreadNotifications();
    } else {
      this.isSelected = 'Read';
      this.getReadNotifications();
    }
  }

  getReadNotifications() {
    this.presentLoading();
    this.dataServices.getReadNotificationsApi().then((result) => {
      this.resultData = result
      console.log('readNotifications : ' + this.resultData)
      this.readNotificationsList = []
      this.readNotificationsList = this.resultData
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
  }

  getUnreadNotifications() {
    this.presentLoading();
    this.dataServices.getUnreadNotificationsApi().then((result) => {
      this.resultData = result
      console.log('unreadNotification : ' + this.resultData)
      this.unreadNotificationsList = []
      this.unreadNotificationsList = this.resultData
      this.noDocsNotifications = false
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
  }

  onClickConfirm(notification) {
    console.log('notification: ' + JSON.stringify(notification) + '\nannouncement_id: ' + notification.announcement_id)
    this.postConfirmedUnreadNotifications(notification.announcement_id)
  }

  postConfirmedUnreadNotifications(notificationID) {
    this.dataServices.postConfirmedUnreadNotifications(notificationID).then(response => {
      console.log('response: ' + response)
      this.getUnreadNotifications()
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
        text: 'ok',
        handler: () => {
          this.router.navigate(['/login']);
        }
      }]
    });

    await alert.present();
  }

}
