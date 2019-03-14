import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';

import { AppComponent } from './app.component';
import { RxjsAsyComponent } from './components/views/rxjs-asy/rxjs-asy.component';
import { BasicComponent } from './components/views/basic/basic.component';
import { AntZorroComponent } from './components/views/ant-zorro/ant-zorro.component';
import { FormComponent } from './components/views/form/form.component';
import { SearchComponent } from './components/views/search/search.component';
import { FormValidationComponent } from './components/views/form-validation/form-validation.component';
import { FromTemplateValidationComponent } from './components/views/from-template-validation/from-template-validation.component';
// import { AdminModule } from './components/routes/admin/admin.module';

const appRoutes: Routes = [
  { path: 'admin', loadChildren: './components/routes/admin/admin.module#AdminModule' },
];

@NgModule({
  // 声明组件
  declarations: [
    AppComponent,
    RxjsAsyComponent,
    BasicComponent,
    AntZorroComponent,
    FormComponent,
    SearchComponent,
    FormValidationComponent,
    FromTemplateValidationComponent
  ],
  // 导入模板
  imports: [
    BrowserModule,
    FormsModule,
    NgZorroAntdModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  bootstrap: [AppComponent],
  /** 配置 ng-zorro-antd 国际化（文案 及 日期） **/
  providers: [
    { provide: NZ_I18N, useValue: zh_CN }
  ]
})
export class AppModule { }
