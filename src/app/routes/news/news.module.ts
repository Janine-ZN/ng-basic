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
  /*
    // =================== 配置参数的值 ===========================
    <p>
      <a routerLink="/home/news/news-detail/1"> 111 </a>
    </p>
    <p>
      <a [routerLink]="['/home/news/news-detail/2']"> 222 </a>
    </p>
    <p>
      <a [routerLink]="['/home/news/news-detail',3]"> 333 </a>
    </p>
    // =================== 配置参数的名称 ===========================
    {
      path: 'news-detail/:id', component: NewsDetailComponent,
    }
    // =================== 通过参数的名，获取参数名 ===========================
    const id = this.route.snapshot.paramMap.get('id');
    const id = this.route.snapshot.params['id'];
    */
  //////////////////////////////////////////////////////////////////////////////////////
  /*
    <p>
      <a [routerLink]="['/home/news/news-detail']" [queryParams]="{id: 4}"> 444 </a>
    </p>

    const id = this.route.snapshot.queryParams['id'];

    <p>
      <a [routerLink]="['/home/news/news-detail']" [queryParams]="{id: 4,title:'新闻详情'}"> 444 - 新闻详情</a>
    </p>

    this.route.queryParams.subscribe((params: Params) => {
      const id = params['id'];
      const title = params['title'];
      console.log('id==>', id);
      console.log('title==>', title);
    });
    {
      path: 'news-detail', component: NewsDetailComponent,
    }
  */
  {
    path: 'news-detail',
    component: NewsDetailComponent,
    data: {
      title: '我是详情页1',
      subtitle: '我是详情页2',
      breadcrumb: '新闻详情'
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
