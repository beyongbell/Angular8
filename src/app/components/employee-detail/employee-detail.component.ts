import { Component, OnInit } from '@angular/core';
import { EmployeesHttpService } from '../../services/employees-http.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employees = [];
  public errorMsg = "asdasd";

  constructor(private _employeesHttpService: EmployeesHttpService) { }

  ngOnInit() {
     this._employeesHttpService.getEmployeeHttp()
      .subscribe(data => this.employees = data, error => this.errorMsg = error);
  }

}
