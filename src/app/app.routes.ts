import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {MostPopularComponent} from './MostPopular/popular.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './Login/login.component';
import { RegisterComponent } from './Register/register.component';
import { AdminComponent } from './Admin/admin.component';
import { IdeaComponent } from './idea/idea.component';
import { AuthGuard } from './guards/auth.guard';
import { WelcomeComponent } from './welcome/welcome.component';
import { ThanksComponent } from './thanks/thanks.component';
import { SelectedIdeaComponent } from './selected-idea/selected-idea.component';
import { MostdiscussedComponent } from './mostdiscussed/mostdiscussed.component';
import { YourideasComponent } from './yourideas/yourideas.component';
import { NotauthorizedComponent } from './notauthorized/notauthorized.component';
import { AdminGuard } from './guards/admin.guard';

//@Abinet
//List of routes in the front end
//Authentication Guard for routes that require login
const MY_ROUTES: Routes = [
    {path: '', component: HomepageComponent},
    {path: 'popular', component: MostPopularComponent},
    {path: 'login', component: LoginComponent},
    {path: 'welcome', component:WelcomeComponent},
    {path: 'thanks', component:ThanksComponent},
    {path: 'selectedIdea',component:SelectedIdeaComponent},  
    {path:'mostdiscussed',component:MostdiscussedComponent}, 
    {path:'yourideas',component:YourideasComponent}, 
    {path: 'register', component: RegisterComponent},
    {path: 'admin', component: AdminComponent,canActivate:[AuthGuard,AdminGuard]},
    {path: 'notauthorized', component: NotauthorizedComponent},
    {path : 'idea', component:IdeaComponent,canActivate:[AuthGuard]},
    {path: '**', redirectTo: '/' },
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
