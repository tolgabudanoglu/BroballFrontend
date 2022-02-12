import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';


import { Team } from 'src/app/models/Team';
import { TeamService } from 'src/app/service/team.service';


import { Field } from 'src/app/models/Field';
import { City } from 'src/app/models/City';
import { League } from 'src/app/models/league';
import { CityService } from 'src/app/service/city.service';
import { FieldService } from 'src/app/service/field.Service';
import { LeagueService } from 'src/app/service/league.service';
import { ActivatedRoute } from '@angular/router';


declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users:User[]=[];
  fields:Field[]=[];
  cities:City[];
  leagues:League[];
  teams:Team[]=[];

  currentCity:City;
  currentLeague:League;
  

  dataLoaded=false;
 
  filterText3="";
  filterText2="";
  filterText="";

  constructor(private userService:UserService,private activatedRoute:ActivatedRoute,
    private cityService:CityService,private leagueService:LeagueService,
    private fieldService:FieldService,
    private teamService:TeamService) { }

  ngOnInit(): void {
    this.getCities();
    this.getLeagues();
    this.getUsers();
    this.activatedRoute.params.subscribe(params=>{
     if (params["citiesId"]) {
        this.getFieldsByCity(params["citiesId"])
        this.getTeams()
        this.getUsers()
      }
     else if (params["leagueId"]) {
        this.getTeamsByLeague(params["leagueId"])
        this.getFields()
        this.getUsers()
      }
     else{
        this.getCities()
        this.getUsers()
        this.getLeagues()
        this.getTeams()
        this.getFields()
      }
   
    })
   
  }

  getUsers(){
    this.userService.getUsers().subscribe(response=>{
      this.users=response.data;
    })
  }
  getFields(){
    this.fieldService.getFields().subscribe(response=>{
      this.fields=response.data;
    })
  }
  getCities(){
    this.cityService.getCities().subscribe(response=>{
      this.cities=response.data;
      this.dataLoaded=true;
    })
  }
  getLeagues(){
    this.leagueService.getLeagues().subscribe(response=>{
      this.leagues=response.data;
      this.dataLoaded=true;
    })
  }
  getTeams(){
  this.teamService.getTeams().subscribe(response=>{
    this.teams=response.data;
    this.dataLoaded=true;
  })
  }



//--------------------------------------------------------------------------------------------------------------------------------------------
  
  getUsersByCity(citiesId:number){
    this.userService.getUsersByCity(citiesId).subscribe(response=>{
      this.users=response.data;
    })
  }
  getFieldsByCity(citiesId:number){
    this.fieldService.getFieldsByCity(citiesId).subscribe(response=>{
      this.fields=response.data;
    })
  }
  getTeamsByLeague(leagueId:number){
    this.teamService.getTeamsByLeague(leagueId).subscribe(response=>{
      this.teams=response.data;
    })
  }

 //--------------------------------------------------------------------------------------------------------------------------------------------













  setCurrentCity(city:City){
    this.currentCity=city;
  }

  setCurrentLeague(league:League){
    this.currentLeague=league;
  }



  getCurrentLeagueClass(league:League){
    if (league==this.currentLeague) {
      return "form-group-item active"
    }else{
      return "form-group-item"
    }
  }

  getCurrentCityClass(city:City){
   if (city==this.currentCity) {
     return "form-group-item active"
   }else{
     return "form-group-item"
   }
  }



  getAllLeagueClass(){
    if (!this.currentLeague) {
      return "form-group-item active"
    }
    else{
      return "form-group-item"
    }
  }

  getAllCityClass(){
    if (!this.currentCity) {
      return "form-group-item active"
    }
    else{
      return "form-group-item"
    }
  }

}
