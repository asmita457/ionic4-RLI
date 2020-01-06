import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtasklogsPage } from './addtasklogs.page';

describe('AddtasklogsPage', () => {
  let component: AddtasklogsPage;
  let fixture: ComponentFixture<AddtasklogsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtasklogsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtasklogsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
