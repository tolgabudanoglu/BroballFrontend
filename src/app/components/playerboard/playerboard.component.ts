import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-playerboard',
  templateUrl: './playerboard.component.html',
  styleUrls: ['./playerboard.component.css']
})
export class PlayerboardComponent implements OnInit {

  users:User[];
  
  dataLoaded=false;
  constructor(private userService : UserService) { }

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
