import { TestBed } from '@angular/core/testing';

import { NgxStringly } from './ngx-stringly';

describe('NgxStringly', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxStringly = TestBed.get(NgxStringly);
    expect(service).toBeTruthy();
  });
});
