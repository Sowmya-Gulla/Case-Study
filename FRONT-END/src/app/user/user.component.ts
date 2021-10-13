import { Component, OnInit } from '@angular/core';
import {Rooms} from '../services/rooms';
import { RoomsService } from '../services/rooms.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  rooms: Rooms[]=[];
  searchValue: string='';

  constructor(private roomsService: RoomsService) { }

  ngOnInit(): void {
    this.getRooms();
  }
  private getRooms(){
    this.roomsService.getRooms().subscribe(
      data=>{
        this.rooms=data;
      }
    );
  }

}
