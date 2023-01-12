import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'demo';
  listData:any;
  constructor( private webApiService: DataService) { }
  ngOnInit(){
    this.getAllNCC();
  }
  getAllNCC(){
    this.webApiService.sendGetRequest().subscribe((data: any)=>{
      console.log(data);
      this.listData= data;
    })  
  }

}
