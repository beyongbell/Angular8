import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments = [
    { "id" : 1 , "name" : "Angular"   },
    { "id" : 2 , "name" : "Node"      },
    { "id" : 3 , "name" : "MongoDB"   },
    { "id" : 4 , "name" : "Ruby"      },
    { "id" : 5 , "name" : "Bootstrap" },
  ];

  constructor() { }

  ngOnInit() {
  }

}
