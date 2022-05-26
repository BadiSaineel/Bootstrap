import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public data1:any=  [
    { value: 7000, name: 'Rent' },
    { value: 3000, name: 'Grocery' },
    { value: 800, name: 'Transport' },
    { value: 300, name: 'Current' },
    { value: 2000, name: 'School Fee' },
    { value: 1900, name: 'Savings' }
  ]
  public data2:any=  [
    { value: 7000, name: 'Rent' },
    { value: 3000, name: 'Grocery' },
    { value: 800, name: 'Transport' },
    { value: 9000, name: 'Current' },
    { value: 2000, name: 'School Fee' },
    { value: 1900, name: 'Savings' }
  ]
  public data3:any=  [
    { value: 7000, name: 'Rent' },
    { value: 3000, name: 'Grocery' },
    { value: 800, name: 'Transport' },
    { value: 10000, name: 'Current' },
    { value: 2000, name: 'School Fee' },
    { value: 1900, name: 'Savings' }
  ]
  constructor() { }
}
