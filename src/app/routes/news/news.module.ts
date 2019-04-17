import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';

@NgModule({
  declarations: [NewsListComponent, NewsDetailComponent],
  imports: [
    SharedModule
  ]
})
export class NewsModule { }
