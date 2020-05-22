import { Component, OnInit } from '@angular/core';

// @ts-ignore
import newsarticles from '../../assets/learning_resources.json';
import {Router} from '@angular/router';
@Component({
  selector: 'app-learning-resources',
  templateUrl: './learning-resources.component.html',
  styleUrls: ['./learning-resources.component.css']
})
export class LearningResourcesComponent implements OnInit {

  // article list
  public articleList: {
    Title: string
    Content: {
      P1: any;
    },
  }[] = newsarticles;

  public articleListpage = [];  // 分页后前台显示数据
  pageNo = 1; // 当前页码
  preShow = false; // 上一页
  nextShow = true; // 下一页
  pageSize = 10; // 单页显示数
  totalCount = 0; // 总页数
  pageSizes = [5, 10, 15];
  curPage = 1; // 当前页
  //

  pageNoList = [];
  firstload = true;
  showmoreinlibraryresources = false;
  constructor(private router: Router) { }

  ngOnInit() {
    //  显示每页的文章
    this.getPageList();
    for (let i = 0; i < this.pageNo; i++){
      this.pageNoList.push(i + 1);
    }


    console.log(this.pageNoList);
    console.log(this.pageNo);

    this.chooselibraryresources();


  }
  // 点击新闻事件
  onClickMe(id) {
    // console.log(id);
    // console.log(this.articleList[id].Content);
    const openurl = this.articleList[id].Content;
    console.log(openurl.P1);
    window.open(openurl.P1.toString());
  }
//  -----------1。实现分页前端部分------------
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

  // 点击上一页方法
  showPrePage() {
    this.curPage--;
    if (this.curPage >= 1) {
      this.getPageList();
    } else {
      this.curPage = 1;
    }
  }
// 点击下一页方法
  showNextPage() {
    this.curPage++;
    if (this.curPage <= this.pageNo) {
      this.getPageList();
    } else {
      this.curPage = this.pageNo;
    }
  }
// 自定义跳页方法
  onChangePage(value) {
    if (value > this.pageNo) {
      confirm('超出最大页数');
    } else if (value <= 0) {
      this.curPage = 1;
      this.getPageList();
    } else {
      this.curPage = value;
      this.getPageList();
    }
  }
  // 改变每页显示方法
  onChangePageSize(value) {
    this.pageSize = value;
    this.curPage = 1;
    this.getPageList();
  }

  choosePage(value){
    console.log('choosePage', value);
    if (value > this.pageNo) {
      confirm('超出最大页数');
    } else if (value <= 0) {
      this.curPage = 1;
      this.getPageList();
    } else {
      this.curPage = value;
      this.getPageList();
    }


    for(let i = 0; i < this.pageNo; i++){
      if((i + 1) === value){

        document.getElementById('page' + (i + 1)).style.background = 'orange';
        document.getElementById('page' + (i + 1)).style.border = '1px solid orange';
        document.getElementById('page' + (i + 1)).style.color = 'white';
      }else{
        document.getElementById('page' + (i + 1)).style.background = 'white';
        document.getElementById('page' + (i + 1)).style.border = '1px solid lightgrey';
        document.getElementById('page' + (i + 1)).style.color = 'orange';
      }
    }

    this.firstload = false;

  }

  //  -----------1。实现分页前端部分------------
  showmoreoflibraryresources(){
    this.showmoreinlibraryresources = !this.showmoreinlibraryresources;
  }
  chooselibraryresources(){
    document.getElementById('libraryresources').style.background = '#fee6cf';
  }

}
