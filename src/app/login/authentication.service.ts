import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authentUser(login:string, password:string){
    return {
      userId:1,
      login:login,
      firstName: 'John',
      lastName: 'Doe'
    }
  }
}
