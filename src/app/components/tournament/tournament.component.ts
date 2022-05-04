import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/models/user';
import {HttpClient} from '@angular/common/http'
import { TeamService } from 'src/app/service/team.service';
import { Team } from 'src/app/models/Team';
@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {
  users:User[];
  teams:Team[];
  dataLoaded=false;
  apiUrl = "https://localhost:44318"
  
  constructor(private httpClient:HttpClient,private userService:UserService,private teamService:TeamService) { }

  ngOnInit(): void {
    this.getUsers();
    this.getTeams();
  }


  getUsers(){
    this.userService.getUser().subscribe(response => {
      this.users = response.data
      this.dataLoaded=true
    })
  }
  getTeams(){
    this.teamService.getTeam().subscribe(response => {
      this.teams = response.data
      this.dataLoaded=true
  })
  
  }

}
