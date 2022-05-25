import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { AuthenticationGuard } from './authentication.guard';

describe('AuthenticationGuard', () => {
  let guard: AuthenticationGuard;
  const router: Partial<Router>={};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[
        {provide:Router, useValue:router}
      ]
    });
    guard = TestBed.inject(AuthenticationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
