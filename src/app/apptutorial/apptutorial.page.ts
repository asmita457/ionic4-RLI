import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apptutorial',
  templateUrl: './apptutorial.page.html',
  styleUrls: ['./apptutorial.page.scss'],
})
export class ApptutorialPage implements OnInit {
    slideOpts = {
    effect: 'flip'
    };
  constructor() { }

  ngOnInit() {
  }
  
  nextSlide() {
    this.nextSlide();
    // this.slides.slideNext();
  }
}
