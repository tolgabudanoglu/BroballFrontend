import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/response-model';
import { ListResponse } from '../models/listResponse';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'http://broball.somee.com/IIS';
  apiUrl2="http://broball.somee.com/IIS/api/"
  constructor(private httpClient: HttpClient) {}

  loginUser(
    mail: string,
    password: string
  ): Observable<ListResponseModel<User>> {
    let newPath = this.apiUrl + '/Login?mail=' + mail + '&password=' + password;
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }

  updateUser(user: User): Observable<ResponseModel> {
    return this.httpClient.put<ResponseModel>
  (this.apiUrl + '/putUser', user);
  }
  registerUser(user: User): Observable<ResponseModel> {
    console.log(User);
    return this.httpClient.post<ResponseModel>(this.apiUrl + "/post", user);
  }
  getUserByEmail(mail: string): Observable<ListResponseModel<User>>{
    let newPath = this.apiUrl2 + 'Users/getUserByEmail?mail=' + mail;
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }
  getUser():Observable<ListResponseModel<User>>{
    let newPath =this.apiUrl+'/api/Users/getall';
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }
  getUserById(userId: number): Observable<ListResponse> {
    let newPath = this.apiUrl + '/getUserById?id=' + userId;
    return this.httpClient.get<ListResponse>(newPath);
  }
  sendMail(mail:string): Observable<ListResponse>{
    let newPath = this.apiUrl + "/sendMail?email=" + mail;
    return this.httpClient.get<ListResponse>(newPath);
  }
  sendMail2(mail:string): Observable<ListResponse>{
    let newPath = this.apiUrl + "/sendMail2?email=" + mail;
    return this.httpClient.get<ListResponse>(newPath);
  }
  sendMail3(mail:string): Observable<ListResponse>{
    let newPath = this.apiUrl + "/sendMail3?email=" + mail;
    return this.httpClient.get<ListResponse>(newPath);
  }

 
 

  getUsers():Observable<ListResponseModel<User>>{
    let newPath=this.apiUrl2+"Users/getall";
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }
  
  getUsersByCity(citiesId:number):Observable<ListResponseModel<User>>{
    let newPath=this.apiUrl2+"Users/getusersbycitiesid?citiesId="+citiesId
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }
  getUsersByUser(userId:number):Observable<ListResponse>{
    let newPath=this.apiUrl2+"Users/getusersbyuserid?userId="+userId
    return this.httpClient.get<ListResponse>(newPath);
  }
  getUsersByEmail(mail:string):Observable<ListResponseModel<User>>{
    let newPath=this.apiUrl2+"Users/getUserByEmail?mail="+mail
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }
  getPasswordByUserId(id:number):Observable<ListResponseModel<User>>{
    let newPath=this.apiUrl2+"Users/getPasswordByUserId?id="+id
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }
  getStarPointdByUserId(id:number):Observable<ListResponseModel<User>>{
    let newPath=this.apiUrl2+"Users/getStarPointByUserId?id="+id
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }
  getTeamIdByUserId(id:number):Observable<ListResponseModel<User>>{
    let newPath=this.apiUrl2+"Users/getTeamIdByUserId?id="+id
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }
  getLeagueIdByUserId(id:number):Observable<ListResponseModel<User>>{
    let newPath=this.apiUrl2+"Users/getLeagueIdByUserId?id="+id
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }
  getSubscribeIdByUserId(id:number):Observable<ListResponseModel<User>>{
    let newPath=this.apiUrl2+"Users/getSubscribeIdByUserId?id="+id
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }
  getAsistByUserId(id:number):Observable<ListResponseModel<User>>{
    let newPath=this.apiUrl2+"Users/getAsistByUserId?id="+id
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }
  getCitiesIdByUserId(id:number):Observable<ListResponseModel<User>>{
    let newPath=this.apiUrl2+"Users/getCitiesIdByUserId?id="+id
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }
  getReasonForPenaltyByUserId(id:number):Observable<ListResponseModel<User>>{
    let newPath=this.apiUrl2+"Users/getReasonForPenaltyByUserId?id="+id
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }
  getScoreByUserId(id:number):Observable<ListResponseModel<User>>{
    let newPath=this.apiUrl2+"Users/getScoreByUserId?id="+id
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }
  getEmailByUserId(id:number):Observable<ListResponseModel<User>>{
    let newPath=this.apiUrl2+"Users/getEmailByUserId?id="+id
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }






  
 



}