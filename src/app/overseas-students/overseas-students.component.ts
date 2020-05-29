import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overseas-students',
  templateUrl: './overseas-students.component.html',
  styleUrls: ['./overseas-students.component.css']
})
export class OverseasStudentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
