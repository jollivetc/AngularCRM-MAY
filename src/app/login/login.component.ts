import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'crm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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

  onSubmit():void{
    const user = this.authent.authentUser(this.loginForm.get('login')?.value, this.loginForm.get('password')?.value);
    console.log(user);
    if(user){
      this.router.navigateByUrl('/home');
    }
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
