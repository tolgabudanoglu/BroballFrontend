import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/models/user';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-startball',
  templateUrl: './startball.component.html',
  styleUrls: ['./startball.component.css']
})
export class StartballComponent implements OnInit {
  users:User[];
  dataLoaded=false;
  apiUrl = "https://localhost:44318"
  lat = 37.7647;
  lng = 30.5567;

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
