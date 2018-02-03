import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MostPopularComponent } from './MostPopular/popular.component';
import { AboutComponent } from './About/about.component';
import { LoginComponent } from './Login/login.component';
import { DbService } from './db.service';
import { myRoutes } from './app.routes';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './Register/register.component';
import { AdminComponent } from './Admin/admin.component';

import { MyCanActivateGuard } from "./profile/mycanactivate.guard";
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MostPopularComponent,
    ProfileComponent,
    NotfoundComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    myRoutes
  ],
  providers: [DbService, MyCanActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
