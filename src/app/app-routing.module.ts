import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services/repairmenservices/services.component';
import { ContactaboutusComponent } from './contactaboutus/contactaboutus.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { FranchisingComponent } from './franchising/franchising.component';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';
import { SirketComponent } from './sirket/sirket.component';
import { DogalgazComponent } from './services/dogalgaz/dogalgaz.component';
import { GoksudogalgazComponent } from './services/dogalgaz/goksudogalgaz/goksudogalgaz.component';
import { DogalgaztesisatciustasiComponent } from './services/dogalgaz/dogalgaztesisatciustasi/dogalgaztesisatciustasi.component';
import { StarRatingComponent } from './services/dogalgaz/goksudogalgaz/star-rating/star-rating.component';
import { RandevusorgulaComponent } from './randevusorgula/randevusorgula.component';



const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'contactaboutus', component: ContactaboutusComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'booking', component: BookingComponent},
  { path: 'franchising', component: FranchisingComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'sirket', component: SirketComponent},
  { path: 'services/dogalgaz', component: DogalgazComponent,},
  { path: 'services/dogalgaz/goksudogalgaz', component: GoksudogalgazComponent},
  { path: 'services/dogalgaz/dogalgaztesisatciustasi', component: DogalgaztesisatciustasiComponent},
  { path: 'services/dogalgaz/goksudogalgaz/star-rating', component: StarRatingComponent},
  { path: 'randevusorgula', component: RandevusorgulaComponent},
  { path: '', component: HomeComponent },
  {path: 'login', component: AuthComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
