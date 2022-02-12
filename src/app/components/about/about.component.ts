import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/models/About';
import { AboutService } from 'src/app/service/aboutService';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about: About[];
  dataLoaded=false;

  constructor(private aboutService:AboutService) { }

  ngOnInit(): void {
    this.getAbouts();
  }

  getAbouts(){
    this.aboutService.getAbout().subscribe(response => {
      this.about = response.data
      this.dataLoaded=true
      
    })
  }

}
