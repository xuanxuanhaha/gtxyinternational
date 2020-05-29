import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  showmore = false;
  ngOnInit() {
    this.showmore = false;
    window.scrollTo(0, 0);
  }

  showmorebtn(){
    this.showmore = !this.showmore;
  }

}
