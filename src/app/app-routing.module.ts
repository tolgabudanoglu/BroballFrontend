import { FieldinfoComponent } from './components/fieldinfo/fieldinfo.component';
import { CezaComponent } from './components/ceza/ceza.component';
import { ChatComponent } from './components/chat/chat.component';
import { CreateComponent } from './components/create/create.component';
import { SssComponent } from './components/sss/sss.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { StartballComponent } from './components/startball/startball.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TournamentComponent } from './components/tournament/tournament.component';
import { PlayerboardComponent } from './components/playerboard/playerboard.component';
import { LeaderboardsComponent } from './components/leaderboards/leaderboards.component';
import { GoruntularComponent } from './components/goruntular/goruntular.component';
import { AboutComponent } from './components/about/about.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:HomeComponent},
  {path:'profile/:id',component:ProfileComponent},
  {path:"home/:userId",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"startball",component:StartballComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"sss",component:SssComponent},
  {path:"create",component:CreateComponent},
  {path:"chat",component:ChatComponent},
  {path:"ceza",component:CezaComponent},
  {path:"halisahabilgi",component:FieldinfoComponent},
  {path:"oyuncuSıralama",component:PlayerboardComponent},
  {path:"takımsıralama" , component:LeaderboardsComponent},
  {path:"maclardanGoruntuler",component:GoruntularComponent},
  {path:"about",component:AboutComponent},
  {path:"fields",component:HomeComponent},
  {path:"fields/city/:citiesId",component:HomeComponent},
  {path:"teams",component:HomeComponent},
  {path:"teams/league/:leagueId",component:HomeComponent},
 
  {
    path: 'profile/:userId',
    component: ProfileComponent,
  },
  {
    path: 'createprofile/:userId',
    component: CreateProfileComponent,
  },
  

];



@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[ProfileComponent,HomeComponent]