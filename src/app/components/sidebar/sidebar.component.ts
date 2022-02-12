
import { Component, OnInit } from '@angular/core';

import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  
  apiUrl="https://localhost:44318/api/City/getall"
  constructor(private httpClient:HttpClient) { }
  
  
  filterText="";
  filterText2="";


  ngOnInit(): void {
    console.log("init calisti");
    
  }

  
  


}
