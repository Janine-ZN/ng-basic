import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class PageNotFoundModule { }
