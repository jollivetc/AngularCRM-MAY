import { TestBed } from '@angular/core/testing';

import { JWTIntercepteurService } from './jwtintercepteur.service';

describe('JWTIntercepteurService', () => {
  let service: JWTIntercepteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JWTIntercepteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
