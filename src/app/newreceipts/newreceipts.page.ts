import { Component, OnInit, ViewChild } from '@angular/core';
import { ActionSheetController, AlertController, LoadingController, IonDatetime } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { strings } from '@angular-devkit/core';
import { DataSevicesService } from '../providers/Data-Services/data-sevices.service';
import { Router } from '@angular/router';
import { NetworkProviderService } from '../providers/NetworkProvider/network-provider.service';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-newreceipts',
  templateUrl: './newreceipts.page.html',
  styleUrls: ['./newreceipts.page.scss'],

})
export class NewreceiptsPage implements OnInit {

  eventArray: any = []
  @ViewChild('myPicker') startTime: IonDatetime;
  yardReceiptArray: any = ['Apex-IT', 'RLI 2019 Credit Cards', 'RLI 2019 Cards', 'RLI 2019 Credit Cards', 'RLI 2019', 'RLI 2019 Credit Cards', 'RLI 2019 Credit Cards', 'RLI 2019 Credit Cards', 'RLI 2019 Credit Cards', 'RLI 2019 Credit Cards', 'RLI 2019 Credit Cards', 'RLI 2019 Credit Cards', 'RLI 2019 Credit Cards', 'RLI 2019 Credit Cards'];
  categoryKeys: any = [0, 2, 3, 5, 7, 'HQ9', 'HQ5', 'HQ4', 'HQ7', 'RS2', 'HQ8', 'HQ1', 'HQ11', 'ADM1', 'WVAH1', 'HQ3', 'HQ6', 'HQ2', 'HQ10']
  categoryValues: any = ['-- Select Expense Type --', 'Fuel for Generator', 'Food', 'Airline', 'Hotels', 'Dues/Subscriptions', 'Equipment Rental', 'Equipment Repair/Maintenance', 'Freight - Postage', 'Fuel for Truck', 'IT Equipment/Supplies', 'Job Materials', 'Miscellaneous', 'Office Supplies', 'Tolls - Travel Fees', 'Truck Repair/Maintenance', 'Vehicle Rental', 'Warehouse Supplies', 'Water - Ice']
  responseData: any
  eventPlaceholder: any
  yardPlaceholder: any
  yardArray: any
  yardarrayParse: any
  categoryPlaceholder: any
  activeEventName: any
  private options: ImagePickerOptions;
  private base64Image: string;
  show = false;
  creditCardNumber: string = ""
  yardName: any
  Yard: any
  Yard_Id: any
  YardNamearr: any = []
  eventname: any
  selectedIndex: any
  myDate: any
  image: any
  myTime: any
  selectedcategoryIndex = 0
  categoryIndex: any
  categoryInitial: any
  amount: any
  comment: any
  currentdate: any
  creditIdLength: any
  dateformat: any
  receiptInfo = { eventTitle: "", workorder: "", date: "", category: "", amount: "", comment: "", image: "", categoryID: "", eventID: "", RLIcard: "", yardTitle: "", yardID: "", credit_id: "" };
  receiptsInDB = []
  i = 0
  photos: any
  formattedDate: any

  locationOnAddReceipt = true
  geoCounter = 0
  receiptGeoLocation = []

  constructor(
    public alertController: AlertController,
    public actionSheetController: ActionSheetController,
    private imagePicker: ImagePicker,
    private camera: Camera,
    private router: Router,
    private dataServices: DataSevicesService,
    public loadingController: LoadingController,
    public networkProvider: NetworkProviderService,
    private transfer: FileTransfer,
    private file: File,
    private sqlite: SQLite,
    private geolocation: Geolocation,
  ) {
    this.getReceiptArray();
    this.receiptInfo.category = "-- Select Expense Type --"
    this.receiptInfo.amount = this.amount
    this.currentdate = new Date().toISOString();
    console.log('date : ' + this.myDate)
    this.getCategories();
    this.dateformat = new Date().toLocaleDateString().split("/")
    this.receiptInfo.date = this.dateformat[0] + "-" + this.dateformat[1] + "-" + this.dateformat[2]
    console.log('current date: ' + this.receiptInfo.date)
  }

  ngOnInit() { }

