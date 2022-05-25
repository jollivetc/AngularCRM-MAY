import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { User } from './model/user';

@Component({
  selector: 'crm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  private subs:Subscription[]=[];
  loginForm : FormGroup;
  errorLogin={
    required:'un login est requis',
    minlength: '3 caractères minimun'
  };
  constructor(private authent: AuthenticationService, private router:Router) {
    this.loginForm=new FormGroup({
      login: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(3), checkPassword])
    });
    this.authent.disconnect();
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.subs.forEach(sub=>sub.unsubscribe());
  }

  onSubmit():void{
    this.subs.push(this.authent.authentUser(this.loginForm.get('login')?.value, this.loginForm.get('password')?.value)
          .subscribe({
            next: (user:User)=>{this.router.navigateByUrl('/home')},
            error: (error:Error)=>{alert(error.message)},
            complete:()=>{}
          }));
  }
}

function checkPassword(c:AbstractControl): ValidationErrors|null{
  if((c.value as string).indexOf('$')<0){
    return null
  }
  return {
    checkPassword:'should not contain $'
  }
}
