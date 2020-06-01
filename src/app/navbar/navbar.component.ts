import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(window.location.href);
    if(window.location.href.includes('home')){
      document.getElementById('home').style.border = '1px solid #fabb7c';
      document.getElementById('home-a').style.color = '#fabb7c';
      document.getElementById('home-a').style.fontWeight = '600';
    }else{
      document.getElementById('home').style.border = '1px solid white';
      document.getElementById('home-a').style.color = 'navy';
      document.getElementById('home-a').style.fontWeight = '400';
    }
    if(window.location.href.includes('overseas-students')){
      document.getElementById('overseas-students').style.border = '1px solid #fabb7c';
      document.getElementById('overseas-students-a').style.color = '#fabb7c';
      document.getElementById('overseas-students-a').style.fontWeight = '600';
    }else{
      document.getElementById('overseas-students').style.border = '1px solid white';
      document.getElementById('overseas-students-a').style.color = 'navy';
      document.getElementById('overseas-students-a').style.fontWeight = '400';
    }
    if(window.location.href.includes('overseas-training')){
      document.getElementById('overseas-training').style.border = '1px solid #fabb7c';
      document.getElementById('overseas-training-a').style.color = '#fabb7c';
      document.getElementById('overseas-training-a').style.fontWeight = '600';
    }else{
      document.getElementById('overseas-training').style.border = '1px solid white';
      document.getElementById('overseas-training-a').style.color = 'navy';
      document.getElementById('overseas-training-a').style.fontWeight = '400';
    }
    if(window.location.href.includes('news')){
      document.getElementById('news').style.border = '1px solid #fabb7c';
      document.getElementById('news-a').style.color = '#fabb7c';
      document.getElementById('news-a').style.fontWeight = '600';
    }else{
      document.getElementById('news').style.border = '1px solid white';
      document.getElementById('news-a').style.color = 'navy';
      document.getElementById('news-a').style.fontWeight = '400';
    }

    if(window.location.href.includes('learning-resources')){
      document.getElementById('learning-resources').style.border = '1px solid #fabb7c';
      document.getElementById('learning-resources-a').style.color = '#fabb7c';
      document.getElementById('learning-resources-a').style.fontWeight = '600';
    }else{
      document.getElementById('learning-resources').style.border = '1px solid white';
      document.getElementById('learning-resources-a').style.color = 'navy';
      document.getElementById('learning-resources-a').style.fontWeight = '400';
    }

    if(window.location.href.includes('about-us')){
      document.getElementById('about-us').style.border = '1px solid #fabb7c';
      document.getElementById('about-us-a').style.color = '#fabb7c';
      document.getElementById('about-us-a').style.fontWeight = '600';
    }else{
      document.getElementById('about-us').style.border = '1px solid white';
      document.getElementById('about-us-a').style.color = 'navy';
      document.getElementById('about-us-a').style.fontWeight = '400';
    }




  }
   clickimg(){
    window.open('http://www.gtxy.cn/index.html');
   }

}