  getReceiptArray() {
    //get Event array from dashboard
    this.activeEventName = localStorage.getItem('EventName');
    this.eventArray = [this.activeEventName];
    this.receiptInfo.yardTitle = localStorage.getItem('YardName');
    this.receiptInfo.yardID = localStorage.getItem('YardId')
    this.yardArray = JSON.parse(localStorage.getItem('YardArray'));
    console.log('Size : ' + this.yardArray.length)
    for (let i = 0; i <= this.yardArray.length - 1; i++) {
      console.log("IN FOR LOOP", this.yardArray[i].name)
      this.YardNamearr.push(this.yardArray[i].name)
    }
    for (let j = 0; j <= this.yardArray.length - 1; j++) {
      if (this.YardNamearr[j] == localStorage.getItem("YardName")) {
        this.Yard = this.YardNamearr[j]
        this.Yard_Id = this.yardArray[j].mst_yard_id
        this.selectedIndex = j
      }
    }
    // for (let i = 0; this.yardArray.length > i; i++) {
    //   console.log('print : ' + JSON.stringify(this.yardArray[0]))
    //   if (this.yardArray[i].name == this.receiptInfo.yardTitle) {
    //     this.Yard = this.yardArray[i].name
    //     this.Yard_Id = this.yardArray[i].mst_yard_id
    //     console.log('Yard: ' + this.Yard + ' Yard_id: ' + this.Yard_Id)
    //   }
    // }

    //placeholder names
    this.eventPlaceholder = this.eventArray[0]
    this.receiptInfo.eventTitle = this.eventArray[0]
    this.yardPlaceholder = this.receiptInfo.yardTitle
  }

  async validationAlert(message: string) {
    const alert = await this.alertController.create({
      header: '',
      subHeader: '',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: '',
      subHeader: '',
      message: 'Add receipts immediately after the purchase.  Receipts that are not for fuel or food must have an explanation in the comment section, including who authorized the purchase or they will be declined.  The credit card section is only for those who have a credit card issued by RLI.',
      buttons: ['OK']
    });
    await alert.present();
  }

  passdate(data: any) {
    console.log('Selected date', data);
    this.myTime = data;
  }

  onEventSelect(item: any) {
    console.log('onEventSelect: ' + item);
    this.receiptInfo.eventTitle = item.detail.value;
    console.log('this.receiptInfo.eventTitle : ' + this.receiptInfo.eventTitle);
  }

  onCategorySelect(item: any, i: any) {
    console.log('onCategorySelect: ' + item.detail.value + '\ni: ' + i);
    this.receiptInfo.category = item.detail.value;
    this.receiptInfo.categoryID = this.categoryKeys[this.categoryValues.indexOf(this.receiptInfo.category)]
    console.log('categories : ' + this.receiptInfo.category + ' ' + this.receiptInfo.categoryID);
  }

  onYardSelect(item: any) {
    this.receiptInfo.yardTitle = item.detail.value;
    console.log('yardTitle  : ' + this.receiptInfo.yardTitle);
    // for (let i = 0; this.yardArray.length > i; i++) {
    //   if (this.yardArray[i].name == this.receiptInfo.yardTitle) {
    //     this.receiptInfo.yardID = this.yardArray[i].mst_yard_id
    //   }
    // }
    for (let i = 0; i < this.yardArray.length; i++) {
      if (this.yardArray[i].name == this.receiptInfo.yardTitle) {
        this.receiptInfo.yardID = this.yardArray[i].mst_yard_id
        console.log('YardID: ' + this.receiptInfo.yardID + ' Name:' + this.receiptInfo.yardTitle)
      }
    }
  }

