import { TestBed } from '@angular/core/testing';

import { SubradditService } from './subraddit.service';

describe('SubradditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubradditService = TestBed.get(SubradditService);
    expect(service).toBeTruthy();
  });
});
