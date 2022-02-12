import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/City';
import { Field } from 'src/app/models/Field';
import { CityService } from 'src/app/service/city.service';
import { FieldService } from 'src/app/service/field.Service';



declare var $:any;
@Component({
  selector: 'app-fieldinfo',
  templateUrl: './fieldinfo.component.html',
  styleUrls: ['./fieldinfo.component.css']
})
export class FieldinfoComponent implements OnInit {  
  result: boolean;
  field = new Field();
  cities: any[];
  dataLoaded=false;

  constructor(private fieldService :FieldService , private cityService :CityService) { }

  ngOnInit(): void {
    this.getCity();
  }
  addField(){
    
    this.field.fieldName = $('#fieldName').val();
    this.field.citiesId = parseInt($('#city').val());
    this.field.fieldAdress = $('#address').val();
    this.field.phoneNumber = $('#phoneNumber').val();
    this.field.numberOfPlayers =parseInt( $('#numberOfPlayers').val());
    this.field.openHour = parseInt($('#openHour').val());
    this.field.closeHour = parseInt ($('#closeHour').val());
    
    

    this.fieldService.addField(this.field).subscribe((res) =>{
      this.result = res.success;
      console.log(res);
    

    if(this.result){
      window.alert('Başarıyla eklendi');
    }else{
      window.alert('yapılmadı');
    }
  });

 
  }
  getCity(){
    this.cityService.getCity().subscribe(response => {
      this.cities = response.data
      this.dataLoaded=true
      
    })

  }}




