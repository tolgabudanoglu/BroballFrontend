import {HttpClient} from '@angular/common/http'
import { Component, Injectable, OnInit } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { Team } from '../models/Team';
import { ResponseModel } from '../models/response-model';
@Injectable({
    providedIn:'root'
})
export class TeamService {
  apiUrl = 'http://broball.somee.com/IIS';
  apiUrl2="http://broball.somee.com/IIS/api/"
    constructor(private httpClient:HttpClient) { }

    getTeam():Observable<ListResponseModel<Team>>{
        let newPath = this.apiUrl+'/api/Teams/getall';
        return this.httpClient.get<ListResponseModel<Team>>(newPath);
      }

      addTeam(team : Team): Observable<ResponseModel> {
        console.log("yaptı");
        return this.httpClient.post<ResponseModel>(this.apiUrl + "/api/Teams/post", team);
      }

      getTeams():Observable<ListResponseModel<Team>>{
        let newPath=this.apiUrl2+"Teams/getall";
        return this.httpClient.get<ListResponseModel<Team>>(newPath);
      }
    
      getTeamsByLeague(leagueId:number):Observable<ListResponseModel<Team>>{
        let newPath=this.apiUrl2+"Teams/getteamsbyleagueid?leagueId="+leagueId
        return this.httpClient.get<ListResponseModel<Team>>(newPath);
      }
}