import { TestBed } from '@angular/core/testing';

import { RepositoryInfoService } from './repository-info.service';

describe('RepositoryInfoService', () => {
  let service: RepositoryInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepositoryInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
