import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { DMNCC } from 'src/app/models/dmncc';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
 
  dmncc: DMNCC[];
  pageSizes = [5, 10, 50, 100];
  pageSize = 5;
  pageNumber = 0;
  dSNCCrequest:object;
  dSNCCPagerequest:object;
  request:object;
  totalPage:number;
  form:object;
  
  constructor( private dataService: DataService, private router:Router){}
  
  ngOnInit(): void {
    this.dSNCCrequest = {};
    this.getDMNCC();
  };


  selectDataColumn(selectData:any){
    this.dataService.setData(selectData);
  }

  selectIdColumn(selectId: any){
    this.dataService.deleteRequest(selectId).subscribe(data => {
      this.ngOnInit();
    })
  }

  private getDMNCC(){
    if(this.pageNumber >= this.totalPage && this.pageNumber > 0)
    {
      this.pageNumber = this.totalPage - 1;
    }
    else if(this.pageNumber < 0)
    {
      this.pageNumber = 0;
    }
    this.dSNCCPagerequest = {pageNumber: 1, pageSize:5};
    console.log(this.dSNCCPagerequest);
    this.request = {'dmncc': this.dSNCCrequest, 'pageDto': this.dSNCCPagerequest};
    console.log(this.request);
    this.dataService.sendGetRequest(this.request).pipe(map(result => result['data'])).subscribe(data => {
      this.dmncc = data.content;
      console.log(data);
      this.totalPage = data.totalPages;
      if(this.totalPage == 0)
      {
        alert("No Data Exist !");
        this.dSNCCrequest = {};
        console.log(this.request);
        this.getDMNCC();
      }
      
    })
  }

  updatePageSize(e: any) {
    this.pageSize = e.target.value;
    this.getDMNCC();
  }

  nextPaging() {
    this.pageNumber += 1;
    this.getDMNCC();
  }

  firstPage() {
    this.pageNumber = 0;
    this.getDMNCC();
  }

  previousPaging() {
    this.pageNumber = this.pageNumber - 1;
    this.getDMNCC();
  }

  lastPage() {
    this.pageNumber = this.totalPage - 1;
    this.getDMNCC();
  }
  
}
