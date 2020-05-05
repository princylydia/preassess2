import { Component, OnInit } from '@angular/core';
import { EmpuserService } from './empuser.service';
@Component({
  selector: 'app-empdet',
  templateUrl: './empdet.component.html',
  styleUrls: ['./empdet.component.css']
})
export class EmpdetComponent implements OnInit {
  text='detail';
  users;
  constructor(private empuserService:EmpuserService) { 
    this.users=this.empuserService.getUsers();
  }

  ngOnInit(): void {
  }

}
