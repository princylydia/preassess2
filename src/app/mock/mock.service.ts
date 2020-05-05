import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockService {
  getUsers(): Array<{}> {
    return [
        {
          emplocation:'location1',
          empphone:'phone1',
          empbackground:'background1'
        }
       
    ];
  }
}
