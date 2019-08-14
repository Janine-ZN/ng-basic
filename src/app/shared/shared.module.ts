import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// share form: teamplate form/reactive form
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// share router
import { RouterModule } from '@angular/router';
// share zorro
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BreadcrumbComponent } from './component/breadcrumb/breadcrumb.component';

// share component

// share pipe

// share directive


@NgModule({
  // 用来注册组件和管道
  declarations: [BreadcrumbComponent],
  // 用来注册模板
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgZorroAntdModule
  ],
  // 本模板里注册或pipe或组件等导出去
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgZorroAntdModule
  ]
})
export class SharedModule { }
