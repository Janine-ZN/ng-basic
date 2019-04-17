import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';

const routes: Routes = [
  {
    path: '', component: NewsListComponent,
  },
  /* {
    path: 'news-list', component: NewsListComponent,
  },
  {
    path: 'news-detail', component: NewsDetailComponent,
  }, */
];

@NgModule({
  declarations: [NewsListComponent, NewsDetailComponent],
  imports: [
    RouterModule.forRoot(routes),
    SharedModule
  ]
})
export class NewsModule { }
