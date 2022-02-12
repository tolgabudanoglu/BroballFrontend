import { Component, OnInit } from '@angular/core';
import { Resim } from 'src/app/models/resim';
import { ResimService } from 'src/app/service/resimService';





declare var $:any;
@Component({
  selector: 'app-goruntular',
  templateUrl: './goruntular.component.html',
  styleUrls: ['./goruntular.component.css']
})
export class GoruntularComponent implements OnInit {

  resims:Resim[];
  resim = new Resim();
  imageFiles: File[];
  dataLoaded=false;
  result: boolean;
  
  
  


  constructor(private resimService : ResimService ) { }

  ngOnInit() {
    this.getImage();
  }

  getImage(){
    this.resimService.getImage().subscribe(response => {
      this.resims = response.data
      this.dataLoaded=true
  })
  }
 
  

}


