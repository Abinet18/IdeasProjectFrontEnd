import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';
import { StarRatingModule } from 'angular-star-rating';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MostPopularComponent } from './MostPopular/popular.component';
import { LoginComponent } from './Login/login.component';
import { DbService } from './db.service';
import { myRoutes } from './app.routes';
import { RegisterComponent } from './Register/register.component';
import { AdminComponent } from './Admin/admin.component';

import { AuthGuard } from './guards/auth.guard';

import { NotfoundComponent } from './notfound/notfound.component';
import { IdeaComponent } from './idea/idea.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ThanksComponent } from './thanks/thanks.component';
import { SelectedIdeaComponent } from './selected-idea/selected-idea.component';
import { MostdiscussedComponent } from './mostdiscussed/mostdiscussed.component';
import { YourideasComponent } from './yourideas/yourideas.component';
import { NotauthorizedComponent } from './notauthorized/notauthorized.component';
import { AdminGuard } from './guards/admin.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MostPopularComponent,
    NotfoundComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    IdeaComponent,
    WelcomeComponent,
    ThanksComponent,
    SelectedIdeaComponent,
    MostdiscussedComponent,
    YourideasComponent,
    NotauthorizedComponent,
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
  providers: [DbService, AuthGuard,AdminGuard,[{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }]],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
