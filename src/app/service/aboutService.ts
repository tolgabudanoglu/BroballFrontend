import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { About } from '../models/About';

import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  apiUrl = 'http://broball.somee.com/IIS';

  constructor(private httpClient:HttpClient) { }

  getAbout():Observable<ListResponseModel<About>>{
    let newPath = this.apiUrl+'/getalll';
    return this.httpClient.get<ListResponseModel<About>>(newPath);
  }
}