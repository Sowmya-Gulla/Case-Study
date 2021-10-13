import { Component, OnInit } from '@angular/core';
import { GuestService } from '../services/guest.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {

  constructor(public guestService:GuestService) { }
  public guest={
    name:'',
    phonenum:'',
    email:'',
    check_in:'',
    check_out:'',
  };

  ngOnInit(): void {
  }
  formSubmit(){
    console.log(this.guest);
    if(this.guest.name=='' || this.guest.phonenum=='' || this.guest.email=='' || this.guest.check_in=='' || this.guest.check_out==''){
      alert('Guest is required');
      return;

    }

  this.guestService.addGuest(this.guest)
    .subscribe(
      (data)=>{
        console.log(data);
        alert("Submitted Successfully!!")
      },
      (error)=>
      {
        console.log(error);
      }  
    )
  }

}
