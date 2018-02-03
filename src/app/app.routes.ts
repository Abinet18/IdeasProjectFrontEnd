import {RouterModule, Routes} from '@angular/router';

import {HomepageComponent} from './homepage/homepage.component';
import {MostPopularComponent} from './MostPopular/popular.component';
import { AboutComponent } from './About/about.component';
import {ProfileComponent} from './profile/profile.component';
import { MyCanActivateGuard } from "./profile/mycanactivate.guard";
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './Login/login.component';
import { RegisterComponent } from './Register/register.component';
import { AdminComponent } from './Admin/admin.component';
import { IdeaComponent } from './idea/idea.component';

const MY_ROUTES: Routes = [

    {path: '', component: HomepageComponent},
    {path: 'popular', component: MostPopularComponent},
    {path: 'about', component: AboutComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'notfound', component: NotfoundComponent},
    {path : 'idea', component:IdeaComponent},
    {path: '**', redirectTo: '/' },
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);