  getCategories() {
    if (this.networkProvider.getNetworkStatus() == 'Online') {

      this.dataServices.getCategories().then((result) => {
        this.responseData = result
        if (this.responseData.status == 200) {
          let categoryArray = JSON.parse(this.responseData.data)
          this.categoryKeys = []
          this.categoryValues = []
          this.categoryKeys = Object.keys(categoryArray)
          this.categoryValues = Object.values(categoryArray)
          // this.categoryPlaceholder = this.categoryValues[0]
          // this.categoryInitial = this.categoryArray[0]
        }
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
      // this.categoryPlaceholder = this.categoryValues[0]
      // alert('No internet connection.')
    }
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

  async showCreditCardFailedMsg() {
    const alert = await this.alertController.create({
      header: '',
      subHeader: '',
      message: 'The last four digits you entered do not match any credit card in the system. Please contact RLI Admin regarding this problem.',
      buttons: ['OK']
    });
    await alert.present();
  }

  takePhoto(sourceType: number) {
    const options: CameraOptions = {
      quality: 20,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: sourceType,
    };
    this.camera.getPicture(options).then((imageData) => {
      const base64Image = 'data:image/jpeg;base64,' + imageData;
      this.receiptInfo.image = imageData
      this.photos = base64Image
    }, (err) => {
      console.log('Error: ' + err)
      // alert('Error in getting image.')
    });
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Choose Your Action',
      buttons: [{
        text: 'Camera',
        handler: () => {
          this.takePhoto(1);
        }
      }, {
        text: 'Gallery',
        handler: () => {
          this.takePhoto(0);
        }
      }, {
        text: 'Cancel',
        role: 'destructive',
        // role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  ngIfCtrl() {
    this.show = true;
  }

  iconOpenCalendar() {
    this.startTime.open();
  }

  hideContact() {
    this.show = false;
  }

  validateReceiptForm() {
    this.receiptInfo.eventID = localStorage.getItem('EventId')
    this.receiptInfo.RLIcard = this.creditCardNumber
    this.receiptInfo.date = this.currentdate.split('T')[0].split('-')[1] + '-' + this.currentdate.split('T')[0].split('-')[2] + '-' + this.currentdate.split('T')[0].split('-')[0]
    this.receiptInfo.amount = this.amount
    this.receiptInfo.comment = this.comment

    console.log('receiptInfo b4 validation: ' + JSON.stringify(this.receiptInfo))

    if (this.receiptInfo.eventTitle == "") {
      this.receiptInfo.eventTitle = this.eventArray[0]
      // return
    }
    if (this.receiptInfo.eventTitle == "" || this.receiptInfo.eventTitle == undefined || this.receiptInfo.eventTitle == null) {
      this.validationAlert("Please Select Event");
      return
    }
    if (this.receiptInfo.yardID == "" || this.receiptInfo.yardID == undefined || this.receiptInfo.yardID == null) {
      this.validationAlert("Please Select Yard");
      return
    }
    if (this.show) {
      if (this.receiptInfo.RLIcard == "" || this.receiptInfo.RLIcard == undefined || this.receiptInfo.RLIcard == null) {
        this.validationAlert("Please Enter Valid Card Number");
        return
      }
      console.log('creditIdNumberLength : ' + this.creditCardNumber.toString().length)
      if (this.creditCardNumber.toString().length < 4 || this.creditCardNumber.toString().length > 4) {
        this.validationAlert("Please Enter Valid Card Number");
        return
      }
    }
    if (this.receiptInfo.date == "" || this.receiptInfo.date == undefined || this.receiptInfo.date == null) {
      this.validationAlert("Please Select Date");
      return
    }
    if (new Date() < new Date(this.receiptInfo.date)) {
      this.validationAlert("You Cannot Select Future Date For Receipt");
      return
    }
    if (new Date() < new Date(this.receiptInfo.date)) {
      this.validationAlert("You Cannot Select Future Date For Receipt");
      return
    }
    if (this.receiptInfo.category == "-- Select Expense Type --" || this.receiptInfo.category == "" || this.receiptInfo.category == undefined || this.receiptInfo.category == null) {
      this.validationAlert("Please Select Category");
      return;
    }
    if (this.receiptInfo.amount == "" || this.receiptInfo.amount == null || this.receiptInfo.amount == undefined) {
      this.validationAlert('Please Enter Amount');
      return;
    }

    if (this.receiptInfo.image == undefined || this.receiptInfo.image == "" || this.receiptInfo.image == null) {
      this.validationAlert('Please Upload Just One Image');
      return
    }
    this.submitReceiptsDataAlert('Do You Want To Submit Your Receipt?')
  }

  async submitReceiptsDataAlert(message) {
    const alert = await this.alertController.create({
      header: '',
      message: message,
      buttons: [{
        text: 'YES',
        handler: () => {
          alert.dismiss();
          if (this.show) {
            this.presentLoading()
            this.getCreditCardDetail()
          } else {
            this.presentLoading()
            this.submitReceiptData()
          }
        }
      }, {
        text: 'NO',
        handler: () => {
          alert.dismiss();
        }
      }]
    });
    await alert.present();
  }

  getCreditCardDetail() {
    if (this.networkProvider.getNetworkStatus() == 'Online') {
      this.dataServices.getCreditCardDetailApi(this.receiptInfo.RLIcard).then((result) => {
        this.responseData = result
        console.log("Credit Card", this.responseData)
        let creditIdStatus = this.responseData.status;
        if (creditIdStatus == 'success') {
          this.receiptInfo.credit_id = this.responseData.credit_id;
          console.log('credit Id : ' + this.receiptInfo.credit_id);
          this.submitReceiptData()
        } else {
          this.loadingController.dismiss();
          this.showCreditCardFailedMsg();
        }
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
      this.receiptInfo.credit_id = this.receiptInfo.RLIcard;
      console.log('credit Id : ' + this.receiptInfo.credit_id);
      this.submitReceiptData()
    }
  }

  submitReceiptData() {
    //Code for Date format as per API requirement 
    var date = new Date(this.receiptInfo.date);
    let month: string = String(date.getMonth() + 1);
    let day: string = String(date.getDate());
    let year: string = String(date.getFullYear());
    if (day.length < 2) {
      day = '0' + day
    }
    if (month.length < 2) {
      month = '0' + month
    }
    console.log("Selected Month" + month)
    console.log("Selected day" + day)
    console.log("Selected year" + year)
    console.log('Full selected date:-' + month + '-' + day + '-' + year)
    this.formattedDate = month + '-' + day + '-' + year //We are getting required date format in this.formattedDate

    var imageName = this.receiptInfo.eventID + localStorage.getItem("UserID") + Math.floor(Date.now() / 1000) + "IMG.png"

    this.sqlite.create({
      name: 'Commander.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        let receiptQuery = 'INSERT INTO receipts(userID, receiptID, eventTitle, eventID, workorder, date, amount, category, categoryID, comment, transactionID, auditStatus, auditDate, status, reason, RLICardinfo, yardID, yardName, image, imageName, server_id) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
        db.executeSql(receiptQuery, [localStorage.getItem("UserID"), Math.floor(Date.now() / 1000), this.receiptInfo.eventTitle, this.receiptInfo.eventID, this.receiptInfo.workorder, this.formattedDate, this.receiptInfo.amount.toString(), this.receiptInfo.category, this.receiptInfo.categoryID.toString(), this.receiptInfo.comment, '', 'Audit Required', '', '', '', this.receiptInfo.credit_id.toString(), this.receiptInfo.yardID, this.receiptInfo.yardTitle, this.receiptInfo.image, imageName, "0"])
          .then(res => {
            console.log(res);
            let geoLocationData = '0,' + new Date().toISOString() + ',' + this.networkProvider.getLatLong() + ',' + localStorage.getItem('UserID') + ',Receipt Added on ' + new Date().toString()
            console.log('DATA STRUCTURE: ' + geoLocationData)
            this.networkProvider.setReceiptGeoLocation(geoLocationData)
            localStorage.setItem('receiptGeoLocation', JSON.stringify(this.networkProvider.getReceiptGeoLocation()))
            console.log('receiptGeoLocation: ' + JSON.parse(localStorage.getItem('receiptGeoLocation')))
            this.getReceiptDataFromDB()
          }).catch(e => console.log(e));
      }).catch(e => console.log(e));
  }

  getReceiptDataFromDB() {
    this.sqlite.create({
      name: 'Commander.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('SELECT * FROM receipts WHERE server_id=0', [])
        .then(res => {
          console.log("Task log:-", JSON.stringify(res))
          console.log("Task log length:-", JSON.stringify(res.rows.length))
          if (res.rows.length > 0) {
            this.receiptsInDB = []
            for (let i = 0; i < res.rows.length; i++) {
              this.receiptsInDB.push(res.rows.item(i));
            }
          }
          console.log("DATA ARRAY:-", this.receiptsInDB);
          this.i = 0
          this.postReceipt()
        }).catch(e => console.log(e));
    }).catch(e => console.log(e));
  }

  postReceipt() {
    if (this.receiptsInDB.length > this.i) {
      if (this.networkProvider.getNetworkStatus() == 'Online') {
        //                                            local_id: any,                  eventId: any,                         date: any,                  yard: any,                            entityID: any,                        category: any,                  amount: any,                  comments: any,  billable: any,checknum: any,audit: any,receiptFileNname: any,          ccid: any
        this.dataServices.postReceiptData(this.receiptsInDB[this.i].ID, this.receiptsInDB[this.i].eventID, this.receiptsInDB[this.i].date, this.receiptsInDB[this.i].yardID, this.receiptsInDB[this.i].userID, this.receiptsInDB[this.i].categoryID, this.receiptsInDB[this.i].amount, this.receiptsInDB[this.i].comment, 1, '', 1, this.receiptsInDB[this.i].image, this.receiptsInDB[this.i].imageName, this.receiptsInDB[this.i].RLICardinfo).then((result: any) => {
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
              this.geoCounter = 0
              this.receiptGeoLocation = this.networkProvider.getReceiptGeoLocation()
              this.postReceiptGeoLocation()
              this.loadingController.dismiss()
              this.receiptSaved('Receipt Saved Successfully')
            } else {
              this.postReceipt()
            }
          } else {
            this.i++
            if (this.receiptsInDB.length == this.i) {
              this.receiptsInDB = []
              this.loadingController.dismiss()
              this.receiptSaved('Receipt Saved Successfully')
            } else {
              this.postReceipt()
            }
          }
        });
      } else {
        this.receiptsInDB = []
        this.loadingController.dismiss()
        this.receiptSaved('Receipt Saved Successfully')
        // alert('No internet connection.')
      }
    }
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
          this.networkProvider.removeReceiptGeoLocation()
        }
      }, error => {
        console.log('Error in post location: ' + JSON.stringify(error))
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

  async receiptSaved(message: string) {
    const alert = await this.alertController.create({
      header: '',
      subHeader: message,
      buttons: [{
        text: 'OK',
        handler: () => {
          this.router.navigate(['/receipts']);
        }
      }]
    });
    await alert.present();
  }

}
