import {HttpClient} from '@angular/common/http'
import { Component, Injectable, OnInit } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { Field } from '../models/Field';
import { ResponseModel } from '../models/response-model';
@Injectable({
    providedIn:'root'
})
export class FieldService {
  apiUrl = 'http://broball.somee.com/IIS';
  apiUrl2="http://broball.somee.com/IIS/api/"
    constructor(private httpClient:HttpClient) {}

    addField(field: Field): Observable<ResponseModel> {
        console.log("yaptı");
        return this.httpClient.post<ResponseModel>(this.apiUrl + "/api/Field/add", field);
      }
      getField():Observable<ListResponseModel<Field>>{
        let newPath = this.apiUrl+'/api/Field/getall';
        return this.httpClient.get<ListResponseModel<Field>>(newPath);
      }

      getFields():Observable<ListResponseModel<Field>>{
        let newPath=this.apiUrl2+"Field/getall";
        return this.httpClient.get<ListResponseModel<Field>>(newPath);
      }
    
      getFieldsByCity(citiesId:number):Observable<ListResponseModel<Field>>{
        let newPath=this.apiUrl2+"Field/getfieldsbycitiesid?citiesId="+citiesId
        return this.httpClient.get<ListResponseModel<Field>>(newPath);
      }
      
    }