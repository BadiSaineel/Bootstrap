import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEchartsModule } from 'ngx-echarts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PieChartComponent } from './components/dashboard/pie-charts/pie-chart/pie-chart.component';
import { PieChart2Component } from './components/dashboard/pie-charts/pie-chart2/pie-chart2.component';
import { PieChart3Component } from './components/dashboard/pie-charts/pie-chart3/pie-chart3.component';
import { BarChartComponent } from './components/dashboard/bar-charts/bar-chart/bar-chart.component';
import { BarChart2Component } from './components/dashboard/bar-charts/bar-chart2/bar-chart2.component';
import { BarChart3Component } from './components/dashboard/bar-charts/bar-chart3/bar-chart3.component';
import { TableComponent } from './components/dashboard/tables/table/table.component';
import { Table2Component } from './components/dashboard/tables/table2/table2.component';
import { Table3Component } from './components/dashboard/tables/table3/table3.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PieChartComponent,
    PieChart2Component,
    PieChart3Component,
    TableComponent,
    Table2Component,
    Table3Component,
    BarChartComponent,
    BarChart2Component,
    BarChart3Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    NgxEchartsModule.forRoot({
      echarts: () => import("echarts")
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
