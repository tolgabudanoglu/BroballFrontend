import { League } from './../models/league';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  apiUrl="http://broball.somee.com/IIS/api/League/getall"
 

  constructor(private httpClient:HttpClient) { }

  getLeagues():Observable<ListResponseModel<League>>{
    return this.httpClient.get<ListResponseModel<League>>(this.apiUrl);
  }
}
