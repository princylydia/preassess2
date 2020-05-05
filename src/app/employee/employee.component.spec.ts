import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeComponent } from './employee.component';
import { DebugElement } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeComponent ],
      imports: [
        BrowserModule,
       FormsModule,
      ReactiveFormsModule
      ]
    })
    .compileComponents().then(() =>{
      fixture = TestBed.createComponent(EmployeeComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      de = fixture.debugElement.query(By.css('form'));
    el = de.nativeElement;


    });
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have as text'employee page'`,async(()=>{
    expect(component.text).toEqual('employee page');
  }));
  
  
  it(`should set submitted to true`,async(()=>{
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
   }));
   it(`form should be invalid`,async(()=>{
    component.employeeForm.controls['name1'].setValue('');
    component.employeeForm.controls['name2'].setValue('');
    component.employeeForm.controls['salary'].setValue('');
    component.employeeForm.controls['street1'].setValue('');
    component.employeeForm.controls['street2'].setValue('');
    component.employeeForm.controls['location'].setValue('');
    expect(component.employeeForm.valid).toBeFalsy();
  }));
  it(`form should be valid`,async(()=>{
    component.employeeForm.controls['name1'].setValue('shanthinii');
    component.employeeForm.controls['name2'].setValue('sakthivel');
    component.employeeForm.controls['salary'].setValue('1254');
    component.employeeForm.controls['street1'].setValue('menabedu');
    component.employeeForm.controls['street2'].setValue('ambattur');
    component.employeeForm.controls['location'].setValue('chennai');
    expect(component.employeeForm.valid).toBeTruthy();
  })); 
 

});

