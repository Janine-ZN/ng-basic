import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    RouterModule,
    SharedModule
  ]
})
export class PageNotFoundModule { }
