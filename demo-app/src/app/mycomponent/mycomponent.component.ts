import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent implements OnInit {

  text = 'Das rockt!!!';
  summe = 0;

  constructor() { }

  ngOnInit(): void {
  }

  myClickHandler() {
    this.summe = this.summe + 1;
  }

}
