import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DMNCC } from 'src/app/models/dmncc';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
 
  dmncc: DMNCC[];
  constructor( private dataService: DataService, private router:Router){}
  
  ngOnInit(): void {
    this.dataService.sendGetRequest().subscribe(data =>{
      this.dmncc = data;
    })
  }

  selectDataColumn(selectData:any){
    this.dataService.setData(selectData);
  }

  selectIdColumn(selectId: any){
    this.dataService.deleteRequest(selectId).subscribe(data => {
      this.ngOnInit();
    })
  }
  
}
