import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { HotelsComponent } from './hotels/hotels.component';
import { SignupComponent } from './signup/signup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS, MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { SearchfilterPipe } from './searchfilter.pipe';
import { AdminComponent } from './admin/admin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { RoomlistComponent } from './roomlist/roomlist.component';
import { AddroomComponent } from './addroom/addroom.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { GuestComponent } from './guest/guest.component';
import { PaymentComponent } from './payment/payment.component';
import { CarddetailsComponent } from './carddetails/carddetails.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HotelsComponent,
    SignupComponent,
    LoginComponent,
    NavbarComponent,
    UserComponent,
    SearchfilterPipe,
    AdminComponent,
    AdminpageComponent,
    RoomlistComponent,
    AddroomComponent,
    ReceptionistComponent,
    GuestComponent,
    PaymentComponent,
    CarddetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule,

    
  ],
  providers: [
    {provide:MAT_SNACK_BAR_DEFAULT_OPTIONS,useValue:{duration: 2500}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
