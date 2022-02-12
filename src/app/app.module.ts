import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { createPopper } from '@popperjs/core/lib/popper-lite.js'
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { NaviComponent } from './components/navi/navi.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { StartballComponent } from './components/startball/startball.component';
import { RegisterComponent } from './components/register/register.component';

import { ToastrModule } from 'ngx-toastr';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SssComponent } from './components/sss/sss.component';
import { CreateComponent } from './components/create/create.component';
import { ChatComponent } from './components/chat/chat.component';
import { CezaComponent } from './components/ceza/ceza.component';
import { TournamentComponent } from './components/tournament/tournament.component';
import { FieldinfoComponent } from './components/fieldinfo/fieldinfo.component';
import { ProductService } from './service/product.service';
import { UserService } from './service/user.service';
import { InqueryService } from './service/inquery.service';
import { QuestionService } from './service/question.service';
import { TeamService } from './service/team.service';
import { FieldService } from './service/field.Service';
import { CreditCardService } from './service/creditCardService';
import { ResimService } from './service/resimService';
import { AboutService } from './service/aboutService';
import { CityService } from './service/city.service';
import { AboutComponent } from './components/about/about.component';
import { GoruntularComponent } from './components/goruntular/goruntular.component';
import { PlayerboardComponent } from './components/playerboard/playerboard.component';
import { LeaderboardsComponent } from './components/leaderboards/leaderboards.component';
import { FilterPipe2Pipe } from './pipes/filter-pipe2.pipe';
import { FilterPipe3Pipe } from './pipes/filter-pipe3.pipe';






@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    NaviComponent,
    HomeComponent,
    StartballComponent,
    RegisterComponent,
   
    FilterPipePipe,
    SidebarComponent,
    SssComponent,
    CreateComponent,
    ChatComponent,
    CezaComponent,
    TournamentComponent,
    FieldinfoComponent,
    
    LeaderboardsComponent,
    PlayerboardComponent,
    GoruntularComponent,
    AboutComponent,
    FilterPipe2Pipe,
    FilterPipe3Pipe,
    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot(
      ),
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"}
    ),
    


  ],
  providers: [ProductService,UserService,InqueryService,QuestionService,TeamService, FieldService ,CreditCardService , ResimService,AboutService,CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
