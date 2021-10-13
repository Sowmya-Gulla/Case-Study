import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router} from "@angular/router";
import { Rooms } from '../services/rooms';
import { RoomsService } from '../services/rooms.service';


@Component({
  selector: 'app-addroom',
  templateUrl: './addroom.component.html',
  styleUrls: ['./addroom.component.css']
})
export class AddroomComponent implements OnInit {
  rooms: Rooms=new Rooms('','','','');

  constructor(private roomsService:RoomsService,private router: Router,private _snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }
  formSubmit(){
    //console.log(this.rooms);
    this.roomsService.addRooms(this.rooms).subscribe(
      (data)=>{
        this._snackBar.open("Room Added Successfully!!");
        console.log(data);
        this.router.navigate(['/roomlist']);
      },
      (error)=>{
        console.log(error);
      }
      
    );
  }

  

}
