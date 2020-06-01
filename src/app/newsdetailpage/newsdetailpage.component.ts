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
    Subtitle: string,
    Author: string,
    Content: {
      Img1: any,
      Img2: any
    }
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
    Subtitle: string,
    Author: string,
    Content: {
      Img1: any,
      Img2: any
    }};
  // 前一页文章内容列表
  public previousarticlecontent: {
    Title: string,
    Type: string,
    CoverPage: string,
    Date: string,
    Year: string,
    Month: string,
    Subtitle: string,
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
    Subtitle: string,
    Author: string,
    Content: {
      Img1: any,
      Img2: any
    }};
  public articleListpage = [];  // 分页后前台显示数据
  pageNo = 1; // 当前页码
  preShow = false; // 上一页
  nextShow = true; // 下一页
  pageSize = 5; // 单页显示数
  totalCount = 0; // 总页数
  pageSizes = [5, 10, 15];
  curPage = 1; // 当前页

  newsNo = 1;
  //
  constructor(private routeInfo: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.articleid = Number(this.routeInfo.snapshot.params.id);
    // this.routeInfo.queryParamMap.subscribe((params: ParamMap) => {
    //   this.articleid = Number(params.get('id'));
    // });
    this.showarticlecontent();
    this.showpreviousarticlecontent();
    this.shownextarticlecontent();
    this.getPageList();
    console.log(this.singlearticlecontent);
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
  getPageList() {
    if (this.articleList.length >= 1) {
      if (this.articleList.length % this.pageSize === 0) {
        this.pageNo = Math.floor(this.articleList.length / this.pageSize);
      } else {
        this.pageNo = Math.floor(this.articleList.length / this.pageSize) + 1;
      }
      if (this.pageNo < this.curPage) {
        this.curPage = this.curPage - 1;
      }
      if (this.pageNo === 1 || this.curPage === this.pageNo) {
        this.preShow = this.curPage !== 1;
        this.nextShow = false;
      } else {
        this.preShow = this.curPage !== 1;
        this.nextShow = true;
      }
    } else {
      this.articleList.length = 0;
      this.pageNo = 1;
      this.curPage = 1;
    }
    this.articleListpage = this.articleList.slice((this.curPage - 1) * this.pageSize, (this.curPage) * this.pageSize);

  }

}
