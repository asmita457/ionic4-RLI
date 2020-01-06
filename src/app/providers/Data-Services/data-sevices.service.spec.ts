import { TestBed } from '@angular/core/testing';

import { DataSevicesService } from './data-sevices.service';

describe('DataSevicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataSevicesService = TestBed.get(DataSevicesService);
    expect(service).toBeTruthy();
  });
});
