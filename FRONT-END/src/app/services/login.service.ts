import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';

export class user{
  constructor(
    public username:string ,
    public password: String,
  ){}
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  //generate token
  public generateToken(user:any){
    return this.http.post<user[]>(`${baseUrl}/auth`,user);

  }

  //login user:set token in local storage
  public loginUser(token:any){
    localStorage.setItem('token',token);
    return true;
  }
  //isLogin:user is logged in or not
  public isLoggedIn(){
    let tokenStr=localStorage.getItem('token');
    if(tokenStr==undefined || tokenStr ==''|| tokenStr==null){
      return false;
    }
    else{
      return true;
    }
  }
  //logout: remove token from local storage
  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }
  //get token
  public getToken(){
    return localStorage.getItem('token');
  }
  //set userDetails
  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user));
  }
  //get User
  public getUser(){
    let userStr=localStorage.getItem('user');
    if(userStr!=null){
      return JSON.parse(userStr);
    }
    else{
      this.logout();
      return null;
    }

  }


}
