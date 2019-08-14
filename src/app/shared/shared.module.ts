import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// share form: teamplate form/reactive form
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// share router
import { RouterModule } from '@angular/router';
// share zorro
import { NgZorroAntdModule } from 'ng-zorro-antd';


// share component
import { BreadcrumbComponent } from './component/breadcrumb/breadcrumb.component';

// share pipe

// share directive

const SHARECOMPONENT = [
  BreadcrumbComponent,
];

@NgModule({
  // 用来注册组件和管道
  declarations: [
    ...SHARECOMPONENT,
  ],
  entryComponents: [
    // ...SHARECOMPONENT,
  ],
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
    NgZorroAntdModule,
    ...SHARECOMPONENT,
  ]
})
export class SharedModule { }
