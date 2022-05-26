import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component implements OnInit {

  data:any=this.dataService.data2;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

}
