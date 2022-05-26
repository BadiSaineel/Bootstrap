import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-pie-chart3',
  templateUrl: './pie-chart3.component.html',
  styleUrls: ['./pie-chart3.component.css']
})
export class PieChart3Component implements OnInit {

  data:any = this.dataService.data3;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
   
  }
 

  pieOptions: EChartsOption = {
    
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: this.data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };


}
