import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';

import { AppComponent } from './app.component';
import { RxjsAsyComponent } from './components/rxjs-asy/rxjs-asy.component';

@NgModule({
  // 声明组件
  declarations: [
    AppComponent,
    RxjsAsyComponent
  ],
  // 导入模板
  imports: [
    BrowserModule,
    NgZorroAntdModule
  ],
  bootstrap: [AppComponent],
  /** 配置 ng-zorro-antd 国际化（文案 及 日期） **/
  providers: [
    { provide: NZ_I18N, useValue: zh_CN }
  ]
})
export class AppModule { }
