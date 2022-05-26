import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor(private dataService:DataService) { }
  data:any = this.dataService.data1;

  labels:string[]=[];
  values:number[]=[];
  ngOnInit(): void {
    for(let item of this.data ){
      this.labels.push(item.name);
      this.values.push(item.value);
    }
  }

  option:EChartsOption = {
    xAxis: {
      type: 'category',
      data: this.labels
    },
    yAxis: {
      type: 'value'
    },
    legend: {
      orient: 'horizontal',
      left: 'center'
    },
    series: [
      {
        data: this.values,
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }
    ]
  };

}
