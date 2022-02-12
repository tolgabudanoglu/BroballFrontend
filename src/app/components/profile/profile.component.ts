import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { CommentService } from 'src/app/service/comment.service';
import { UserService } from 'src/app/service/user.service';
import { Comment } from 'src/app/models/comment';
declare var $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = new User();
  users:User[]=[];
  cities: any[];
  userId:any;
  result:boolean;
  comment=new Comment();
  comments:Comment[]=[];
  pass:any

  constructor(
    private userService: UserService,
    private router:Router,
    private commentService:CommentService
  ) {}

  ngOnInit(): void {
    this.getUserByUserId();
   this.getCommentByEmail();
  }
 
  //Prifil bilgilerini getiren method
  getUserByUserId() {
    var q = document.URL;
    var userId = parseInt(q.split('profile/')[1]);
    this.userService.getUsersByUser(userId).subscribe((response) => {
    this.users=response.data;
    });
  }
  updateProfileById(){
    var a=document.URL;
     this.userId=parseInt(a.split('profile/')[1]);

    this.router.navigateByUrl("/createprofile/"+this.userId)
   
  }
  postComment(){
    this.comment.email=$('#email').val();
    this.comment.commentDesc=$('#commentDesc').val();
  
    this.commentService.postComments(this.comment).subscribe((res) => {
      this.result = res.success;
    });
  }
  

  getCommentByEmail(){
    var q=document.URL;
    var id=parseInt(q.split('profile/')[1]);
    

    this.userService.getEmailByUserId(id).subscribe((response) => {
      this.pass=response.data;
      this.commentService.getCommentsByEmail(this.pass).subscribe((response)=>{
        this.comments=response.data;
      })
     });
  }

  getStarPointdByUserId() {
    var q=document.URL;
    var id=parseInt(q.split('profile/')[1]);
   


    this.userService.getStarPointdByUserId(id).subscribe((response) => {
    this.pass=response.data;
      this.user.starPoint=this.pass;
       });
  }
  
 

 
  

  
}
