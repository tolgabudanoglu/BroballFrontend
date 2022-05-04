import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from 'src/app/models/Team';
import { TeamService } from 'src/app/service/team.service';


declare var $:any;
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})


export class CreateComponent implements OnInit {

  result: boolean;
  team = new Team();
  constructor(private teamService : TeamService,private router:Router) { }

  ngOnInit(): void {
  }

  addTeam(){
    this.team.teamName = $('#takımAdı').val();
    this.team.city = $('#takımCity').val();
    this.team.oyuncu1 = $('#oyuncu1').val();
    this.team.oyuncu2 = $('#oyuncu2').val();
    this.team.oyuncu3 = $('#oyuncu3').val();
    this.team.oyuncu4 = $('#oyuncu4').val();
    this.team.oyuncu5 = $('#oyuncu5').val();
    this.team.oyuncu6 = $('#oyuncu6').val();
    this.team.oyuncu7 = $('#oyuncu7').val();
    this.team.oyuncu8 = $('#oyuncu8').val();
        




    this.teamService.addTeam(this.team).subscribe((res) =>{
      this.result = res.success;
      console.log(res);
    

    if(this.result){
      window.alert('takım kaydı yapıldı');
      this.router.navigateByUrl ("/startball");
    }else{
      window.alert('yapılmadı');
    }
  });


   }

}
