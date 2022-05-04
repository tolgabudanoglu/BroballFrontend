import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';
declare var $:any
@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {

  result:boolean;
  user=new User();
  users:User[]=[];
  arr:String
 
  userId:any;
  pass:any;

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
   this.getPasswordByUserId()
   this.getStarPointdByUserId()
   this.getTeamIdByUserId()
   this.getLeagueIdByUserId()
   this.getSubscribeIdByUserId()
   this.getAsistByUserId()
   this.getCitiesIdByUserId()
   this.getReasonForPenaltyByUserId()
   this.getScoreByUserId()
  }

  str: any;
  num: any;

  
  updateUser(){
    var q=document.URL;
    var x=parseInt(q.split('createprofile/')[1]);
    this.user.userId=x;
    this.user.name = $('#name').val();
    this.user.email=$('#email').val();
    this.user.adress=$('#adress').val();
    this.user.tel=$('#tel').val();
    this.user.instagram=$('#instagram').val();
    this.user.twitter=$('#twiterr').val();
    this.user.nickName=$('#nickName').val();
    this.user.lastName=$('#lastName').val();
    this.user.position=$('#posiiton').val();
    this.user.team=$('#team').val();
    this.user.job=$('#job').val();
    this.user.dateOfBirth = new Date("2019-01-16");  
    this.user.facebook=$('#facebook').val();
    this.user.website=$('#website').val();
 

    this.userService.updateUser(this.user).subscribe((res) => {
      this.result = res.success;
      var q=document.URL;
       var x=parseInt(q.split('createprofile/')[1]);
      if (this.result) {
        this.router.navigateByUrl("/profile/"+x);
        
      } else {
        $('.error').css('display', 'block');
      }
     
    });
  }

  
  getPasswordByUserId() {
    var q=document.URL;
    var id=parseInt(q.split('createprofile/')[1]);
    this.userService.getPasswordByUserId(id).subscribe((response) => {
    this.pass=response.data;
      this.user.password=this.pass;
       });
  }
  
  getStarPointdByUserId() {
    var q=document.URL;
    var id=parseInt(q.split('createprofile/')[1]);
    this.userService.getStarPointdByUserId(id).subscribe((response) => {
    this.pass=response.data;
      this.user.starPoint=this.pass;
       });
  }
  getTeamIdByUserId() {
    var q=document.URL;
    var id=parseInt(q.split('createprofile/')[1]);
    this.userService.getTeamIdByUserId(id).subscribe((response) => {
    this.pass=response.data;
      this.user.teamId=this.pass;
       });
  }
  getLeagueIdByUserId() {
    var q=document.URL;
    var id=parseInt(q.split('createprofile/')[1]);
    this.userService.getLeagueIdByUserId(id).subscribe((response) => {
    this.pass=response.data;
      this.user.leagueId=this.pass;
       });
  }
  getSubscribeIdByUserId() {
    var q=document.URL;
    var id=parseInt(q.split('createprofile/')[1]);
    this.userService.getSubscribeIdByUserId(id).subscribe((response) => {
    this.pass=response.data;
      this.user.teamId=this.pass;
       });
  }
  getAsistByUserId() {
    var q=document.URL;
    var id=parseInt(q.split('createprofile/')[1]);
    this.userService.getAsistByUserId(id).subscribe((response) => {
    this.pass=response.data;
      this.user.asist=this.pass;
       });
  }
  getCitiesIdByUserId() {
    var q=document.URL;
    var id=parseInt(q.split('createprofile/')[1]);
    this.userService.getCitiesIdByUserId(id).subscribe((response) => {
    this.pass=response.data;
      this.user.citiesId=this.pass;
       });
  }
  getReasonForPenaltyByUserId() {
    var q=document.URL;
    var id=parseInt(q.split('createprofile/')[1]);
    this.userService.getReasonForPenaltyByUserId(id).subscribe((response) => {
    this.pass=response.data;
      this.user.reasonOfPenalty=this.pass;
       });
  }
  getScoreByUserId() {
    var q=document.URL;
    var id=parseInt(q.split('createprofile/')[1]);
    this.userService.getScoreByUserId(id).subscribe((response) => {
    this.pass=response.data;
      this.user.score=this.pass;
       });
  }



}



