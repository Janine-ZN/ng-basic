import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './page/home.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
@NgModule({
  declarations: [HomeComponent],
  imports: [
    NgZorroAntdModule,
    RouterModule,
    CommonModule
  ]
})
export class HomeModule { }
