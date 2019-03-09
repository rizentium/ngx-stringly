import { TestBed } from '@angular/core/testing';

import { NgxStringlyService } from './ngx-stringly.service';

describe('NgxStringlyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxStringlyService = TestBed.get(NgxStringlyService);
    expect(service).toBeTruthy();
  });
});
