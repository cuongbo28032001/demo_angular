import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DMNCC } from 'src/app/models/dmncc';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{

  constructor( private dataService: DataService, private router:Router){}


  dataSelect:DMNCC = new DMNCC();

  ngOnInit(): void {
    
    this.dataSelect = this.dataService.getData();
    console.log(this.dataSelect);
  }

  onSubmit()
  {
    this.dataService.sendUpdateRequest(this.dataSelect).subscribe(data => {
      this.router.navigate([""])
    })
  }
}


