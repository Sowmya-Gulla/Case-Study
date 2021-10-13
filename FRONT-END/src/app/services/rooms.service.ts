import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export class Rooms{
    constructor(
        public id: string,
        public roomno: string,
        public type: string,
        public price: string
    ){}
}
@Injectable({
    providedIn: 'root'
})
export class RoomsService {
    private baseUrl='http://localhost:8084/';
    id: any;

constructor(private http:HttpClient) { }
getRooms():Observable<Rooms[]>{
    return this.http.get<Rooms[]>(`${this.baseUrl}/findAllRooms`);
}
addRooms(rooms: Rooms): Observable<Object>{
    return this.http.post<Object>(`${this.baseUrl}`+'addRoom',rooms);
}
deleteRoom(id:any): Observable<Object>{
    return this.http.delete<Rooms[]>(`${'http://localhost:8084/delete'}/${id}`);
}

}