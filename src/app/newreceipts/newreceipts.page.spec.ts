import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewreceiptsPage } from './newreceipts.page';

describe('NewreceiptsPage', () => {
  let component: NewreceiptsPage;
  let fixture: ComponentFixture<NewreceiptsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewreceiptsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewreceiptsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
