import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
@NgModule({
  declarations: [HomeComponent],
  imports: [
    NgZorroAntdModule,
    CommonModule
  ]
})
export class HomeModule { }
