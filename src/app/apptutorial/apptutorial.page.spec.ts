import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApptutorialPage } from './apptutorial.page';

describe('ApptutorialPage', () => {
  let component: ApptutorialPage;
  let fixture: ComponentFixture<ApptutorialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApptutorialPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApptutorialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
