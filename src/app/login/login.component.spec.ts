import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { AppMaterialModule } from '../app-material.module';
import { AuthenticationService } from './authentication.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const authentService : Partial<AuthenticationService>={disconnect: ()=>{}};
  const router: Partial<Router>={};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[AppMaterialModule, ReactiveFormsModule, NoopAnimationsModule],
      providers:[
        {provide: AuthenticationService, useValue: authentService},
        {provide: Router, useValue:router}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should deactivate login button on first display', ()=>{
    const button = (fixture.nativeElement as HTMLElement).querySelector('button');
    expect(button?.disabled).toBeTrue();
  })
});
