import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DMNCC } from 'src/app/models/dmncc';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  constructor( private dataService: DataService, private router:Router){};

  dataCreate:DMNCC = new DMNCC();

  
  onSubmit()
  {
    this.dataService.createRequest(this.dataCreate).subscribe(data => {
      this.router.navigate([""])
    })
  }
}
