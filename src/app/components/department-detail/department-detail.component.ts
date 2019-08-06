import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  departments = [
    { id : 1, name : "Angular"  },
    { id : 2, name : "Node Js"  },
    { id : 3, name : "MongoDB"  },
    { id : 4, name : "Ruby"     },
    { id : 5, name : "Bootstarp"},
  ];

  constructor() { }

  ngOnInit() {
  }

  onSelect(department) {
    console.log(department)
    // this.router.navigate([]);
  }

}
