import {HttpClient} from '@angular/common/http'
import { Component, Injectable, OnInit } from '@angular/core';
import { Inquery } from '../models/Inquery';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';



@Injectable({
    providedIn:'root'
})
export class InqueryService {
    apiUrl = 'http://broball.somee.com/IIS';
    apiUrl2="http://broball.somee.com/IIS/api/"
    constructor(private httpClient:HttpClient) { }

    getInquery():Observable<ListResponseModel<Inquery>>{
        let newPath = this.apiUrl+'/api/Inquery/getall';
        return this.httpClient.get<ListResponseModel<Inquery>>(newPath);
      }
}