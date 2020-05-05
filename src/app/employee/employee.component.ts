import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  text = 'employee page';
  employeeForm:FormGroup;
  empy;
  emp={
    name1:'',name2:'',salary:'',street1:'',street2:'',location:''
  };
  submitted=false;
  constructor() {
    this.createForm();
   }
   createForm():void{
    this.employeeForm=new FormGroup({
      'name1':new FormControl(this.emp.name1,
        [Validators.required,Validators.minLength(4)]),
       
      'name2':new FormControl(this.emp.name2,
          [Validators.required,Validators.minLength(4)]),
  
      'salary':new FormControl(this.emp.salary,
          Validators.required),

      'street1':new FormControl(this.emp.street1,Validators.required),

      'street2':new FormControl(this.emp.street2,Validators.required),

      'location':new FormControl(this.emp.location,Validators.required)
    });
  }


  ngOnInit(): void {
  }
  onSubmit(): void {
    this.submitted = true;
  }

}
