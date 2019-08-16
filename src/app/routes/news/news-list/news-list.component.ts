import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  goToDetail() {
    /*
    this.router.navigate(['/home/news/news-detail', 1]);
    this.router.navigate(['/home/news/news-detail/1']);
    {
      path: 'news-detail/:id', component: NewsDetailComponent,
    }
    */
    /*
    this.router.navigate(['/home/news/news-detail'], { queryParams: { 'id': '2' } });
    {
      path: 'news-detail', component: NewsDetailComponent,
    }
    */
    // this.router.navigateByUrl('/home/news/news-detail?id=' + 1);
    this.router.navigateByUrl('/home/news/news-detail');
    // this.router.navigate(['/home/news/news-detail', 1]);
  }

  ngOnInit() {
  }

}
