import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public user = {
    username: '',
    password: '',
  };

  constructor(private _snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }
  formSubmit() {
    console.log(this.user);
    if(this.user.username=='' || this.user.password=='' || this.user.username != 'admin' || this.user.password != 'admin'){
      this._snackBar.open("Enter Valid User!!");
      return;
    }else {
      this._snackBar.open("Successfully Logged in!!");
      window.location.href="/adminpage"; 
    }
  }

}
