import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedReceiptPage } from './approved-receipt.page';

describe('ApprovedReceiptPage', () => {
  let component: ApprovedReceiptPage;
  let fixture: ComponentFixture<ApprovedReceiptPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedReceiptPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedReceiptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
