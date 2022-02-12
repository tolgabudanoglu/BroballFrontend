import {HttpClient} from '@angular/common/http'
import { Component, Injectable, OnInit } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { CreditCard } from '../models/CreditCard';
import { ResponseModel } from '../models/response-model';
@Injectable({
    providedIn:'root'
})
export class CreditCardService {
    apiUrl = 'http://broball.somee.com/IIS/';

    constructor(private httpClient:HttpClient) {}

    addCreditCard(creditCard: CreditCard): Observable<ResponseModel> {
        console.log("yaptı");
        return this.httpClient.post<ResponseModel>(this.apiUrl + "/api/CreditCard/add", creditCard);
      }
}