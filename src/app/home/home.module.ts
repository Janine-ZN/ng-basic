import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './page/home.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    NgZorroAntdModule,
    RouterModule,
    SharedModule
  ]
})
export class HomeModule { }
