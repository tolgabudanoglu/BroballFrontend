import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { InqueryService } from 'src/app/service/inquery.service';
import { Inquery } from 'src/app/models/Inquery';
import { Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/service/question.service';
import { UserService } from 'src/app/service/user.service';
declare var $: any;
@Component({
  selector: 'app-sss',
  templateUrl: './sss.component.html',
  styleUrls: ['./sss.component.css']
})
export class SssComponent implements OnInit {
  inqueries:Inquery[];
  dataLoaded=false;
  result: boolean;
  apiUrl = "https://localhost:44318"
  question= new Question();
  
  constructor(private httpClient:HttpClient,private inqueryService:InqueryService,private questionService:QuestionService,private userService:UserService) { }

  ngOnInit(): void {
    this.getInquery();
  }
  getInquery(){
    this.inqueryService.getInquery().subscribe(response => {
      this.inqueries = response.data
      this.dataLoaded=true
    })
  }
  addQuestion(){
    this.question.email=$('#sorumail').val();
    this.question.soru=$('#sorusoru1').val();

    this.userService.sendMail3($('#sorumail').val()).subscribe(resp=>{
      window.alert(resp.message)
      
      
    })

    this.questionService.questionAdd(this.question).subscribe((res) => {
      this.result=res.success;

      if (this.result) {
        window.location.href = '/sss';
      } else {
        window.alert('Soru Gönderilemedi');
      }



    });
    

  }

  sendMail3(){
    this.userService.sendMail3($('#sorumail').val()).subscribe(resp=>{
      window.alert(resp.message)
      window.location.href = '/home';
      
    })
}
}
