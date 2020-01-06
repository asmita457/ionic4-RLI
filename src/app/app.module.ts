import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPage } from './login/login.page';
// import {AppVersion} from '@ionic-native/app-version';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { HttpClientModule } from '@angular/common/http';
import { Http, Headers, RequestOptions, HttpModule } from '@angular/http';
import { AuthServicesService } from './providers/Auth-Services/auth-services.service';
import { DataSevicesService } from './providers/Data-Services/data-sevices.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { Network } from '@ionic-native/network/ngx';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LoginPage,
    InAppBrowser,
    EmailComposer,
    AuthServicesService,
    DataSevicesService,
    Camera,
    ImagePicker,
    Geolocation,
    AndroidPermissions,
    LocationAccuracy,
    Network,
    DatePipe,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
