import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment';
import { ListResponse } from '../models/listResponse';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/response-model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  apiUrl = 'http://broball.somee.com/IIS/';
  apiUrl2="http://broball.somee.com/IIS/api/"
  constructor(private httpClient:HttpClient) { }

  getCommentsByEmail(mail:string):Observable<ListResponseModel<Comment>>{
    let newPath=this.apiUrl2+"Comment/getcommentsbyemail?mail="+mail
    return this.httpClient.get<ListResponseModel<Comment>>(newPath);
  }
  postComments(comment:Comment): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'postComment', comment);
  }


}
