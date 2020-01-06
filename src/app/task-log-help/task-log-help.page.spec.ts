import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskLogHelpPage } from './task-log-help.page';

describe('TaskLogHelpPage', () => {
  let component: TaskLogHelpPage;
  let fixture: ComponentFixture<TaskLogHelpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskLogHelpPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskLogHelpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
