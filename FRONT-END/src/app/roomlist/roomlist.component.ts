import { Component, OnInit } from '@angular/core';
import {Rooms} from '../services/rooms';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.css']
})
export class RoomlistComponent implements OnInit {
  rooms: Rooms[]=[];

  constructor(private roomsService:RoomsService) { }

  ngOnInit(): void {
    this.getRooms();
  }
  getRooms(){
    this.roomsService.getRooms().subscribe(
      data=>{
        this.rooms=data;
      }
    );
  }
  deleteRoom(rooms:any){
    this.roomsService.deleteRoom(rooms.id).subscribe(
      (data)=>{
        console.log(data);
        window.location.reload();
        this.getRooms();
        
      },
      (error)=>{
        console.log(error);
      }

    );
  }

}
