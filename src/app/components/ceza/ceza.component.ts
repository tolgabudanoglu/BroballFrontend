import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-ceza',
  templateUrl: './ceza.component.html',
  styleUrls: ['./ceza.component.css']
})
export class CezaComponent implements OnInit {

  users:User[];
  dataLoaded=false;
  apiUrl = "https://localhost:44318"
  constructor(private httpClient:HttpClient,private userService:UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUser().subscribe(response => {
      this.users = response.data
      this.dataLoaded=true
    })
  }
  

}
