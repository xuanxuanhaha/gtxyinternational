import { Component, OnInit } from '@angular/core';
import newsarticles from '../../assets/news.json';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
@Component({
  selector: 'app-newsdetailpage',
  templateUrl: './newsdetailpage.component.html',
  styleUrls: ['./newsdetailpage.component.css']
})
export class NewsdetailpageComponent implements OnInit {

// 定义字典
  objectKeys = Object.keys;
  // article list
  public articleList: {
    Title: string,
    Type: string,
    CoverPage: string,
    Date: string,
    Year: string,
    Month: string,
    Day: string,
    Author: string,
    Content: {}
  }[] = newsarticles;
  // url id
  public articleid: number;
  public previousarticelid;
  public nextarticleid;
  // 当前文章内容列表
  public singlearticlecontent: {
    Title: string,
    Type: string,
    CoverPage: string,
    Date: string,
    Year: string,
    Month: string,
    Day: string,
    Author: string,
    Content: {}};
  // 前一页文章内容列表
  public previousarticlecontent: {
    Title: string,
    Type: string,
    CoverPage: string,
    Date: string,
    Year: string,
    Month: string,
    Day: string,
    Author: string,
    Content: {}};
  // 后一页文章内容
  // 当前文章内容列表
  public nextarticlecontent: {
    Title: string,
    Type: string,
    CoverPage: string,
    Date: string,
    Year: string,
    Month: string,
    Day: string,
    Author: string,
    Content: {}};

  constructor(private routeInfo: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.articleid = Number(this.routeInfo.snapshot.params.id);
    // this.routeInfo.queryParamMap.subscribe((params: ParamMap) => {
    //   this.articleid = Number(params.get('id'));
    // });
    this.showarticlecontent();
    this.showpreviousarticlecontent();
    this.shownextarticlecontent();
  }
  async showarticlecontent() {
    this.singlearticlecontent = this.articleList[this.articleid];
  }
  // button显示前一页的标题内容
  async showpreviousarticlecontent() {
    this.previousarticlecontent = newsarticles[0];
    if (this.articleid > 0) {
      this.previousarticlecontent = this.articleList[this.articleid - 1];
    } else {
      // this.previousarticlecontent.Title = '没有了';
    }
  }
  // button显示后一页的标题内容
  async shownextarticlecontent() {
    this.nextarticlecontent = newsarticles[0];
    if (this.articleid < this.articleList.length - 1) {
      this.nextarticlecontent = this.articleList[this.articleid + 1];
    } else {
      // this.nextarticlecontent.Title = '没有了';
    }
  }
  // 文章的前一页
  previouspage() {
    if (this.articleid > 0) {
      this.articleid = this.articleid - 1;
      this.router.navigateByUrl('/newspagedongtai/' + this.articleid);
      this.showarticlecontent();
      this.showpreviousarticlecontent();
      this.shownextarticlecontent();
    } else {
      this.articleid = 0;
    }
  }
  // 文章的后一页
  nextpage() {
    if (this.articleid < this.articleList.length - 1) {
      this.articleid = this.articleid + 1;
      this.router.navigateByUrl('/newspagedongtai/' + this.articleid);
      this.showarticlecontent();
      this.shownextarticlecontent();
      this.showpreviousarticlecontent();
    } else {
      this.articleid = this.articleList.length - 1;
    }
  }

}
