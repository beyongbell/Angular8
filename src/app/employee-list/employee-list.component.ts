import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees = [];

  constructor(private _employeesService: EmployeesService) { }

  ngOnInit() {
    this.employees = this._employeesService.getEmployee();
  }

}
