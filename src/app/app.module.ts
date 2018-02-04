import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

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
import { IdeaComponent } from './idea/idea.component';

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
    IdeaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    myRoutes
  ],
  providers: [DbService, MyCanActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
