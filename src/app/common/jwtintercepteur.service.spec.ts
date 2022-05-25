import { TestBed } from '@angular/core/testing';
import { AuthenticationService } from '../login/authentication.service';

import { JWTIntercepteurService } from './jwtintercepteur.service';

describe('JWTIntercepteurService', () => {
  let service: JWTIntercepteurService;
  const authenticationService:Partial<AuthenticationService>={};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        {provide: JWTIntercepteurService, useClass:JWTIntercepteurService},
        {provide: AuthenticationService, useValue: authenticationService}
      ]
    });
    service = TestBed.inject(JWTIntercepteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
