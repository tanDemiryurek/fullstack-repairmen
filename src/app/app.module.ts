import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/repairmenservices/services.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FranchisingComponent } from './franchising/franchising.component';
import { BookingComponent } from './booking/booking.component';
import { ContactaboutusComponent } from './contactaboutus/contactaboutus.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { SirketComponent } from './sirket/sirket.component';
import { DogalgazComponent } from './services/dogalgaz/dogalgaz.component';
import { GoksudogalgazComponent } from './services/dogalgaz/goksudogalgaz/goksudogalgaz.component';
import { DogalgaztesisatciustasiComponent } from './services/dogalgaz/dogalgaztesisatciustasi/dogalgaztesisatciustasi.component';
import { StarRatingComponent } from './services/dogalgaz/goksudogalgaz/star-rating/star-rating.component';
import { RandevusorgulaComponent } from './randevusorgula/randevusorgula.component';
import { AuthService } from './service/auth.service';




@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    NavbarComponent,
    FranchisingComponent,
    BookingComponent,
    ContactaboutusComponent,
    HomeComponent,
    AuthComponent,
    AdminComponent,
    SirketComponent,
    DogalgazComponent,
    GoksudogalgazComponent,
    DogalgaztesisatciustasiComponent,
    StarRatingComponent,
    RandevusorgulaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ 
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
