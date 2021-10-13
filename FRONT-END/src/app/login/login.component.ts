import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public login:LoginService,private _snackBar:MatSnackBar) { }
  public user = {
    username: '',
    password: '',
  };
  x:any;

  ngOnInit(): void {
  }
  formSubmit() {
    console.log(this.user);
    if(this.user.username=='' || this.user.password==''){
      this._snackBar.open("User is required!!");
      //alert('User is required');
      return;
    }
    else{
      this.login.generateToken(this.user);
      //window.location.href="/receptionist"; 


    }
    

    //req token
    this.login.generateToken(this.user).subscribe(
      (data)=>{
        
        console.log('Success');
        console.log(data);
        this._snackBar.open("Successfully Logged in!!");
        window.location.href="/receptionist";
    
      },
      (error)=>{
        console.log('Error!');
        console.log(error);
      }
    );
  }
}
