import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../models/City';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  apiUrl = "http://broball.somee.com/IIS/api/City/getall"


  constructor(private httpClient:HttpClient) { }

  getCities():Observable<ListResponseModel<City>>{
    
    return this.httpClient.get<ListResponseModel<City>>(this.apiUrl);
  }
  getCity():Observable<ListResponseModel<City>>{
    
    return this.httpClient.get<ListResponseModel<City>>(this.apiUrl);
  }
}