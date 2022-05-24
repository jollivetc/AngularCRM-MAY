import { Injectable } from '@angular/core';
import { User } from './model/user';


const USER_TOKEN="angularcrm-user"
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser?:User;

  constructor() {
    if(sessionStorage.getItem(USER_TOKEN)){
      this.currentUser=JSON.parse(sessionStorage.getItem(USER_TOKEN)!)
    }
  }

  get isAuthenticated(){
    return !!this.currentUser;
  }

  authentUser(login:string, password:string):User{
    this.currentUser= {
      id:1,
      login:login,
      firstname: 'John',
      lastname: 'Doe'
    }
    sessionStorage.setItem(USER_TOKEN, JSON.stringify(this.currentUser));
    return this.currentUser;
  }
  disconnect(){
    this.currentUser=undefined;
    sessionStorage.removeItem(USER_TOKEN)
  }
}
