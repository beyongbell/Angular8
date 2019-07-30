import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {

  public name = "Tinnakorn Choompee"
  public myId = "TestId"
  public isDisabled   = true
  public successClass = "text-success"
  public hasError = true
  public isSpecial = true
  public messageClasses = {
    "text-success" : !this.hasError,
    "text-danger"  : this.hasError,
    "text-special" : this.isSpecial
  }
  public highlightColor = "orange";
  public titleStyles = {
    color: "blue",
    fontSize: "40px"
  }
  public greeting = "";
  public displayName = true;
  public color = "red";
  public colors = ['red', 'blue', 'green', 'yellow'];

  public fullname = "BelLNaJa";
  public message  = "Welcome to BelLClub";
  public person : {
    "firstname" : "Tinnakorn",
    "lastname"  : "Choompee"
  }
  public date = new Date();

  @Input() public parentData;
  @Input('parentData') public first_name;
 
  @Output() public childEvent = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return "Hello " + this.name
  }

  onClick() {
    console.log("Welcome to Tinnakorn")
    this.greeting = "Welcome To Tinnakorn"
  }

  onClickEvent(event) {
    console.log(event)
  }

  logMessage(value) {
    console.log(value)
  }

  fireEvent() {
    this.childEvent.emit("Hey Tinnakorn");
  }
}
