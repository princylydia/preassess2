import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpuserService {

  constructor() {
   }
   getUsers():Array<{}> {
    return [
      {
        emplocation:'location1',
        empphone:'phone1',
        empbackground:'background1'
      },
      {
        emplocation:'location2',
        empphone:'phone2',
        empbackground:'background2'   
  }
];
}
}
