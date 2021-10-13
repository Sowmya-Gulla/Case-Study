import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HotelsComponent } from './hotels/hotels.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { RoomlistComponent } from './roomlist/roomlist.component';
import { AddroomComponent } from './addroom/addroom.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { GuestComponent } from './guest/guest.component';
import { PaymentComponent } from './payment/payment.component';
import { CarddetailsComponent } from './carddetails/carddetails.component';



const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'home',component:HomeComponent,pathMatch:'full'},
  {path:'hotels',component:HotelsComponent,pathMatch:'full'},
  {path:'navbar',component:NavbarComponent,pathMatch:'full'},
  {path:'signup',component:SignupComponent,pathMatch:'full'},
  {path:'login',component:LoginComponent ,pathMatch:'full'},
  {path:'user',component:UserComponent ,pathMatch:'full'},
  {path:'admin',component:AdminComponent ,pathMatch:'full'},
  {path:'adminpage',component:AdminpageComponent ,pathMatch:'full'},
  {path:'roomlist',component:RoomlistComponent ,pathMatch:'full'},
  {path:'addroom',component:AddroomComponent ,pathMatch:'full'},
  {path:'receptionist',component:ReceptionistComponent ,pathMatch:'full'},
  {path:'guest',component:GuestComponent  ,pathMatch:'full'},
  {path:'carddetails',component:CarddetailsComponent  ,pathMatch:'full'},
  {path:'payment',component:PaymentComponent  ,pathMatch:'full'},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
