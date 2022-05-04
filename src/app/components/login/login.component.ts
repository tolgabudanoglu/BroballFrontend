import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';



declare var $: any;



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  result: any;
  userId: any;


  constructor(private userService: UserService,private router:Router) { }

  ngOnInit(): void {
    
    this.userLogin();
    
  }
  
  userLogin() {
    
    this.userService
      .loginUser($('#mail').val(), $('#pass').val())
      .subscribe((resp) => {
        this.result = resp.success;

        console.log(resp);

      
    });
    this.userService.getUserByEmail($('#mail').val()).subscribe((resp) => {
      this.userId = resp.data;

    if (this.result) {
      this.router.navigateByUrl ("/profile/" + this.userId);
    } else {
      $('.error').css('display', 'block');
    }
  });
  
  }
  sendMail(){
    this.userService.sendMail($('#mailgonder').val()).subscribe(resp=>{
      window.alert(resp.message)
      
    })
  }
  sendMail2(){
    this.userService.sendMail2($('#mailgonder2').val()).subscribe(resp=>{
      window.alert(resp.message)
      
    })
}
}
