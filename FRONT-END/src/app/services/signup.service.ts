import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }

  //add user
  public addUser(user: any){
    return this.http.post(`${baseUrl}/subs`,user);
  }
}
