import { Component, OnInit } from '@angular/core';
import newsarticles from '../../assets/news.json';
import { Router} from '@angular/router'; // 导入router服务
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

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
    Content: {},
  }[] = newsarticles;

  public articleListpage = [];  // 分页后前台显示数据
  pageNo = 1; // 当前页码
  preShow = false; // 上一页
  nextShow = true; // 下一页
  pageSize = 5; // 单页显示数
  totalCount = 0; // 总页数
  pageSizes = [5, 10, 15];
  curPage = 1; // 当前页
  //
  constructor(private router: Router) { }

  ngOnInit() {
    //  显示每页的文章
    this.getPageList();
  }
  // 点击新闻事件
  onClickMe(id) {
    const newsid = (this.curPage - 1) * 5 + id;
    this.router.navigateByUrl('/newsdetailpage/' + newsid);
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

  //  -----------1。实现分页前端部分------------

}
