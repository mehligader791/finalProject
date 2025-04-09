import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  constructor() {}

  fetchData(): Promise<any> {
    // Simulate fetching data
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('Data fetched successfully!'), 1000);
    });
  }
}
