import { Component, OnInit } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private signupService:SignupService,private _snackBar:MatSnackBar) { }
  public user = {
    username: '',
    password: '',
  };

  ngOnInit(): void {
    
  }

  formSubmit() {
    console.log(this.user);
    if(this.user.username=='' || this.user.password==''){
      this._snackBar.open("User is required!!");
      return;
    }

    //add user: signup service
    this.signupService.addUser(this.user)
    .subscribe(
      (data)=>{
        console.log(data);
        this._snackBar.open("Successfully Signed Up!!");
        window.location.href="/home";
      },
      (error)=>
      {
        console.log(error);
        alert('User already exist!!');
      }
    )


  }

}
