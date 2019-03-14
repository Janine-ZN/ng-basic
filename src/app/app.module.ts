import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';

import { AppComponent } from './app.component';
import { RxjsAsyComponent } from './components/rxjs-asy/rxjs-asy.component';
import { BasicComponent } from './components/basic/basic.component';
import { AntZorroComponent } from './components/ant-zorro/ant-zorro.component';
import { FormComponent } from './components/form/form.component';
import { SearchComponent } from './components/search/search.component';
import { FormValidationComponent } from './components/form-validation/form-validation.component';
import { FromTemplateValidationComponent } from './components/from-template-validation/from-template-validation.component';

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
    NgZorroAntdModule
  ],
  bootstrap: [AppComponent],
  /** 配置 ng-zorro-antd 国际化（文案 及 日期） **/
  providers: [
    { provide: NZ_I18N, useValue: zh_CN }
  ]
})
export class AppModule { }
