import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cons, Observable } from 'rxjs';
import { Consumer } from './model/consumer';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  constructor(private http:HttpClient) { }

  find(query:string):Observable<Consumer[]>{
    return this.http.get<Array<Consumer>>(`/api/consumers?q=${query}`);
  }

  getById(id:string):Observable<Consumer>{
    return this.http.get<Consumer>(`/api/consumers/${id}`);
  }

  save(consumer:Consumer):Observable<Consumer>{
    if(consumer.id){
      return this.http.put<Consumer>(`/api/consumers/${consumer.id}`, consumer)
    }else{
      return this.http.post<Consumer>('/api/consumers', consumer);
    }
  }
  delete(id:number):Observable<any>{
    return this.http.delete<any>(`/api/consumers/${id}`)
  }
}
