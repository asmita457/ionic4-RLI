import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { Events } from '@ionic/angular';

export enum ConnectionStatusEnum {
  Online,
  Offline
}

@Injectable({
  providedIn: 'root'
})
export class NetworkProviderService {

  previousStatus;
  networkStatus = 'Online';
  lat = ""
  long = ""
  receiptGeoLocation = []

  constructor(
    public network: Network,
    public eventCtrl: Events
  ) {
    console.log('Hello NetworkProvider Provider');

    this.previousStatus = ConnectionStatusEnum.Online;
  }

  public initializeNetworkEvents(): void {
    this.network.onDisconnect().subscribe(() => {
      console.log('network was disconnected :-(');
      if (this.previousStatus === ConnectionStatusEnum.Online) {
        this.eventCtrl.publish('network:offline');
      }
      this.previousStatus = ConnectionStatusEnum.Offline;
    });
    this.network.onConnect().subscribe(() => {
      console.log('network connected!');
      if (this.previousStatus === ConnectionStatusEnum.Offline) {
        this.eventCtrl.publish('network:online');
      }
      this.previousStatus = ConnectionStatusEnum.Online;
    });
  }

  setNetworkStatus(status: string) {
    this.networkStatus = status
  }

  getNetworkStatus() {
    return this.networkStatus
  }

  setLatLong(lat, long) {
    this.lat = lat
    this.long = long
  }

  getLatLong() {
    return this.long + ',' + this.lat
  }

  setReceiptGeoLocation(geoLocation) {
    this.receiptGeoLocation.push(geoLocation)
  }

  getReceiptGeoLocation() {
    return this.receiptGeoLocation
  }

  removeReceiptGeoLocation() {
    this.receiptGeoLocation = []
  }
}
