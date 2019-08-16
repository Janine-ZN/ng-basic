import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';

const routes: Routes = [
  {
    path: '', component: NewsListComponent,
  },
  {
    path: 'news-list', component: NewsListComponent,
    data: { breadcrumb: '新闻列表' }
  },
  /*{
    path: 'news-detail/:id', component: NewsDetailComponent,
  }*/
  /*{
    path: 'news-detail', component: NewsDetailComponent,
  }*/
  {
    path: 'news-detail',
    component: NewsDetailComponent,
    data: {
      title: '我是详情页',
      subtitle: '我是详情子页',
      data: { breadcrumb: '新闻详情' }
    }
  }
];

@NgModule({
  declarations: [NewsListComponent, NewsDetailComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class NewsModule { }
