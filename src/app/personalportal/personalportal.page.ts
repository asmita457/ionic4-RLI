import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-personalportal',
  templateUrl: './personalportal.page.html',
  styleUrls: ['./personalportal.page.scss'],
})
export class PersonalportalPage implements OnInit {
  constructor(private router: Router , private iab: InAppBrowser) {
  }
   // browser = this.iab.create('http://rlicommander.com/contractors/');

  ngOnInit() {
  }

}
