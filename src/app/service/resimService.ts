import {HttpClient} from '@angular/common/http'
import { Component, Injectable, OnInit } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/response-model';
import { Resim } from '../models/resim';

@Injectable({
    providedIn:'root'
})
export class ResimService {
  apiUrl = 'http://broball.somee.com/IIS/';

    constructor(private httpClient:HttpClient) {}

    addresim(resim: Resim): Observable<ResponseModel> {
        console.log("yaptı");
        return this.httpClient.post<ResponseModel>(this.apiUrl + "/api/Image/add", resim);
      }

      add(imageFile:File):Observable<ResponseModel>{
        const formData = new FormData();
        
        formData.append("Image",imageFile)
    
        let newPath = this.apiUrl + "/api/Image/add"
        return this.httpClient.post<ResponseModel>(newPath,formData);
      }

      getImage():Observable<ListResponseModel<Resim>> {
        return this.httpClient.get<ListResponseModel<Resim>>(this.apiUrl + '/api/Image/getall');
      }
}