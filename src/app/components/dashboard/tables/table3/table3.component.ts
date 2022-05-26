import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-table3',
  templateUrl: './table3.component.html',
  styleUrls: ['./table3.component.css']
})
export class Table3Component implements OnInit {

  data:any=this.dataService.data3;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

}
