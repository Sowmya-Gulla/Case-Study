import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor(private http:HttpClient) { }

  //add guest
  public addGuest(guest: Object):Observable<Object>{
    return this.http.post(`${'http://localhost:8081/customers/addcustomer'}`,guest);

  }
}
