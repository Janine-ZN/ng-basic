import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { RoutesModule } from './routes/routes.module';

import { AppComponent } from './app.component';
import { NoDataPipe } from './core/no-data.pipe';
import { HomeModule } from './home/home.module';
import { PageNotFoundModule } from './routes/page-not-found/page-not-found.module';

@NgModule({
  // 声明组件
  declarations: [
    AppComponent,
    NoDataPipe
  ],
  // 导入模板
  imports: [
    BrowserModule,
    FormsModule,
    NgZorroAntdModule,
    HomeModule,
    PageNotFoundModule,
    RoutesModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent],
  /** 配置 ng-zorro-antd 国际化（文案 及 日期） **/
  providers: [
    { provide: NZ_I18N, useValue: zh_CN }
  ]
})
export class AppModule { }
