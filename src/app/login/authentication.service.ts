import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from './model/user';


const TOKEN_KEY='angularcrm-token'
const USER_KEY='angularcrm-user'
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUser?:User;
  private _token?:string;

  constructor(private http:HttpClient) {
    if(sessionStorage.getItem(USER_KEY)){
      this.currentUser=JSON.parse(sessionStorage.getItem(USER_KEY)!)
    }
    if(sessionStorage.getItem(TOKEN_KEY)){
      this._token=sessionStorage.getItem(TOKEN_KEY)!;
    }
  }

  get isAuthenticated():boolean{
    return !!this.currentUser;
  }
  get token():string|undefined{
    return this._token;
  }

  authentUser(login:string, password:string):Observable<User>{
    return this.http.post<AuthentResponse>('/api/auth/login', {email:login, password:password})
        .pipe(
          map((response: AuthentResponse)=>{
            this._token = response.token;
            this.currentUser=response.user;
            sessionStorage.setItem(USER_KEY, JSON.stringify(this.currentUser));
            sessionStorage.setItem(TOKEN_KEY, this._token);
            return this.currentUser
          })
        )
  }
  disconnect(){
    this.currentUser=undefined;
    sessionStorage.removeItem(USER_KEY);
    this._token=undefined;
    sessionStorage.removeItem(TOKEN_KEY);
  }
}

interface AuthentResponse{
  user:User,
  token:string
}
