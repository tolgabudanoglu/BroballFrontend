import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/Team';
import { TeamService } from 'src/app/service/team.service';

@Component({
  selector: 'app-leaderboards',
  templateUrl: './leaderboards.component.html',
  styleUrls: ['./leaderboards.component.css']
})
export class LeaderboardsComponent implements OnInit {


  teams:Team[];

  dataLoaded=false;

  constructor(private teamService : TeamService) { }

  ngOnInit()  {

    this.getTeams();
  }

  getTeams(){
    this.teamService.getTeam().subscribe(response => {
      this.teams = response.data
      this.dataLoaded=true
  })
  
  }

}
