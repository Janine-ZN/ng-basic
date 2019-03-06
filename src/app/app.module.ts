import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
