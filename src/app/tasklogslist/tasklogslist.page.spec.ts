import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasklogslistPage } from './tasklogslist.page';

describe('TasklogslistPage', () => {
  let component: TasklogslistPage;
  let fixture: ComponentFixture<TasklogslistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasklogslistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasklogslistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
