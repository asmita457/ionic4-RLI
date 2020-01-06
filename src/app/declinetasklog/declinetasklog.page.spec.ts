import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclinetasklogPage } from './declinetasklog.page';

describe('DeclinetasklogPage', () => {
  let component: DeclinetasklogPage;
  let fixture: ComponentFixture<DeclinetasklogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclinetasklogPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclinetasklogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
