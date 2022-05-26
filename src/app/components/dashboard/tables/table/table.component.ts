import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  data:any=this.dataService.data1;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

}
