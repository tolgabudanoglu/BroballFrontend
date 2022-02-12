import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ListResponseModel } from "../models/listResponseModel";
import { Question } from "../models/question";
import { ResponseModel } from "../models/response-model";




@Injectable({
    providedIn: 'root'
})
export class QuestionService {
    apiUrl = 'http://broball.somee.com/IIS/';
    apiUrl2="http://broball.somee.com/IIS/api/"

    constructor(private httpClient:HttpClient){}

    questionAdd(question: Question): Observable<ResponseModel> {
        console.log(Question);
        return this.httpClient.post<ResponseModel>(this.apiUrl + "/api/Question/add", question);
      }

}