import {HttpClient} from '@angular/common/http'
import { Component, Injectable, OnInit } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { ResponseModel } from '../models/response-model';
import { itemResponseModel } from '../models/itemResponseModel';
@Injectable({
    providedIn:'root'
})
export class ProductService {
  apiUrl = 'http://broball.somee.com/IIS/';
  apiUrl2="http://broball.somee.com/IIS/api/"

    constructor(private httpClient:HttpClient) { }

    getProduct():Observable<ListResponseModel<Product>>{
        let newPath = this.apiUrl+'/getall';
        return this.httpClient.get<ListResponseModel<Product>>(newPath);
      }

      updateProduct(product:Product):Observable<ResponseModel>{

        return this.httpClient.post<ResponseModel>(this.apiUrl +"/update" ,product )
      }

      getById(id:number):Observable<itemResponseModel<Product>>{
        let newPath = this.apiUrl + "/getId?productId"+id;
        return this.httpClient.get<itemResponseModel<Product>>(newPath);
      }
}